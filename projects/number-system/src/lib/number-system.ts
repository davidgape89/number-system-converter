// This class will convert from different number systems to decimal
// and the other way around. The bases are always taken in decimal system.
// Since some systems don't necessarily need to be numbers, we always take
// the number as a string, whilst the base, since it's always given in decimal,
// it's taken as a number

class NumberSystem {
  public static convertFromDecimal(number: string, base: number): string {
    const auxNumber: number = parseInt(number, 10);
    return auxNumber.toString(base);
  }

  public static convertToDecimal(number: string, base: number): string {
    return parseInt(number, base).toString();
  }
}

export default NumberSystem;
