export const circle = (radius) => {
    const proto = {
      type: 'Circle'
    }
    return Object.assign(Object.create(proto), {radius})
  }
  export const square = (length) => {
    const proto = {
      type: 'Square'
    }
    return Object.assign(Object.create(proto), {length})
  }
  export const rect = (a, b) => {
    const proto = {
      type: 'Rect'
    }
    return Object.assign(Object.create(proto), {a, b})
  }