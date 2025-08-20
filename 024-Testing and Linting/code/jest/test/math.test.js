import { expect, jest, test } from '@jest/globals';
import { MyMath } from '../src/math';

describe('MyMath tests', () => {
    test('sum works correctly', () => {
        expect(MyMath.sum(5, 3)).toBe(8);
    });

    test('difference works correctly', () => {
        expect(MyMath.difference(5, 3)).toBe(2);
    });

    test('multiply works correctly', () => {
        expect(MyMath.multiply(5, 3)).toBe(15);
    });

    test('divide works correctly', () => {
        expect(MyMath.divide(10, 5)).toBe(2);
    });

    test('currency conversion works correctly', async () => {
        const currencySpy = jest.spyOn(MyMath, 'getCurrencyConversionRatesFromInternet').mockResolvedValue(4);
        const result = await MyMath.convertCurrency(100, 'usd', 'zł');
        expect(result).toBe(400);
        expect(MyMath.getCurrencyConversionRatesFromInternet).toHaveBeenCalledTimes(1);
    });
});
