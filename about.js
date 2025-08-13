
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
const audio = document.getElementById("bg-music");
const toggleButton = document.getElementById("music-toggle");
let isPlaying = false;

// Change icon and toggle music
toggleButton.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    toggleButton.textContent = "🔊";
  } else {
    audio.pause();
    toggleButton.textContent = "🔇";
  }
  isPlaying = !isPlaying;
});

