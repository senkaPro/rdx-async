const colors = [
    '#ED5565',
    '#FC6E51',
    '#E9573F',
    '#F6BB42',
    '#8E44AD',
    '#5D6D7E',
    '#37BC9B',
    '#2CC990',
    '#00A99D',
    '#7DCEA0',
    '#B2BEC3',
    '#F6BB42',
    '#AC92EC',
    '#5D6D7E',
    '#37BC9B',
    '#EC87C0',
    '#F6BB42',
    '#AC92EC',
    '#5D6D7E',
    '#37BC9B',
    '#EC87C0',
    '#F6BB42',
    '#AC92EC',
    '#5D6D7E',
    '#37BC9B',
    '#EC87C0',
    '#F6BB42',
    '#AC92EC',
]


export function fetchColor() {
  return new Promise<{ data: string }>((resolve) => {
    let color = colors[Math.floor(Math.random()*colors.length)];
    setTimeout(() => resolve({ data: color }), 1000)
  }
  );
}

export function getColor() {
    let color = colors[Math.floor(Math.random()*colors.length)];
    return {data: color}
}