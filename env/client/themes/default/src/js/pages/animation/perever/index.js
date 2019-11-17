import jQuery from "jquery";
import { TimelineMax } from 'gsap';

let tl = new TimelineMax();
let $ = jQuery;

tl
    .from( $('.c-hero__letter-2'), 1, {
        y: -60
    })
    .from( $('.c-hero__letter-3'), 1, {
        rotation: 18,
        transformOrigin: "100% 50%"
    }, "-=0.8")
    .from( $('.c-hero__letter-4'), 1.4, {
        y: "100%"
    }, "-=1.6")
    .from( $('.c-hero__letter-5'), 1, {
        rotation: 18,
        transformOrigin: "0% 50%"
    }, "-=0.8")
    .from( $('.c-hero__letter-6'), 1.4, {
        x: 200
    }, "-=1.3")
    .from( $('.c-hero__letter-7'), 1.4, {
        attr:{r:0}
    }, "-=0.8");