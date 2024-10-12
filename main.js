/** @format */
const nav_link = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
for (const navLink of nav_link) {
  navLink.addEventListener("click", (e) => {
    sections.forEach((section) => {
      if (e.currentTarget.id === section.id) {
        section.classList.add("active");
        // e.currentTarget.classList.remove("active_Link");
      } else {
        section.classList.remove("active");
      }
    });
  });
}

// Collecting Form Data
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzlltgwqgaSIjdmO5gQTipSehvE7WaDwwA6PcKiB4wCAxV2Srg5Iyb7ypmj1fZa3WMykA/exec";
const submitTxt = document.querySelector(".submitTxt");
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("working");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      submitTxt.innerHTML = "Submitted Successfully!";
      setTimeout(() => {
        submitTxt.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      console.error("Error", error.message);
    });
});

// Handling Menue
const menue = document.querySelector(".menue");
const menueBarIcon = document.querySelector(".teal-color");

function handleMenueDisplay() {
  event.currentTarget.classList.add("hiddenMenueIcon");
  menue.classList.add("showMenue");
}
function handleMenueUndisplay() {
  event.currentTarget.classList.remove("showMenue");
  menueBarIcon.classList.remove("hiddenMenueIcon");
}
