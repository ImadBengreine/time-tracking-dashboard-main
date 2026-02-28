let option = 'weekly';

async function loadData() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    renderCard(data);
  } catch (e) {
    console.log(e);
  }
}

function renderCard(activities) {
  let container = document.getElementById("app");
  
  let html = activities.map(activity => {
    let icon_name = activity.title.toLowerCase().replace(' ', '-'); // "Self Care" → "self-care"
    let current = activity.timeframes[option].current;
    let previous = activity.timeframes[option].previous;
    
    return `<div class="activity-card ${icon_name}">
      <div class="activity-header">
        <img src="images/icon-${icon_name}.svg" alt="${activity.title}">
      </div>
      <div class="activity-content">
        <div class="activity-title-row">
          <h3>${activity.title}</h3>
          <button class="menu-btn">...</button>
        </div>
        <div class="activity-hours">
          <h1>${current}hrs</h1>
          <p>Last Week - ${previous}hrs</p>
        </div>
      </div>
    </div>`;
  }).join("");

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  loadData();
});