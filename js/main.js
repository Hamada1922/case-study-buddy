let menu = document.getElementById("menu");
let toggler = document.getElementById("toggler");
toggler.onclick = () => {
  menu.classList.toggle("active");
};

// brands
let brands = Array.from(document.querySelectorAll(".brands .box img"));
let current = 1;

let slide = setInterval(() => {
  if (current + 5 > brands.length) {
    current = 0;
  }
  brands.forEach((brand) => {
    brand.classList.remove("active");
  });
  brands[current].classList.add("active");
  brands[current + 1].classList.add("active");
  brands[current + 2].classList.add("active");
  brands[current + 3].classList.add("active");
  current++;
}, 2000);
clearInterval(slide);

// LANGUAGES
let languages = document.getElementById("languages");
let nav_menu = menu.children[0];

// console.log();
languages.onchange = () => {
  if (languages.value == "english") {
    document.body.style.direction = "ltr";
    // HEADER
    nav_menu.children[0].children[0].textContent = "written studies";
    nav_menu.children[1].children[0].textContent = "video testimonials";
    nav_menu.children[2].children[0].textContent = "Our Work";
    nav_menu.children[3].children[0].textContent = "About Us";
    nav_menu.children[4].children[0].textContent = "Pricing";
    nav_menu.children[5].children[0].textContent = "Blog";
    document.querySelector("header .main_btn").textContent = "Contact Us";
    //ABOVE
    document.querySelector(".above h1").textContent =
      "Your end-to-end partner in customer success stories.";
    document.querySelector(".above .above_p1").textContent =
      "We help midsize to enterprise B2B companies create and scale case studies and video testimonials.";
    document.querySelector(".above .above_p2").textContent =
      "So you can close more deals, more quickly, across more channels.";
    document.querySelector(".above .green").textContent = "See Our Work";
    document.querySelector(".above .trans").textContent = "Get in Touch";
    // BRANDS
    document.querySelector(".brands .heading").textContent =
      "Trusted by world-class B2B brands and their teams";
    // STEPS
    document.querySelector(".s_teps .heading").textContent =
      "Turn one success story into a full campaign of assets, with one proven partner to get it all done.";
    document.querySelector(".s_teps .para").textContent =
      "Wring every drop of ROI from your case studies with packages of sales and marketing assets built to perform on the channels you use.";
    let steps = document.querySelector(".steps");
    steps.children[0].querySelector("h4").textContent = "Written Case Studies";
    steps.children[0].querySelector("p").textContent =
      "Long, short, and ultra-short assets for your website, blog, or sales team.";
    steps.children[1].querySelector("h4").textContent =
      "Remote Video Testimonials";
    steps.children[1].querySelector("p").textContent =
      "Get a polished production without setting foot in your customers’ office.";
    steps.children[2].querySelector("h4").textContent = "On-Location Video";
    steps.children[2].querySelector("p").textContent =
      "Cinematic, high-powered video that puts your customer in the best possible light.";
    steps.children[3].querySelector("h4").textContent =
      "Promo and Sales Collateral";
    steps.children[3].querySelector("p").textContent =
      "From one-sheets and slide decks to image quotes, audio grams, animated video, and more.";
    //HASSEL
    document.querySelector(".hassel .heading").textContent =
      "You get powerful, on-brand assets. We handle the hassle on your behalf.";
    let cards = document.querySelectorAll(".hassel .card");
    cards[0].querySelector(".text").children[0].textContent =
      "Get buy-in and jump on case study opportunities as they arise";
    cards[0].querySelector(".text").children[1].textContent =
      "We’ll coach you through ideas you can use to improve your odds of clients participating.";
    cards[0].querySelector(".text").children[2].textContent =
      "And with our dedicated team of writers, videographers, project managers, and more in your corner, lack of bandwidth will never prevent you from publishing again.";
    //
    cards[1].querySelector(".text").children[0].textContent =
      "Protect your reputation and respect your client’s time";
    cards[1].querySelector(".text").children[1].textContent =
      "Every part of our process is engineered to reduce friction without compromising quality.";
    cards[1].querySelector(".text").children[2].textContent =
      "From the way we conduct interviews to get the most detail in the least time, to the considerate way we follow up without annoying your customers:";
    //
    cards[2].querySelector(".text").children[0].textContent =
      "Nail the story the first time and put it to work in more ways";
    cards[2].querySelector(".text").children[1].textContent =
      "With thorough briefs and collaborative conversations, we ensure every story supports a specific business goal.";
    cards[2].querySelector(".text").children[2].textContent =
      "Then, we create assets that support your specific sales and marketing channels—giving you more utility and ROI from every case study we create together.";
    //PROVE
    document.querySelector(".prove .heading").textContent =
      "Put the team behind 1,000+ case studies to work for you";

    let prove_cards = document.querySelectorAll(".prove .card");
    prove_cards[0].querySelector("span").textContent = "True Specialists";
    prove_cards[0].querySelector("p").textContent =
      "Case studies are all we do, with a process refined over 5+ years of complete focus.";
    prove_cards[1].querySelector("span").textContent = "Proven Experience";
    prove_cards[1].querySelector("p").textContent =
      "We’ve served 300+ clients over 5+ years, giving us a front row seat to see what works.";
    prove_cards[2].querySelector("span").textContent = "Multiple Media";
    prove_cards[2].querySelector("p").textContent =
      "No matter what assets you’re after, we produce premium work in-house.";
    //CUSTOMERS
    document.querySelector(".customers .heading").textContent =
      "Our customers say it best!";
    let customers = document.querySelectorAll(".customers .customer");
    customers[0].querySelector("q").textContent =
      "When you do it yourself, the start-to-end case study process is cumbersome, takes time, and needs a lot of attention. But when you partner with Case Study Buddy, you can focus your attention on your customer.";
    customers[1].querySelector("q").textContent =
      "Having case studies from Case Study Buddy that represent our work through the lens of our clients means we can articulate what we do better and faster. Case Study Buddy lifted the burden of creating case studies on our own. My start-to-finish experience was nothing but positive.";
    customers[2].querySelector("q").textContent =
      "Working with Case Study Buddy enabled us to produce 14 written case studies as well as multiple audiograms and a video in the past year. I do not believe that we would have been able to capture these stories as effectively without Case Study Buddy.";
    //GUARANTEE
    document.querySelector(".guarantee h4").textContent = "We guarantee this:";
    document.querySelector(".guarantee p").textContent =
      "A case study so professional and aligned with your brand, you’ll swear someone wrote it in-house.";
    document.querySelector(".guarantee .main_btn").textContent = "Get a Quote";
    // document.querySelector(".above .trans").textContent = "";
    //
  } else {
    location.reload();
  }
};

// LAZY LOADiNG
let image_observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      img.src = img.dataset.src;
      img.classList.add("lazy");
      self.unobserve(img);
    }
  });
});

let images = document.images;
for (image of images) {
  image_observer.observe(image);
}
