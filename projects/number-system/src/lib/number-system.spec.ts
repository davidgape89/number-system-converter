import {NumberSystem} from './number-system';

describe('number system class', () => {

  describe('convertFromDecimal static method', () => {

    it('should convert 5 in base 10 to 101 in base 2', () => {
      const result = NumberSystem.convertFromDecimal('5', 2);

      expect(result).toEqual('101');
    });

    it('should convert 120 in base 10 to 231 in base 7', () => {
      const result = NumberSystem.convertFromDecimal('120', 7);

      expect(result).toEqual('231');
    });

    it('should throw an error when the base is out of range', () => {
      expect(() => {
        NumberSystem.convertFromDecimal('120', 120);
      }).toThrow();
    });

  });

  describe('convertToDecimal static method', () => {
    it('should convert 101 in base 2 to 5 in base 10', () => {
      const result = NumberSystem.convertToDecimal('101', 2);

      expect(result).toEqual('5');
    });

    it('should convert 231 in base 7 to 120 in base 10', () => {
      const result = NumberSystem.convertToDecimal('231', 7);

      expect(result).toEqual('120');
    });

    it('should throw an error when the base is out of range', () => {
      expect(() => {
        NumberSystem.convertToDecimal('120', 120);
      }).toThrow();
    });

    it('should throw an error when the number is invalid', () => {
      expect(() => {
        NumberSystem.convertToDecimal('F', 2);
      }).toThrow();
    })

  });

});
