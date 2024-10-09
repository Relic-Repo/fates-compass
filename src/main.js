// src/main.js for Fate's Compass

import { nodeCharacterData } from './node-character-data.js';
import  nodeSkillData  from './node-skills-data.js';
import { nodeRacialData } from './node-racial-data.js';
import { nodeSpecializationData } from './node-specialization-data.js';
import { nodeToolsData } from './node-tools-data.js';
import { nodeWeaponTrainingData } from './node-weapon-training-data.js';
import { nodeMagicTrainingData } from './node-magic-training-data.js';
import { SKILL_TYPES, MODULE_NAME, TEMPLATES, MAX_TALENT_POINTS } from './compassConfig.js';
import  COMPASS_HANDLERS from './compassHandlers.js';

console.log(
  '%c nodeSkillData: ', 
  'color: white; background-color: blue; font-size: 16px; font-weight: bold; padding: 5px;',
  nodeSkillData
);

const nodeData = {
  character: nodeCharacterData.character,
  skills: nodeSkillData.skills,
  racial: nodeRacialData.racial,
  specializations: nodeSpecializationData.specializations,
  tools: nodeToolsData.tools,
  "weapon-training": nodeWeaponTrainingData["weapon-training"],
  "magic-training": nodeMagicTrainingData["magic-training"]
};

let currentPanel = 'character';
let currentTalent = '';

Hooks.on("renderActorSheet", async (app, html, data) => {
  if (app.actor.type !== "character") return;
  await injectFatesCompassTab(app.actor, html);
});

function calculateTotalPoints(actor) {
  let totalPoints = 0;
  const panels = Object.keys(nodeData);

  panels.forEach(panel => {
    const activeTalentIds = actor.getFlag(MODULE_NAME, `activeTalents.${panel}`) || [];
    const awardTalentIds = actor.getFlag(MODULE_NAME, `awardTalents.${panel}`) || [];

    activeTalentIds.forEach(talentId => {
      if (!awardTalentIds.includes(talentId)) {
        const talents = Object.values(nodeData[panel]).flatMap(talent =>
          talent.branches.flatMap(branch => branch.nodes)
        );
        const node = talents.find(node => node.id === talentId);
        if (node) {
          const nodeDetails = getNodeDetailsById(panel, node.id);
          if (nodeDetails) {
            totalPoints += nodeDetails.pointCost;
          }
        }
      }
    });
  });

  return totalPoints;
}

async function injectFatesCompassTab(actor, html) {
  const totalPoints = calculateTotalPoints(actor);
  const maxPoints = 12; // You can adjust this value or make it dynamic if needed

  const templateData = {
    icons: [
      { class: "fa-solid fa-address-card", toggle: "character", title: "Character" },
      { class: "fa-solid fa-certificate", toggle: "skills", title: "Skills" },
      { class: "fa-solid fa-users", toggle: "racial", title: "Racial" },
      { class: "fa-solid fa-star", toggle: "specializations", title: "Specializations" },
      { class: "fa-solid fa-hammer", toggle: "tools", title: "Tools" },
      { class: "fa-solid fa-sword", toggle: "weapon-training", title: "Weapon Training" },
      { class: "fa-solid fa-wand-sparkles", toggle: "magic-training", title: "Magic Training" },
      { class: "fa-solid fa-save", toggle: "save", title: "Save Changes" },
      { class: "fa-solid fa-scroll", toggle: "points", title: "Talent Points" }
    ],
    points: `${totalPoints}/${MAX_TALENT_POINTS}`,
  };

  const nav = html.find('.tabs[data-group="primary"]');
  const featuresTab = nav.find('a[data-tab="features"]');
  const fatesCompassTab = `<a class="item" data-tab="${MODULE_NAME}"><i class="fa-regular fa-compass"></i></a>`;
  featuresTab.after(fatesCompassTab);
  
  const fatesCompassContent = await renderTemplate(TEMPLATES.COMPASS_SHEET, templateData);
  html.find('.tab[data-tab="features"]').after(fatesCompassContent);

  const cssPath = "modules/fates-compass/css/compass-styles.css";
  if (!document.querySelector(`link[href="${cssPath}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);
  }

  const lastActivePanel = actor.getFlag("fates-compass", "lastActivePanel") || 'character';
  const lastActiveTalent = actor.getFlag("fates-compass", "lastActiveTalent");

  currentPanel = lastActivePanel;

  // Checking if nodeSkillData.skills is valid
  if (!nodeSkillData || typeof nodeSkillData.skills !== 'object') {
    console.log("nodeSkillData.skills is not an object or is undefined:",'color: white; background-color: blue; font-size: 16px;', nodeSkillData);
    return; // Prevent further execution if the object is not defined
  }

  // Logging nodeSkillData for debugging
  console.log('%cnodeSkillData:', 'color: white; background-color: blue; font-size: 16px;', nodeSkillData);

  if (lastActiveTalent && nodeData[currentPanel][lastActiveTalent]) {
    currentTalent = lastActiveTalent;
  } else {
    currentTalent = Object.keys(nodeData[currentPanel])[0];
  }

  await activatePanel(actor, currentPanel, currentTalent);

  document.querySelectorAll('.compass-header i[data-toggle]').forEach(icon => {
    icon.addEventListener('click', async (event) => {
      event.preventDefault();
      const panel = icon.getAttribute('data-toggle');
      if (panel === "save") {
        await saveActiveTalents(actor);
      } else {
        currentPanel = panel;
        currentTalent = Object.keys(nodeData[panel])[0];
        await activatePanel(actor, panel, currentTalent);
        document.querySelectorAll('.compass-header i[data-toggle]').forEach(i => i.classList.remove('active'));
        icon.classList.add('active');
      }
    });
  });
}

async function activatePanel(actor, panel, talent) {
  if (!talent || !nodeData[panel][talent]) {
    currentTalent = Object.keys(nodeData[panel])[0];
  } else {
    currentTalent = talent;
  }

  const templateData = {
    actor: actor,
    talents: nodeData[panel],
    currentTalent: currentTalent
  };
  const panelContent = await renderTemplate(`modules/fates-compass/templates/${panel}-panel.hbs`, templateData);
  const parser = new DOMParser();
  const doc = parser.parseFromString(panelContent, 'text/html');
  const listContent = doc.querySelector('.compass-list');
  const talentContent = doc.querySelector('.compass-talent-tree-panel');
  if (listContent) {
    document.getElementById('list-toggles-section').innerHTML = listContent.outerHTML;
  }
  if (talentContent) {
    document.getElementById('talent-toggles-section').innerHTML = talentContent.outerHTML;
    Object.entries(nodeData[panel]).forEach(([talentKey, talentData]) => {
      const treeElement = document.getElementById(`${talentKey}-tree`);
      if (treeElement) {
        createTalentTree(talentData, treeElement);
      }
    });
  }

  setupEventListeners(panel, actor);

  document.querySelectorAll('.compass-header i').forEach(icon => icon.classList.remove('active'));
  const currentIcon = document.querySelector(`.compass-header i[data-toggle="${panel}"]`);
  if (currentIcon) {
    currentIcon.classList.add('active');
  }

  const listToggle = document.querySelector(`.compass-list-toggle[data-talent="${currentTalent}"]`);
  if (listToggle) {
    listToggle.classList.add('active');
    listToggle.click();
  }

  loadActiveTalents(actor, panel);
  updateLines(panel, currentTalent);
}

function createTalentTree(talent, treeElement) {
  const nodes = talent.branches.flatMap(branch => branch.nodes);
  nodes.forEach(node => {
    if (node.header) {
      const headerElement = createHeaderElement(node);
      treeElement.appendChild(headerElement);
    } else {
      const nodeElement = createNodeElement(node);
      treeElement.appendChild(nodeElement);
      if (node.connections) {
        node.connections.forEach(connection => {
          const toNode = nodes.find(n => n.id === connection.to);
          if (toNode) {
            const line = createConnectionLine(node, toNode, connection);
            treeElement.appendChild(line);
          } else {
            console.error(`Node not found: ${connection.to}`);
          }
        });
      }
    }
  });
}

function createHeaderElement(headerData) {
  const headerElement = document.createElement('div');
  headerElement.className = 'compass-node-header';
  headerElement.textContent = headerData.header;
  headerElement.style.top = `${headerData.top}%`;
  headerElement.style.left = `${headerData.left}%`;
  return headerElement;
}

function createNodeElement(node) {
  const nodeElement = document.createElement('div');
  nodeElement.className = 'compass-node';
  nodeElement.style.top = `${node.top}%`;
  nodeElement.style.left = `${node.left}%`;
  nodeElement.setAttribute('data-tier', node.tier);
  nodeElement.setAttribute('data-id', node.id);
  const label = document.createElement('label');
  label.className = 'compass-node-label';
  label.textContent = node.name;
  const button = document.createElement('button');
  button.className = 'compass-toggle-button';
  button.setAttribute('data-toggle', node.id);
  button.id = node.id;
  nodeElement.appendChild(label);
  nodeElement.appendChild(button);
  return nodeElement;
}

function loadActiveTalents(actor, panel) {
  const activeTalentIds = actor.getFlag("fates-compass", `activeTalents.${panel}`) || [];
  const awardTalentIds = actor.getFlag("fates-compass", `awardTalents.${panel}`) || [];

  [...activeTalentIds, ...awardTalentIds].forEach(talentId => {
    const button = document.querySelector(`.compass-toggle-button[id="${talentId}"]`);
    if (button) {
      button.classList.add('active');
      button.setAttribute('data-active', 'true');
      if (awardTalentIds.includes(talentId)) {
        button.classList.add('awarded');
      }
      updateConnectedLines(button, true);
    }
  });

  updateLines(panel, currentTalent);
  updateTalentPoints(actor);
  checkActiveStyles();
}

async function saveActiveTalents(actor) {
  const activeTalents = document.querySelectorAll('.compass-toggle-button.active:not(.awarded)');
  const activeTalentIds = Array.from(activeTalents).map(button => button.getAttribute('id'));
  
  const awardedTalents = document.querySelectorAll('.compass-toggle-button.active.awarded');
  const awardedTalentIds = Array.from(awardedTalents).map(button => button.getAttribute('id'));

  const activeTab = ui.windows[actor.sheet.appId]._tabs[0].active;
  console.log(`Saving active talents for panel: ${currentPanel}`, activeTalentIds);
  console.log(`Saving awarded talents for panel: ${currentPanel}`, awardedTalentIds);

  const previousActiveTalentIds = actor.getFlag("fates-compass", `activeTalents.${currentPanel}`) || [];

  const newlyActivated = activeTalentIds.filter(id => !previousActiveTalentIds.includes(id));
  const newlyDeactivated = previousActiveTalentIds.filter(id => !activeTalentIds.includes(id));

  await actor.unsetFlag("fates-compass", `activeTalents.${currentPanel}`);
  await actor.setFlag("fates-compass", `activeTalents.${currentPanel}`, activeTalentIds);

  await actor.unsetFlag("fates-compass", `awardTalents.${currentPanel}`);
  await actor.setFlag("fates-compass", `awardTalents.${currentPanel}`, awardedTalentIds);

  await actor.setFlag("fates-compass", "lastActivePanel", currentPanel);
  await actor.setFlag("fates-compass", "lastActiveTalent", currentTalent);

  // Call FC_ON_ACTIVATE for newly activated talents
  for (const talentId of newlyActivated) {
    await callFCOnActivate(actor, currentPanel, talentId);
  }

  // Call FC_ON_DEACTIVATE for newly deactivated talents
  for (const talentId of newlyDeactivated) {
    await callFCOnDeactivate(actor, currentPanel, talentId);
  }

  updateTalentPoints(actor);

  actor.sheet.close();
  setTimeout(() => {
    actor.sheet.render(true);
    setTimeout(() => {
      ui.windows[actor.sheet.appId]._tabs[0].activate(activeTab);
    }, 100);
  }, 100);
}

function createConnectionLine(fromNode, toNode, connection) {
  const line = document.createElement('div');
  line.className = 'compass-line';
  line.setAttribute('data-from', fromNode.id);
  const buttonSize = 20;
  const buttonOffset = 5;
  const startX = fromNode.left;
  const startY = fromNode.top;
  const angle = connection.direction;
  const length = connection.length;
  line.style.top = `calc(${startY}% + ${buttonOffset}px)`;
  line.style.left = `calc(${startX}% + ${buttonSize / 2}px - 10px)`;
  line.style.width = `${length}%`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.transformOrigin = '0 50%';
  return line;
}

function setupEventListeners(panel, actor) {
  document.querySelectorAll('.compass-list-toggle').forEach(button => {
    button.addEventListener('click', async (event) => {
      event.preventDefault();
      document.querySelectorAll('.compass-list-toggle').forEach(toggle => toggle.classList.remove('active'));
      const talent = button.getAttribute('data-talent');
      const treeElement = document.getElementById(`${talent}-tree`);
      const currentActiveTree = document.querySelector('.compass-talent-tree.active');
      if (currentActiveTree) {
        currentActiveTree.classList.remove('active');
      }

      if (treeElement) {
        treeElement.classList.add('active');
        currentTalent = talent;
        button.classList.add('active');
        addHoverFunctionality(panel);
      } else {
        console.error(`Tree element for talent "${talent}" not found.`);
      }
    });
  });

  document.querySelectorAll('.compass-toggle-button').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const nodeId = button.id;
      const nodes = nodeData[panel]?.[currentTalent]?.branches?.flatMap(branch => branch.nodes) || [];
      const node = nodes.find(n => n.id === nodeId);

      if (!node) {
        console.error('Node not found:', nodeId);
        return;
      }

      const nodeDetails = getNodeDetailsById(panel, nodeId);
      if (nodeDetails?.prerequisites && nodeDetails.prerequisites.length > 0 && nodeDetails.prerequisites[0] !== "None") {
        const prerequisitesMet = nodeDetails.prerequisites.some(prerequisiteName => {
          const prerequisiteNode = nodes.find(n => n.name === prerequisiteName);
          const prerequisiteButton = document.querySelector(`.compass-toggle-button[id="${prerequisiteNode?.id}"]`);
          return prerequisiteButton?.classList.contains('active');
        });
        if (!prerequisitesMet) {
          ui.notifications.warn('You must activate at least one of the prerequisite nodes first.');
          return;
        }
      }

      if (button.classList.contains('active')) {
        const hasDependentNodes = nodes.some(detail => {
          const detailNodeDetails = getNodeDetailsById(panel, detail.id);
          const isPrerequisite = detailNodeDetails.prerequisites.includes(node.name);
          const dependentButton = document.querySelector(`.compass-toggle-button[id="${detail.id}"]`);
          const isActive = dependentButton?.classList.contains('active');
          return isPrerequisite && isActive;
        });

        if (hasDependentNodes) {
          ui.notifications.warn('You cannot deactivate this node because it is a prerequisite for an active node.');
          return;
        }
      }

      const isActive = !button.classList.contains('active');
      button.classList.toggle('active', isActive);
      button.setAttribute('data-active', isActive.toString());

      const awardTalentIds = actor.getFlag("fates-compass", `awardTalents.${panel}`) || [];
      if (awardTalentIds.includes(nodeId)) {
        button.classList.toggle('awarded', isActive);
      }

      updateConnectedLines(button, isActive);
      updateLines(panel, currentTalent);
      updateTalentPoints(actor);
      checkActiveStyles();
    });

    button.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      const nodeId = button.id;
      const info = getNodeDetailsById(panel, nodeId);
      
      if (info) {
        if (event.shiftKey) {
          sendInfoToChat(info);
        } else {
          showInfoDialog(info);
        }
      }
    });
  });

  addHoverFunctionality(panel);
}

function getNodeDetailsById(panel, nodeId) {
  const talent = nodeData[panel]?.[currentTalent];
  if (!talent) return null;

  const details = Object.values(talent.details);
  return details.find(detail => detail.id === nodeId);
}

function updateLines(panel, talent) {
  const treeElement = document.getElementById(`${talent}-tree`);
  if (!treeElement) {
    console.error(`Tree element not found for talent: ${talent}`);
    return;
  }
  const activeButtons = treeElement.querySelectorAll('.compass-toggle-button.active');
  const lines = treeElement.querySelectorAll('.compass-line');
  lines.forEach(line => line.classList.remove('active'));
  activeButtons.forEach(button => {
    const nodeId = button.id;
    const connectedLines = treeElement.querySelectorAll(`.compass-line[data-from="${nodeId}"]`);
    connectedLines.forEach(line => line.classList.add('active'));
  });
}

function updateConnectedLines(button, isActive) {
  const nodeId = button.id;
  const lines = document.querySelectorAll(`.compass-line[data-from="${nodeId}"]`);
  lines.forEach(line => {
    if (isActive) {
      line.classList.add('active');
    } else {
      line.classList.remove('active');
    }
  });
}

function updateTalentPoints(actor) {
  const totalPoints = calculateTotalPoints(actor);
  const maxPoints = 12; // Should match the value in injectFatesCompassTab

  const pointsElement = document.getElementById('compass-points');
  if (pointsElement) {
    pointsElement.textContent = `${totalPoints}/${maxPoints}`;
  }
}

function formatInfoContent(info, includeHelpText = false) {
  let content = `
    <h3><strong>${info.name}</strong></h3>
    <p><b>Point Cost:</b> ${info.pointCost}</p>
    <p><b>Prerequisites:</b> ${info.prerequisites.join(', ')}</p>
    <p><i>${info.description}</i></p>
    <p><b>Feature Added:</b> ${info.featureAdded}</p>
  `;

  if (includeHelpText) {
    content += `
      <hr style="height:2px;border-width:0;color:gray;background-color:gray">
      <p class="compass-help-text">
        <small>
          (Right-click for dialog)/(Shift+Right-click for chat)
        </small>
      </p>
    `;
  }

  return content;
}

function formatChatContent(info, isPurchased) {
  const purchaseStatus = isPurchased ? 'Purchased' : 'Un-Purchased';
  
  return `
    <h3><strong>${info.name}</strong></h3>
    <p class="compass-purchase-status" style="background-color: #933838; color: white; padding: 2px 5px; text-align: center; border-radius: 3px; font-size: 0.8em; display: inline-block;">
      <b>${purchaseStatus}</b>
    </p>
    <p><b>Point Cost:</b> ${info.pointCost}</p>
    <p><b>Prerequisites:</b> ${info.prerequisites.join(', ')}</p>
    <p><i>${info.description}</i></p>
    <p><b>Feature Added:</b> ${info.featureAdded}</p>
  `;
}

function addHoverFunctionality(panel) {
  document.querySelectorAll('.compass-toggle-button').forEach(button => {
    button.addEventListener('mouseover', (event) => {
      event.preventDefault();
      const nodeId = button.id;
      const info = getNodeDetailsById(panel, nodeId);
      if (info) {
        const infoPanel = document.createElement('div');
        infoPanel.classList.add('compass-info-panel');
        infoPanel.innerHTML = formatInfoContent(info, true);
        document.body.appendChild(infoPanel);

        const rect = button.getBoundingClientRect();
        infoPanel.style.position = 'absolute';
        infoPanel.style.top = `${rect.top + window.scrollY + rect.height}px`;
        infoPanel.style.left = `${rect.left + window.scrollX}px`;
        const infoPanelRect = infoPanel.getBoundingClientRect();
        if (infoPanelRect.bottom > window.innerHeight) {
          infoPanel.style.top = `${rect.top + window.scrollY - infoPanelRect.height}px`;
        }
        if (infoPanelRect.right > window.innerWidth) {
          infoPanel.style.left = `${rect.left + window.scrollX - (infoPanelRect.right - window.innerWidth)}px`;
        }
        button.addEventListener('mouseout', () => {
          infoPanel.remove();
        });
      }
    });
  });
}

function showInfoDialog(info) {
  new Dialog({
    title: info.name,
    content: formatInfoContent(info, false),
    buttons: {
      close: {
        icon: '<i class="fas fa-check"></i>',
        label: "Close"
      }
    }
  }).render(true);
}

function sendInfoToChat(info) {
  const button = document.querySelector(`.compass-toggle-button[id="${info.id}"]`);
  const isActive = button ? button.classList.contains('active') : false;
  
  ChatMessage.create({
    user: game.user._id,
    content: formatChatContent(info, isActive)
  });
}

function checkActiveStyles() {
  const activeButtons = document.querySelectorAll('.compass-toggle-button.active');
  activeButtons.forEach(button => {
    const computedStyle = window.getComputedStyle(button);
  });
}

async function callFCOnActivate(actor, panel, talentId) {
  const handler = COMPASS_HANDLERS[talentId];
  if (handler && typeof handler.FC_ON_ACTIVATE === 'function') {
      await handler.FC_ON_ACTIVATE({ actor });
  } else {
      console.warn(`No FC_ON_ACTIVATE handler found for talent: ${talentId}`);
  }
}

async function callFCOnDeactivate(actor, panel, talentId) {
  const handler = COMPASS_HANDLERS[talentId];
  if (handler && typeof handler.FC_ON_DEACTIVATE === 'function') {
      await handler.FC_ON_DEACTIVATE({ actor });
  } else {
      console.warn(`No FC_ON_DEACTIVATE handler found for talent: ${talentId}`);
  }
}

async function preloadFatesCompassTemplates() {
  const templatePaths = [
    "modules/fates-compass/templates/compass-sheet.hbs",
    "modules/fates-compass/templates/racial-panel.hbs",
    "modules/fates-compass/templates/skills-panel.hbs",
    "modules/fates-compass/templates/tools-panel.hbs",
    "modules/fates-compass/templates/character-panel.hbs",
    "modules/fates-compass/templates/specializations-panel.hbs",
    "modules/fates-compass/templates/weapon-training-panel.hbs",
    "modules/fates-compass/templates/magic-training-panel.hbs",
  ];

  return loadTemplates(templatePaths);
}

Hooks.once('init', async function () {
  console.log('%cInitializing Fate\'s Compass module', 'color:green; background-color:#A3A6B4; font-size:9pt; font-weight:bold; padding:1pt;');

  Object.keys(nodeData).forEach(panel => {
    Object.keys(nodeData[panel]).forEach(talent => {
      const nodes = nodeData[panel][talent].branches.flatMap(branch => branch.nodes);
      const nodeIds = nodes.map(node => node.id);

      nodes.forEach(node => {
        if (node.connections) {
          node.connections.forEach(connection => {
            if (!nodeIds.includes(connection.to)) {
              console.error(`Invalid connection in ${talent}: ${node.id} -> ${connection.to}`);
            }
          });
        }
      });
    });
  });

  await preloadFatesCompassTemplates();
});
