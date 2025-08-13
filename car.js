fetch('Products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById("product-container");
    const popup = document.getElementById("product-popup");
    const popupContent = document.getElementById("product-popup-content");
    const closePopup = document.getElementById("close-popup");

    products.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <video class="product-video" src="${product.image}" autoplay muted loop playsinline></video>
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">Rs. ${product.price}</p>
      `;

      card.addEventListener("click", () => {
        popupContent.innerHTML = `
          <video src="${product.image}" controls autoplay loop></video>
          <h1>${product.title}</h1>
          <p>Price: Rs. ${product.price}</p>
          <p>${product.description || "Wear The Vibe"}</p>
          <button><a href="https://wa.me/+94719478895" target="_blank">Chat on WhatsApp</a><button/>
        `;
        popup.style.display = "flex";
      });

      container.appendChild(card);
    });

    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  })
  .catch(error => {
    console.error("Error loading products:", error);
  });

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
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

// Create dots
slideElements.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSliderPosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateSliderPosition();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideElements.length;
  updateSliderPosition();
}

// Auto-slide every 5s
setInterval(nextSlide, 5000);
