// Hook into the rendering of the character sheet
Hooks.on("renderActorSheet", (app, html, data) => {
  if (app.actor.type !== "character") return;
  injectFatesCompassTab(app.actor, html);
});

function injectFatesCompassTab(actor, html) {
  // Inject the new tab button after the Features tab
  const nav = html.find('.tabs[data-group="primary"]');
  const featuresTab = nav.find('a[data-tab="features"]');
  const fatesCompassTab = `<a class="item" data-tab="fates-compass"><i class="fa-regular fa-compass"></i></a>`;
  featuresTab.after(fatesCompassTab);

  // Inject the new tab content
  const fatesCompassContent = `
    <div class="tab" data-tab="fates-compass">
      <div class="compass-fates-compass-container">
        <div class="compass-header">
          <h2>Fate's Compass</h2>
        </div>
        <div class="compass-content">
          <div class="compass-skill-list">
            <button class="compass-skill-toggle" data-skill="acrobatics">Acrobatics</button>
            <button class="compass-skill-toggle" data-skill="animal-handling">Animal Handling</button>
            <button class="compass-skill-toggle" data-skill="arcana">Arcana</button>
            <button class="compass-skill-toggle" data-skill="athletics">Athletics</button>
            <button class="compass-skill-toggle" data-skill="deception">Deception</button>
            <button class="compass-skill-toggle" data-skill="history">History</button>
            <button class="compass-skill-toggle" data-skill="insight">Insight</button>
            <button class="compass-skill-toggle" data-skill="intimidation">Intimidation</button>
            <button class="compass-skill-toggle" data-skill="medicine">Medicine</button>
            <button class="compass-skill-toggle" data-skill="nature">Nature</button>
            <button class="compass-skill-toggle" data-skill="perception">Perception</button>
            <button class="compass-skill-toggle" data-skill="performance">Performance</button>
            <button class="compass-skill-toggle" data-skill="persuasion">Persuasion</button>
            <button class="compass-skill-toggle" data-skill="religion">Religion</button>
            <button class="compass-skill-toggle" data-skill="sleight-of-hand">Sleight of Hand</button>
            <button class="compass-skill-toggle" data-skill="stealth">Stealth</button>
            <button class="compass-skill-toggle" data-skill="survival">Survival</button>
          </div>
          <div class="compass-talent-tree-panel">
            <!-- Talent tree for the selected skill -->
            <div class="compass-talent-tree active" id="acrobatics-tree">
              <div class="compass-branch centered-branch">
                <div class="compass-node">
                  <button class="compass-toggle-button" data-toggle="tier-2">Tier 2</button>
                </div>
              </div>
              <div class="compass-branch row spaced-row">
                <div class="compass-node centered-node">
                  <button class="compass-toggle-button" data-toggle="tier-3-1">Tier 3-1</button>
                </div>
                <div class="compass-node">
                  <button class="compass-toggle-button" data-toggle="tier-3-2">Tier 3-2</button>
                </div>
                <div class="compass-node centered-node">
                  <button class="compass-toggle-button" data-toggle="tier-3-3">Tier 3-3</button>
                </div>
              </div>
              <div class="compass-branch row spaced-row">
                <div class="compass-node centered-node">
                  <button class="compass-toggle-button" data-toggle="tier-4-1">Tier 4-1</button>
                </div>
                <div class="compass-node">
                  <button class="compass-toggle-button" data-toggle="tier-4-2">Tier 4-2</button>
                </div>
                <div class="compass-node centered-node">
                  <button class="compass-toggle-button" data-toggle="tier-4-3">Tier 4-3</button>
                </div>
              </div>
              <div class="compass-branch centered-branch spaced-row">
                <div class="compass-node">
                  <button class="compass-toggle-button" data-toggle="tier-5">Tier 5</button>
                </div>
              </div>
              <!-- More nodes and branches... -->
            </div>
          </div>
          <!-- More talent trees for other skills... -->
        </div>
      </div>
    </div>
  `;
  html.find('.tab[data-tab="features"]').after(fatesCompassContent);

  // Apply CSS styles
  const style = `
    .compass-fates-compass-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .compass-header {
      width: 100%;
      text-align: center;
      margin-bottom: 5px;
      background-color: #252830;
      border: 1px solid #9f9275;
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .compass-header h2 {
      margin: 0;
      padding: 10px;
      color: #9f9275;
    }
    .compass-content {
      display: flex;
      width: 100%;
      height: 100%;
    }
    .compass-skill-list {
      width: var(--skill-list-width, 25%);
      background: var(--skill-list-bg, none);
      padding: var(--skill-list-padding, 2px);
      overflow-y: auto;
      max-height: calc(100vh - 100px); /* Adjust height to ensure it scrolls */
    }
    .compass-skill-toggle {
      display: block;
      width: 100%;
      height: 25px;
      padding: var(--skill-toggle-padding, 5px);
      margin-bottom: var(--skill-toggle-margin-bottom, 5px);
      border: var(--skill-toggle-border, 1px solid #9f9275);
      color: var(--skill-toggle-color, #9f9275);
      text-align: var(--skill-toggle-text-align, center);
      cursor: pointer;
      font-size: var(--skill-toggle-font-size, 8px);
      background-color: #252830;
    }
    .compass-talent-tree-panel {
      width: var(--talent-tree-panel-width, 75%);
      padding: var(--talent-tree-panel-padding, 5px);
      background: url('image/UI/compasstalenttree.webp') no-repeat top center;
      background-size: contain;
      position: sticky;
      top: 0;
      z-index: 100;
      height: 100vh;
    }
    .compass-talent-tree {
      display: none; /* Hidden by default */
    }
    .compass-talent-tree.active {
      display: block; /* Show the active tree */
    }
    .compass-branch {
      margin-top: 10px;
      margin-left: var(--branch-margin-left, 0px);
    }
    .compass-branch.row {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
    }
    .compass-branch.centered-branch {
      display: flex;
      justify-content: center;
    }
    .compass-branch.centered-branch.spaced-row {
      margin-top: 40px; /* Apply same spacing for the last row */
    }
    .compass-node {
      background: var(--node-bg, none);
      border: var(--node-border, 1px solid #9f9275);
      padding: var(--node-padding, 0);
      margin-bottom: var(--node-margin-bottom, 0);
      text-align: center;
      position: relative;
    }
    .compass-toggle-button {
      width: 100px;
      height: 100px;
      background-color: #252830;
      border: 1px solid #9f9275;
      cursor: pointer;
      color: #9f9275;
      font-size: 10px;
      text-align: center;
      line-height: 100px; /* Center text vertically */
    }
    .compass-toggle-button.active {
      background-color: #4caf50;
    }
    .compass-tier-label {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      margin-top: 5px;
      font-size: 12px;
      color: #9f9275;
    }
    .centered-node {
      margin-left: auto;
      margin-right: auto;
    }
    .spaced-row {
      margin-top: 40px; /* Increase space between rows */
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);

  // Add JavaScript for toggle functionality
  document.querySelectorAll('.compass-skill-toggle').forEach(button => {
    button.addEventListener('click', () => {
      // Hide all talent trees
      document.querySelectorAll('.compass-talent-tree').forEach(tree => tree.classList.remove('active'));

      // Show the selected talent tree
      const skill = button.getAttribute('data-skill');
      const treeElement = document.getElementById(`${skill}-tree`);
      if (treeElement) {
        treeElement.classList.add('active');
      } else {
        console.error(`Tree element for skill "${skill}" not found.`);
      }
    });
  });

  document.querySelectorAll('.compass-toggle-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
    });
  });

  console.log("Fate's Compass tab added");
}
