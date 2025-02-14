onload = () =>{
    document.body.classList.remove("container");
};

let questionMark = 0;

function handleNo() {
    questionMark++;
    let QuestionMark = "?".repeat(questionMark);
    document.getElementById("question").textContent = `WHY${QuestionMark}`;
}

function handleYes() {
    document.getElementById("popup").style.display = "none"; 
    document.getElementById("popup2").style.display = "block"; 
}

function showValentinePopup() {
    document.getElementById("popup2").style.display = "none"; 
    document.getElementById("popup3").style.display = "block"; 
}

function showFlowers() {
    document.getElementById("popup3").style.display = "none"; 
    document.getElementById("flowers-container").style.display = "block";
}

function createRaindrop() {
    const body = document.querySelector("body");
    const xPosition = Math.random() * window.innerWidth;
    const delay = Math.random() * 5;
    const duration = Math.random() * 2 + 2;
  
    const rainDrop = document.createElement("div");
    rainDrop.className = "rain";
    rainDrop.style.left = `${xPosition}px`;
    rainDrop.style.animationDelay = `${delay}s`;
    rainDrop.style.animationDuration = `${duration}s`;
    rainDrop.style.display = "none";
    body.appendChild(rainDrop);
  
    setTimeout(() => {
        rainDrop.style.display = "inherit";
    }, 800);
  }
  
  setInterval(createRaindrop, 100);