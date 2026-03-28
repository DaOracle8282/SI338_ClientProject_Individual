/* ============================================================
   main.js — Garrett Comer Cross Country Results
   Mirrors class example patterns (querySelectorAll + for loops)
   ============================================================ */

/* ===== 1. HIDE MISSING RACE IMAGES =====
   Uses querySelectorAll + a for loop (same pattern as class example).
   If a race image src contains "no-photo-available", hide it so
   there is no broken or placeholder box shown to the user. */

const raceImages = document.querySelectorAll(".race-image");

for (let i = 0; i < raceImages.length; i++) {
  if (raceImages[i].getAttribute("src").includes("no-photo-available")) {
    raceImages[i].style.display = "none";
  }
}


/* ===== 2. LIVE SEARCH FILTER =====
   Listens for keyup on the search box and hides race cards
   whose h3 text doesn't match the search term.
   querySelectorAll + for loop — same structure as class example. */

const searchInput = document.querySelector("#race-search");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = searchInput.value.toLowerCase();
    const raceCards = document.querySelectorAll(".race-card");

    for (let i = 0; i < raceCards.length; i++) {
      const raceName = raceCards[i].querySelector("h3").textContent.toLowerCase();

      if (raceName.includes(query)) {
        raceCards[i].parentElement.style.display = "";   /* show the <li> */
      } else {
        raceCards[i].parentElement.style.display = "none"; /* hide the <li> */
      }
    }
  });
}


/* ===== 3. SEASON FILTER =====
   When the user picks a season from the dropdown and clicks Apply,
   only race cards matching that year's date are shown. */

const filterForm = document.querySelector("form");

if (filterForm) {
  filterForm.addEventListener("submit", function (event) {
    event.preventDefault(); /* stop the page from reloading */

    const selectedYear = document.querySelector("#race-filter").value;
    const raceItems = document.querySelectorAll(".race-list li");

    for (let i = 0; i < raceItems.length; i++) {
      const raceDate = raceItems[i].querySelector("time").getAttribute("datetime");

      /* "all" shows everything; otherwise match the year in the datetime attribute */
      if (selectedYear === "all" || raceDate.startsWith(selectedYear)) {
        raceItems[i].style.display = "";
      } else {
        raceItems[i].style.display = "none";
      }
    }
  });
}