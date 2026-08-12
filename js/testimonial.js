const containerTestimonials = document.querySelector(".container-testimonials");
const cardsTestimonials = document.querySelectorAll(".testimonial");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

let currentIndex = 0;
const totalTestimonials = cardsTestimonials.length;
let autoplayInterval;

const updateCarrusel = () => {
  const offset = currentIndex * containerTestimonials.clientWidth;
  containerTestimonials.scrollTo({
    left: offset,
    behavior: "smooth",
  });
};
btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  updateCarrusel();
  resetautoplay()
});
btnPrev.addEventListener("click", () => {
  currentIndex = currentIndex - 1 + (totalTestimonials % totalTestimonials);
  updateCarrusel();
  resetautoplay()
});

function autoplay() {
  autoplayInterval = setInterval(() => {
    currentIndex = currentIndex = (currentIndex + 1) % totalTestimonials;
    updateCarrusel();
  }, 5000);
  
}
function resetautoplay(){
    clearInterval(autoplayInterval)
    autoplay()
}

autoplay()

