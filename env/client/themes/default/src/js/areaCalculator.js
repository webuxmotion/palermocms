export const areaCalculator = (s) => {
    const proto = {
      sum() {
        let sum = 0;
  
        s.forEach(el => {
          switch (el.type) {
            case 'Circle':
              sum += Math.PI * (+el.radius * +el.radius);
              break;
            case 'Square':
              sum += +el.length * +el.length;
              break;
            case 'Rect':
              sum += el.a * el.b;
              break;
            default:
              console.log(`Add case for type ${el.type}`);
          }
        });
  
        return sum;
      }
    }
    return Object.assign(Object.create(proto), {shapes: s})
  }