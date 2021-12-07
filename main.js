
//SECTION THREE
let section3img = document.getElementById("section3image");
let listImg = ["/img/1.png", "/img/2.png", "/img/3.png"]

document.getElementById("section3TitleOne").onclick = ()=>{
    section3img.src = `${listImg[0]}`;
}

document.getElementById("section3TitleTwo").onclick = ()=>{
    section3img.src = `${listImg[1]}`;
}

document.getElementById("section3TitleThree").onclick = ()=>{
    section3img.src = `${listImg[2]}`;
}


//SECTION 5

let imgscroll = document.getElementById("imgScroll");

document.getElementById("rightButton").onclick = ()=>{
    imgscroll.classList.toggle("scroll");
}

document.getElementById("leftButton").onclick = ()=>{
    imgscroll.classList.toggle("scrollLeft");
}
