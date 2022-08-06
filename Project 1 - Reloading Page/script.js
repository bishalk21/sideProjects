const header = document.getElementById("header");
const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

function getData() {
    header.innerHTML = `<img src ="/100:100Projects/assets/img.jpg"
    alt = "" >`

    title.innerHTML = "Loading...";
    excerpt.innerHTML = `<p>Please wait while loading </p>`
    profile_img.innerHTML = `<img src ="/100:100Projects/assets/me.jpeg"
    alt = "" >`
    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));

    name.innerHTML = `Bishal Karki`
    date.innerHTML = `<p>
    August 2022</p>`
}

setTimeout(getData, 2000);