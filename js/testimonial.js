const containerTestimonials = document.querySelector('.container-testimonials');
const cardsTestimonials = document.querySelectorAll('.testimonial')
const btnPrev = documnet.querySelector('.btn-prev')
const btnNext = documnet.querySelector('.btn-next')


let currentIndex = 0;
const totalTestimonials = cardsTestimonials.length;
let autoplayInterval;

const updateCarrusel = () =>{
    const offset = currentIndex * containerTestimonials.clientWidth;
    containerTestimonials.scrollTo({
        left: offset,
        behavior: 'smooth'
    })
}
