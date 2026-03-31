## Reference Guide

## HTML

### Add a new section
```html
<section class="card goals">
  <h2>Upcoming Goals</h2>
  <p>Break 19:30 in the 5K this season.</p>
</section>
```

### Add a button
```html
<button type="button" class="results-btn">View Full Results</button>
```

## CSS

### Change color
```css
header, footer {
  background-color: #7a0019;
}
```

## JS

### Add a message
```js
function showMessage() {
  document.getElementById("team-message").textContent = "Go Eagles!";
}
```

## Hide/show something

<button type="button" onclick="toggleComments()">Hide/Show Comments</button>

<script>
function toggleComments() {
  const comments = document.querySelector(".comments");
  if (comments.style.display === "none") {
    comments.style.display = "block";
  } else {
    comments.style.display = "none";
  }
}
</script>


## Add interaction

<button type="button" onclick="changeBadge()">Update PR Badge</button>

<script>
function changeBadge() {
  document.querySelector(".pr-badge").textContent = "New PR Achieved!";
}
</script>