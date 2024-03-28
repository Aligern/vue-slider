import {slides} from './data.js';

const {createApp} = Vue;

let intervalId = null; // we use this variable to track the interval ID

createApp({
    data(){
        return {
        slides: slides,
        activeIndexSlide: 0 // index of active slide
        }
    },
    methods: {
        nextSlide() {
            if(this.activeIndexSlide < this.slides.length - 1) {
                this.activeIndexSlide++;
            } else {
                this.activeIndexSlide = 0
            }
        },
        prevSlide() {
            if (this.activeIndexSlide > 0) {
                this.activeIndexSlide--;
            } else {
                this.activeIndexSlide = this.slides.length -1;
            }
        },
        goToSlide(index) {
            this.activeIndexSlide = index;
        },
        startAutoplay() {
            intervalId = setInterval(this.nextSlide, 3000);
        },
        stopAutoplay() {
            clearInterval(intervalId)
        }
    },
    mounted() {
        this.startAutoplay();
    }
}).mount('#app');