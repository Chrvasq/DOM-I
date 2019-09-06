const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Section

const navElements = document.querySelectorAll("a");
const navElementList = Object.keys(siteContent.nav);
const navItems = navElementList.filter(element => element.includes("nav"));

navElements.forEach(
  (element, index) => (element.textContent = siteContent.nav[navItems[index]])
);

// CTA Section

// h1
const ctaH1 = document.querySelector(".cta-text h1");
const ctaH1Text = siteContent.cta.h1.split(" ");
ctaH1.insertAdjacentHTML(
  "afterbegin",
  `${ctaH1Text[0]}<br> ${ctaH1Text[1]}<br> ${ctaH1Text[2]}`
);

// button
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent.cta.button;

// CTA image
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

// Main-content section

const mainContentList = Object.keys(siteContent["main-content"]);

const h4ContentList = mainContentList.filter(content => content.includes("h4"));

const contentList = mainContentList.filter(content =>
  content.includes("content")
);

// Get all h4 elements in .main-content class
const mainContentH4 = document.querySelectorAll(".main-content h4");
// Get all p elements in .main-content class
const mainContentPara = document.querySelectorAll(".main-content p");

mainContentH4.forEach(
  (element, index) =>
    (element.textContent = siteContent["main-content"][h4ContentList[index]])
);

mainContentPara.forEach(
  (element, index) =>
    (element.textContent = siteContent["main-content"][contentList[index]])
);

// middle img
const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Contact section

const contactH4 = document.querySelector(".contact h4");
// Get all p elements in .contact class
const contactPara = document.querySelectorAll(".contact p");
const contactContent = Object.keys(siteContent.contact);

contactH4.textContent = siteContent.contact[contactContent[0]];

contactPara.forEach(
  (element, index = 1) =>
    (element.textContent = siteContent.contact[contactContent[index]])
);

// Footer section
const footer = document.querySelector("footer p");

footer.textContent = siteContent.footer.copyright;

// change color of nav text
navElements.forEach(element => (element.style.color = "green"));

// add elements to nav
const nav = document.querySelector("nav");
const newNavElement1 = document.createElement("a");
newNavElement1.setAttribute("href", "#");
newNavElement1.setAttribute("style", "color: green");

const newNavElement2 = document.createElement("a");
newNavElement2.setAttribute("href", "#");
newNavElement2.setAttribute("style", "color: green");

const newNavText1 = document.createTextNode("New1");
const newNavText2 = document.createTextNode("New2");

newNavElement1.appendChild(newNavText1);
nav.appendChild(newNavElement1);

newNavElement2.appendChild(newNavText2);
nav.prepend(newNavElement2);

// Hide ctaimage on ctabutton click
ctaButton.onclick = function() {
  const img = ctaImg;
  if (img.style.display === "none") {
    img.style.display = "";
  } else {
    img.style.display = "none";
  }
};
