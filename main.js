const swURL = 'service-worker.js';

// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register(swURL);
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

function getTheDate() {
    let date = new Date();
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    let today = month + 1 + '-' + day + '-' + year;
    return today;
}

function select(color) {
    localStorage.setItem('selected', color)
    localStorage.setItem('date', getTheDate())
}

window.onload = () => {
    let today = getTheDate();
    let selected = localStorage.getItem('selected');
    if (localStorage.getItem('date') != today) {
        selected = 'green';
    }
    document.getElementById(selected).classList.add('selected')
    select(selected);
}

document.addEventListener('click', event => {
    console.log(event);
    if (event.target.tagName == 'DIV' && event.target.parentNode.className == 'main') {
        document.querySelectorAll('div').forEach(div => div.classList.remove('selected'));
        event.target.classList.add('selected');
        select(event.target.id);
    }
});