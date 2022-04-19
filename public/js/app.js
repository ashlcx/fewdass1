console.log("App Started");
var theme = "light";
loadBackground();
detectColorScheme();

const toggleColourTheme = () => {
  theme = !theme;

  if (theme) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

const loadParallax_homePage = () => {
  $("#hero-image").parallax({
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e142229c73726304407e983/1647989567154-SX40FIANGY7BUHDEQZUS/HQ+landscape+ducks+dawn.jpg?format=2500w",
    naturalWidth: "1667", //TODO Update values
    naturalHeight: "2500",
  });
  $("#parallax-1").parallax({
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e142229c73726304407e983/d21667a8-2c1d-4bee-8877-6565f2fee3e6/GJ+full+work+view+to+majura+c.jpg?format=750w",
    naturalWidth: "1667",
    naturalHeight: "2500",
  });
  $("#parallax-2").parallax({
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e142229c73726304407e983/824b2dc2-2fd8-4d89-a900-ed1e5b0f6122/Contour+556_2020-12.jpg?format=750w",
    naturalWidth: "1667",
    naturalHeight: "2500",
  });
  $("#parallax-3").parallax({
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e142229c73726304407e983/8a0d9566-03d3-4117-a11b-d7f1a8efa0d3/KD+starboard.jpg?format=750w",
    naturalWidth: "1667",
    naturalHeight: "2500",
  });
  $("#parallax-4").parallax({
    imageSrc:
      "https://images.squarespace-cdn.com/content/v1/5e142229c73726304407e983/6f2c68e2-49fe-43ae-8ff3-4d0b7d90b1f8/Contour+556_2020-16+-c.jpg?format=750w",
    naturalWidth: "1667",
    naturalHeight: "2500",
  });
};

//determines if the user has a set theme
function detectColorScheme() {
  //local storage is used to override OS theme settings
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") == "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    //matchMedia method not supported
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    theme = "dark";
  }

  //dark theme preferred, set document with a `data-theme` attribute
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

const toggleMobileMenu = () => {
  let toggled = $("#nav-links");
  toggled.toggle("slow");
};

window.addEventListener("load", () => {
  mybutton = document.getElementById("toTopButton");

  window.onscroll = function () {
    scrollFunction();
  };
  $("#hamburger").click(() => {
    $("#nav-links").toggle("fast");
  });

  const app = $("#app");
  const errorTemplate = Handlebars.compile($("#error-template").html());
  const homeTemplate = Handlebars.compile($("#home-template").html());
  const donateTemplate = Handlebars.compile($("#donate-template").html());
  const covidTemplate = Handlebars.compile($("#covid-template").html());
  const festival22Template = Handlebars.compile(
    $("#festival-22-template").html()
  );
  const aboutTemplate = Handlebars.compile($("#aboutus-template").html());

  const router = new Router({
    mode: "history",
    page404: (path) => {
      const html = errorTemplate();
      app.html(html);
    },
  });

  router.add("/", () => {
    let html = homeTemplate();
    app.html(html);
    loadParallax_homePage();
  });

  router.add("/donate", () => {
    let html = donateTemplate();
    app.html(html);
    jQuery(window).trigger("resize").trigger("scroll");
  });

  router.add("/covid-19", () => {
    let html = covidTemplate();
    app.html(html);
    jQuery(window).trigger("resize").trigger("scroll");
  });

  router.add("/festivals-2022", () => {
    let html = festival22Template();
    app.html(html);
    jQuery(window).trigger("resize").trigger("scroll");
  });

  router.add("/about-us", () => {
    let html = aboutTemplate();
    app.html(html);
    jQuery(window).trigger("resize").trigger("scroll");
  });

  router.navigateTo(window.location.pathname);
  const link = $(`a[href$='${window.location.pathname}']`);
  link.addClass("active");

  $("a").on("click", (event) => {
    event.preventDefault();
    if ($("#nav-links").is(":visible")) {
      $("#nav-links").toggle("fast");
    }
    let target = $(event.target);
    // Fix for when images are clicked becuase logic.....
    if (target.is("img")) {
      target = target.parent();
    }
    $(".link").removeClass("active");
    target.addClass("active");
    const href = target.attr("href");
    const path = href.substr(href.lastIndexOf("/"));
    router.navigateTo(path);
    jQuery(window).trigger("resize").trigger("scroll");
  });
});
