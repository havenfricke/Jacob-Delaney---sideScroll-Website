var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

document
  .querySelector(".main-nav-toggle")
  .addEventListener("click", validation);

function validation(element) {
  element.preventDefault();
  let menu = document.querySelector(".menu");
  if (this.classList.contains("active-menu")) {
    this.classList.remove("active-menu");
    console.log(menu);
    menu.classList.remove("slide-menu");
  } else {
    this.classList.add("active-menu");
    menu.classList.add("slide-menu");
  }
}

if (!!window.IntersectionObserver) {
  let el = document.querySelector(".two");
  let imgs = document.querySelectorAll(".two--img");
  let copy = document.querySelector(".two--copy");
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          imgs.forEach((val) => {
            val.classList.add("slide-image");
            if(val.classList.contains("pos2")){
              val.classList.add("slide-image__ipad");      
            }
          });
          copy.classList.add("rot-copy");
        } else if (!entry.isIntersecting) {
          imgs.forEach((val) => {
            val.classList.remove("slide-image");
            if(val.classList.contains("pos2")){
              val.classList.remove("slide-image__ipad");      
            }
          });
          copy.classList.remove("rot-copy");
        }
      });
    },
    { threshold: 0.75 }
  );
  observer.observe(el);
}

/*Duplicate Text*/
let exp = document.querySelector(".explore-title");
if (viewportWidth > 766) {
  for (var i = 0; i < 15; i++) {
    let text = document.createTextNode("Explore");
    let line = document.createElement("br");
    exp.appendChild(text);
    exp.appendChild(line);
  }
} else {
  let text = document.createTextNode("Explore");
  exp.appendChild(text);
}
/*Duplicate Text*/

if (!!window.IntersectionObserver) {
  let el = document.querySelector(".three");
  let letter = document.querySelectorAll(".title-letter");
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add("bg-color");
          letter.forEach((item) => {
            item.classList.add("wiggle");
          });
          document.querySelector(".explore-sub").style.opacity = 1;
        } else if (!entry.isIntersecting) {
          letter.forEach((item) => {
            item.classList.remove("wiggle");
          });
        }
      });
    },
    { threshold: 0.75 }
  );
  observer.observe(el);
}

// for history

// add title
let history = document.querySelector(".four");
document.querySelector(".history-grid").addEventListener("click", showBio);

function showBio(el) {
  let select = el.target;
  console.log(select);
  let bio = document.querySelector(".history-copy");
  let bioArray = [
    "Founded in 2013 as a humble Tumblr blog, Unsplash has grown into an industry-leading visual community. It’s become a source of inspiration for everyone from award-winning writers like Deepak Chopra to industry-titans like Apple, and millions of creators worldwide.",
    "The Unsplash library enters new territory, thanks to the New York Public Library’s new account showcasing powerful photography from important moments in history.",
    "The Unsplash ecosystem is pushing the impact of photography further than ever before. Our aim is to make photography a universally accessible art form. The purpose of raising this investment is to build a new type of economic future for photography when it is set free.",
    "A simple, free app to turn your Mac desktop background into a rotating gallery of stunning HD photography from the Unsplash community."
  ];
  let num = select.classList.value.slice(-1);
  console.log(num);
  if (num !== "d") {
    bio.innerText = "";
    bio.innerText = bioArray[num];
  }
}

let rotX = document.querySelectorAll(".x");
let cont = document.querySelectorAll(".accordian--content");

for (let z = 0; z < rotX.length; z++) {
  rotX[z].addEventListener("click", rotCross);

  function rotCross(item) {
    if (this.classList.contains("rotate-cross")) {
      rotX[z].classList.remove("rotate-cross");
      cont[z].classList.remove("slide-down");
    } else if (!this.classList.contains("rotate-cross")) {
      for (let x = 0; x < rotX.length; x++) {
        if (rotX[x].classList.contains("rotate-cross")) {
          rotX[x].classList.remove("rotate-cross");
          cont[x].classList.remove("slide-down");
        }
      }
      this.classList.add("rotate-cross");
      cont[z].classList.add("slide-down");
    }
  }
}

//click scroll to section on page
// make the click section more obvious

document.querySelector("nav ul li a").scrollIntoView({
  behavior: "smooth"
});



// change copy for ipad first page scroll left/right