const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//  NAV ---------------

const navigation = document.getElementsByTagName('a')
navigation[0].textContent = siteContent['nav']['nav-item-1']
navigation[0].style.color = 'green';
navigation[1].textContent = siteContent['nav']['nav-item-2']
navigation[1].style.color = 'green';
navigation[2].textContent = siteContent['nav']['nav-item-3']
navigation[2].style.color = 'green';
navigation[3].textContent = siteContent['nav']['nav-item-4']
navigation[3].style.color = 'green';
navigation[4].textContent = siteContent['nav']['nav-item-5']
navigation[4].style.color = 'green';
navigation[5].textContent = siteContent['nav']['nav-item-6']
navigation[5].style.color = 'green';

// NEW ITEMS ---------

const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'Home';
newNavItem1.style.color = 'green';

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'Blog';
newNavItem2.style.color = 'green';

const newNavItems = document.querySelector('nav');
newNavItems.prepend(newNavItem1);
newNavItems.appendChild(newNavItem2);

// CONTAINER (CTA) -------------

const heading = document.querySelector('h1');
heading.textContent = siteContent['cta']['h1']

const btn = document.querySelector('button');
btn.textContent = siteContent['cta']['button']

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const headings = document.getElementsByTagName("h4");
headings[0].textContent = siteContent["main-content"]["features-h4"]
headings[1].textContent = siteContent["main-content"]["about-h4"]
headings[2].textContent = siteContent["main-content"]["services-h4"]
headings[3].textContent = siteContent["main-content"]["product-h4"]
headings[4].textContent = siteContent["main-content"]["vision-h4"]
headings[5].textContent = siteContent["contact"]["contact-h4"]

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const paragraphContent = document.getElementsByTagName("p");
paragraphContent[0].textContent = siteContent["main-content"]["features-content"]
paragraphContent[1].textContent = siteContent["main-content"]["about-content"]
paragraphContent[2].textContent = siteContent["main-content"]["services-content"]
paragraphContent[3].textContent = siteContent["main-content"]["product-content"]
paragraphContent[4].textContent = siteContent["main-content"]["vision-content"]
paragraphContent[5].textContent = siteContent["contact"]["address"]
paragraphContent[6].textContent = siteContent["contact"]["phone"]
paragraphContent[7].textContent = siteContent["contact"]["email"]
paragraphContent[8].textContent = siteContent["footer"]["copyright"]


const contactHeader = document.querySelector('contact-h4');
contactHeader.textContent = siteContent['contact']['contact-h4']

const contactPara = document.querySelectorAll('contact p');
contactPara[0].textContent = siteContent['contact']['address']
contactPara[1].textContent = siteContent['contact']['phone']
contactPara[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('foot p');
footer.textContent = siteContent['footer']['copyright']
