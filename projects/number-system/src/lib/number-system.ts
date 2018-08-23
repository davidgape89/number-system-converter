class NumberSystem {
  public static convertFromDecimal(number: string, base: number): string {
    try {
      const auxNumber: number = parseInt(number, 10);

      return auxNumber.toString(base);
    } catch (e) {
      throw new Error('The base provided is out of range (2-32)');
    }
  }

  public static convertToDecimal(number: string, base: number): string {
    const result = parseInt(number, base);

    if (base < 2 || base > 32) 
      throw new Error('The base provided is out of range (2-32)');
    
    if (isNaN(result))
      throw new Error('Invalid number provided');

    return result.toString();
  }
}

export {NumberSystem};
