const imageArr = [
    "https://r.res.easebar.com/pic/20241120/84fd64a1-e5bb-4b53-8583-23d8fcb88795.png",
    "https://r.res.easebar.com/pic/20241120/60bcad63-70f0-4ec4-b795-329b7a297ed4.png",
    "https://r.res.easebar.com/pic/20241205/a439178b-176d-468f-822f-97203095d785.png",
    "https://r.res.easebar.com/pic/20241128/aa4ee42e-fc64-4082-91c7-a640da9db5c2.png",
    
];

const bgcImageArr = [
    "https://r.res.easebar.com/pic/20241120/98f7d8d7-33d5-4b9d-a7df-bb3b7f1e165f.png",
    "https://r.res.easebar.com/pic/20241120/1a070da1-894a-47ea-84f8-9bc3e0ec87d2.png",
    "https://r.res.easebar.com/pic/20241204/cfe81b6c-f8fa-4677-80ef-2150b963ae8c.png",
    "https://r.res.easebar.com/pic/20241120/9902c5e5-316a-4ca4-aa7c-8fdc4e04130d.png",
   
];

let index = 0;

let image = document.getElementById('foreImage');
image.setAttribute("src", imageArr[index]);

function updateSlider() {
    document.getElementById("slider").style.backgroundImage = `url('${bgcImageArr[index]}')`;
    image.src = imageArr[index];
}

const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
    index = (index+ imageArr.length -1) % imageArr.length;
    updateSlider();
});

const next = document.getElementById("next");
next.addEventListener("click", () => {
    index = (index + 1) % imageArr.length;
    updateSlider();
});

updateSlider();