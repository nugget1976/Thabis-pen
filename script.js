function toggleFavourite(storyId) {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];
  
    const index = favs.indexOf(storyId);
    if (index > -1) {
      favs.splice(index, 1);
      alert("Removed from favourites");
    } else {
      favs.push(storyId);
      alert("Added to favourites!");
    }
  
    localStorage.setItem("favourites", JSON.stringify(favs));
    updateButtons();
  }
  
  function updateButtons() {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    document.querySelectorAll(".story").forEach(div => {
      const id = div.getAttribute("data-id");
      const button = div.querySelector("button");
      button.textContent = favs.includes(id) ? "❤️ Favourited" : "🤍 Favourite";
    });
  }
  
  // Run on page load
  document.addEventListener("DOMContentLoaded", updateButtons);
  