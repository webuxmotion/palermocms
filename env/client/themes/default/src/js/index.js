// import jQuery from "jquery";
// import popper from "popper.js";
// import bootstrap from "bootstrap";

// jQuery(function() {
//   jQuery("body").css("color", "blue");
// });
import { circle, square, rect } from './shapes';
import { areaCalculator } from './areaCalculator';
import { areaOputter } from './areaOputter';


const shapes = [
    circle(0.5),
    square(5),
    rect(10, 5),
    square(7)
];
  
  const areas = areaCalculator(shapes);
  const output = areaOputter(areas);
  
  console.log(output.JSON());

console.log('testtddfddft');
console.log('test');