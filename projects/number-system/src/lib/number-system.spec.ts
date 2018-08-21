import NumberSystem from './number-system';

describe('number system class', () => {

  it('should convert 120 in base 10 to 231 in base 7', () => {
    const result = NumberSystem.convertFromDecimal('120', 7);

    expect(result).toEqual('231');
  });

});
