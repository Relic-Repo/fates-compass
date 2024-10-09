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
          <div class="accordion">
            <div class="accordion-item">
              <div class="accordion-header" data-toggle="skills">
                <button class="accordion-button">Skills</button>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
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
                  <div class="compass-talent-tree-panel">
                    <!-- Talent trees will be dynamically injected here -->
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header" data-toggle="racial">
                <button class="accordion-button">Racial</button>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <!-- Racial talent buttons and trees -->
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header" data-toggle="specializations">
                <button class="accordion-button">Specializations</button>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <!-- Specializations talent buttons and trees -->
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <div class="accordion-header" data-toggle="weapon-training">
                <button class="accordion-button">Weapon Training</button>
              </div>
              <div class="accordion-content">
                <div class="accordion-inner">
                  <!-- Weapon training talent buttons and trees -->
                </div>
              </div>
            </div>
          </div>
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
    .accordion {
      width: 100%;
    }
    .accordion-item {
      border: 1px solid #9f9275;
      margin-bottom: 5px;
    }
    .accordion-header {
      background-color: #252830;
      cursor: pointer;
      padding: 10px;
      font-size: 14px;
      color: #9f9275;
    }
    .accordion-button {
      background: none;
      border: none;
      color: #9f9275;
      cursor: pointer;
      font-size: 14px;
      text-align: left;
      width: 100%;
    }
    .accordion-content {
      display: none;
      padding: 10px;
      background-color: #1d1f24;
    }
    .accordion-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .compass-skill-toggle {
      display: block;
      width: 100%;
      height: 25px;
      padding: 5px;
      margin-bottom: 5px;
      border: 1px solid #9f9275;
      color: #9f9275;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      background-color: #252830;
    }
    .compass-talent-tree-panel {
      width: 100%;
      padding: 5px;
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
      margin-left: 0px;
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
      margin-top: 40px;
    }
    .compass-node {
      background: none;
      border: 1px solid #9f9275;
      padding: 0;
      margin-bottom: 0;
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
      line-height: 100px;
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
      margin-top: 40px;
    }
  `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  document.head.appendChild(styleSheet);

  // Add JavaScript for accordion functionality
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', (event) => {
      event.preventDefault();
      const content = header.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  });

  // Add JavaScript for skill toggle functionality
  document.querySelectorAll('.compass-skill-toggle').forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
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
    button.addEventListener('click', (event) => {
      event.preventDefault();
      button.classList.toggle('active');
    });
  });

  console.log("Fate's Compass tab added with accordions");
}
