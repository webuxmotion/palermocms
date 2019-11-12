export const areaOputter = (areas) => {
    const proto = {
  
      JSON() {
        const res = {
          'sum': this.areas.sum()
        };
        return res;
      },
  
      HTML(container) {
        const res = `<h2>Total area of the shapes: ${this.areas.sum()}</h2>`;
        container.innerHTML = res;
      },
  
      ALERT() {
        const res = `Total area of the shapes: ${this.areas.sum()}`;
        alert(res);
      }
    }
    return Object.assign(Object.create(proto), {areas: areas})
  }