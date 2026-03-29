

   /* =========================================
   JavaScript functionality for race filtering and display

   This code was developed with reference to
   SI 338 Week 11 VideoCode examples, particularly
   for DOM selection, event listeners, and looping patterns.
   ========================================= */
   
   /* 
   FUNCTION 1: Hide Missing Images
   Loops through all race images and hides any
   image that uses the "no-photo-available" file.
    */
function hideMissingImages() {
  const raceImages = document.querySelectorAll(".race-image");

  for (let i = 0; i < raceImages.length; i++) { /*Check if the image source includes "no-photo-available". If true, hide the image by setting display to "none". */
    if (raceImages[i].getAttribute("src").includes("no-photo-available")) {
      raceImages[i].style.display = "none";
    }
  }
}


/* 
   FUNCTION 2: Live Search Filter
   Runs every time the user types in the search box.
   Shows only race cards whose title matches the search.
   */
function searchRaces() {
  const searchInput = document.querySelector("#race-search");
  const query = searchInput.value.toLowerCase();
  const raceCards = document.querySelectorAll(".race-card");

  for (let i = 0; i < raceCards.length; i++) {
    const raceName = raceCards[i].querySelector("h3").textContent.toLowerCase();

    if (raceName.includes(query)) { /* Check if the race name includes the user's search query. If true, show the race; if false, hide it. */
      raceCards[i].parentElement.style.display = "";   /* show the <li> */
    } else {
      raceCards[i].parentElement.style.display = "none"; /* hide the <li> */
    }
  }
}


/* 
   FUNCTION 3: Season Filter
   Runs when the user submits the filter form.
   Displays only races from the selected year.
    */
function filterRaces(event) {
  event.preventDefault(); /* prevents page reload */

  const selectedYear = document.querySelector("#race-filter").value;
  const raceItems = document.querySelectorAll(".race-list li");

  for (let i = 0; i < raceItems.length; i++) {
    const raceDate = raceItems[i].querySelector("time").getAttribute("datetime");

    if (selectedYear === "all" || raceDate.startsWith(selectedYear)) { /* Show all races if "all" is selected. Otherwise, check if the race date starts with the selected year. */
      raceItems[i].style.display = "";   /* show item */
    } else {
      raceItems[i].style.display = "none"; /* hide item */
    }
  }
}


/* 
   INITIAL SETUP
   Runs once when the page loads
    */
hideMissingImages();


/* 
   EVENT LISTENERS
   Connect user actions to functions
    */

/* handles typing in the search box */
const searchInput = document.querySelector("#race-search");
if (searchInput) {
  searchInput.addEventListener("keyup", searchRaces);
}

/* handles form submission (filter button) */
const filterForm = document.querySelector("form");
if (filterForm) {
  filterForm.addEventListener("submit", filterRaces);
}