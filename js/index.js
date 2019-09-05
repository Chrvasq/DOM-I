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

// Nav elements
const navElements = document.querySelectorAll("a");
for (let i = 0; i < navElements.length; i++) {
  navElements[i].innerText = siteContent["nav"][`nav-item-${i + 1}`];
}

// CTA section

// h1
const ctaH1 = document.querySelector(".cta-text h1");
const ctaH1Text = siteContent.cta.h1.split(" ");
ctaH1.innerHTML = `${ctaH1Text[0]}<br> ${ctaH1Text[1]}<br> ${ctaH1Text[2]}`;

// button
const ctaButton = document.querySelector("button");
ctaButton.innerText = siteContent.cta.button;

// CTA image
const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

// Main-content section

// top-content
const topContent = document.querySelectorAll(".top-content .text-content");
console.log(topContent);

// features
topContent[0].children[0].innerText =
  siteContent["main-content"]["features-h4"];

topContent[0].children[1].innerText =
  siteContent["main-content"]["features-content"];

// about
topContent[1].children[0].innerText = siteContent["main-content"]["about-h4"];

topContent[1].children[1].innerText =
  siteContent["main-content"]["about-content"];

// middle img
document
  .getElementById("middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// bottom-content
const bottomContent = document.querySelectorAll(
  ".bottom-content .text-content"
);

// services
bottomContent[0].children[0].innerText =
  siteContent["main-content"]["services-h4"];

bottomContent[0].children[1].innerText =
  siteContent["main-content"]["services-content"];

// product
bottomContent[1].children[0].innerText =
  siteContent["main-content"]["product-h4"];

bottomContent[1].children[1].innerText =
  siteContent["main-content"]["product-content"];

// vision
bottomContent[2].children[0].innerText =
  siteContent["main-content"]["vision-h4"];

bottomContent[2].children[1].innerText =
  siteContent["main-content"]["vision-content"];

// Contact section
