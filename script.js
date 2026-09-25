console.log("hello");
//your code here

const img = document.getElementById("img");
const btn_verify = document.getElementById("verify");
const btn = document.getElementById("reset");
const para = document.getElementById("para");

const img_array = [
    "https://cdn.pixabay.com/photo/2021/10/04/20/17/father-6680949_1280.png",
    "https://cdn.pixabay.com/photo/2020/07/01/01/23/father-5358083_1280.jpg",
    "https://cdn.pixabay.com/photo/2021/09/15/04/21/fatherhood-6625659_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/03/15/14/24/father-7070433_1280.png",
    "https://cdn.pixabay.com/photo/2021/09/28/23/15/family-6665833_960_720.png"
];

// Random image select
const randomImg = Math.floor(Math.random() * img_array.length);

// Selected image ko duplicate karo
const duplicate = img_array[randomImg];

// 5 unique + 1 duplicate
const acctual6sizearray = [...img_array, duplicate];

// 6 images ko shuffle karo
acctual6sizearray.sort(() => Math.random() - 0.5);

// Shuffled array se images display karo
acctual6sizearray.forEach((item, i) => {
    img.innerHTML += `
        <img src="${item}" alt="0" />
    `;
});


const slected_array = [];

const Allimg = document.querySelectorAll("img");

Allimg.forEach((imges) => {

    imges.addEventListener("click", () => {

        if (slected_array.includes(imges.src)) {
            return;
        }

        console.log("img clicked");

        imges.classList.add("selected");

        slected_array.push(imges.src);

        if (slected_array.length >= 1) {
            btn.style.display = "block";
        }

        if (slected_array.length === 2) {
            btn_verify.style.display = "block";
        }
    });
});


btn_verify.addEventListener("click", () => {

    if (slected_array[0] === slected_array[1]) {
        para.innerHTML = `You are a human. Congratulations!`;
    } else {
        para.innerHTML = `We can't verify you as a human. You selected the non-identical tiles.`;
    }

    btn_verify.style.display = "none";
});


btn.addEventListener("click", () => {

    slected_array.length = 0;

    Allimg.forEach((image) => {
        image.classList.remove("selected");
    });

    btn.style.display = "none";
    btn_verify.style.display = "none";

    para.textContent = "";
});