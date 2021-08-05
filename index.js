const techTree = document.querySelector(".techTree");

let generatedTechTree = "";
for(let key in techBD) {

  generatedTechTree += `
    <div class="techItem" id="techItem${key}" style="top: ${techBD[key].ycor}px; left: ${techBD[key].xcor}px;">
      <div class="techName">${techBD[key].name}</div>
      <div class="techBody">
        <div class="techIcon"></div>
  `;
  for (let res in techBD[key].need) {
  generatedTechTree += `
        <div class="techRes" id="techRes${res}">
          <div class="techResIcon"></div>
          <p class="techResCount">X${techBD[key].need[res].cont}</p>
        </div>
  `;
  }
  generatedTechTree += `
      </div>
    </div>
  `;
  // currectTechItem.style.top = '10px';
  techTree.innerHTML = generatedTechTree;
}

