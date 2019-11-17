import Jquery from 'jquery';
import { TimelineMax, Back } from 'gsap';
import Splitter from 'split-html-to-chars';

const $ = Jquery;

let tl = new TimelineMax();

let els = document.querySelectorAll(".js-splitme");
[].forEach.call(els, function(el) {
    el.outerHTML = Splitter(el.outerHTML, '<span class="letter">$</span>');
});

tl
    .fromTo('.loader__inner', 1, {scale: 0}, {scale: 1.4, onComplete: function() {
        $('.loader').remove();
    }})
    .fromTo('.logo', 1, {y: -100, opacity: 0}, {y: 0, opacity: 1}, "-=1")
    .fromTo('.header__right', {x: 200, opacity: 0}, {x: 0, opacity: 1}, "-=0.5")
    .staggerFromTo('.nav a', 0.5, {opacity: 0, x: 10}, {opacity: 1, x: 0}, 0.1)
    .staggerFromTo('.hero__title .letter', 0.3, {y: 20, opacity: 0}, {y: 0, opacity: 1, ease: Back.easeOut.config(3)}, 0.04, "-=1")
    .fromTo('.hero p', 0.5, {y: 30, opacity: 0}, {y: 0, opacity: 1}, "-=0.7")
    .fromTo('.hero__action', 0.3, {scale: 0.8, opacity: 0}, {scale: 1, opacity: 1, ease: Back.easeOut.config(3)}, "-=0.3")
    .fromTo('.button_type_explore', 0.3, {scale: 0.8, opacity: 1}, {scale: 1, opacity: 1, ease: Back.easeOut.config(3)}, "+=0.1")
