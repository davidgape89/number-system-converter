import {convertFromDecimal} from './number-system';

describe('should convert 120 to 231 on base 7 correctly', () => {
  const result = convertFromDecimal(120, 7);

  expect(result).toEqual(231);
});
