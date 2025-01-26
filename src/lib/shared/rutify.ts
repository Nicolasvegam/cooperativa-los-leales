function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  
  export default function rutify(value: string) {
    let data = value;
    data = data
      .replace(/(\.)|(-)/g, '')
      .replace(/-/g, '')
      .trim()
      .toLowerCase()
      .slice(0, 9);
  
    const lastDigit = data.substring(data.length - 1, data.length);
    const rutDigit = data.substring(0, data.length - 1);
    const formato = numberWithCommas(Number(rutDigit));
  
    return `${!isNaN(Number(rutDigit)) ? formato : ''}-${lastDigit}`;
  }
  