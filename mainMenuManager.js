const mainLocationButton = document.querySelector(".mainLocationButton");
const techLocationButton = document.querySelector(".techLocationButton");
const techLocation = document.querySelector(".techLocation");
const mainLocation = document.querySelector(".mainLocation");
const wrapper = document.querySelector(".wrapper");

let startLocation = "main"; //main, tech


if (startLocation == "main") {
  techLocationButton.classList.remove('techSelected');
  techLocation.classList.add('menuHidden');  
  wrapper.style.backgroundColor = "#48bf46";
  mainLocation.classList.remove('menuHidden');
  mainLocationButton.classList.add('mainSelected');  
} else if (startLocation == "tech") {
  mainLocationButton.classList.remove('mainSelected');
  mainLocation.classList.add('menuHidden');  
  wrapper.style.backgroundColor = "#4676BF";
  techLocationButton.classList.add('techSelected');  
  techLocation.classList.remove('menuHidden');
}



mainLocationButton.addEventListener("click", (e) => {
  techLocationButton.classList.remove('techSelected');
  techLocation.classList.add('menuHidden');  
  setTimeout(() => {
  wrapper.style.backgroundColor = "#48bf46";
  mainLocation.classList.remove('menuHidden');
  mainLocationButton.classList.add('mainSelected');  
  }, 300);
});

techLocationButton.addEventListener("click", (e) => {
  mainLocationButton.classList.remove('mainSelected');
  mainLocation.classList.add('menuHidden');  
  setTimeout(() => {
  wrapper.style.backgroundColor = "#4676BF";
  techLocationButton.classList.add('techSelected');  
  techLocation.classList.remove('menuHidden');
  }, 300);
});