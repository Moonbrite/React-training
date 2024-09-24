import {truncateString} from "./truncateString";

describe('truncateString', () => {
    it('should truncate the string to the specified length', () => {
        expect(truncateString('Hello, World!', 5)).toBe('Hello');
        expect(truncateString('Test', 10)).toBe('Test');
    });

    it('should return the original string if its length is equal to the specified number', () => {
        expect(truncateString('Hello', 5)).toBe('Hello');
    });

    it('should convert the truncated string to uppercase when isUpperCase is true', () => {
        expect(truncateString('Hello, World!', 5, true)).toBe('HELLO');
    });

    it('should handle empty strings', () => {
        expect(truncateString('', 5)).toBe('');
        expect(truncateString('', 0)).toBe('');
    });

    it('should handle zero length', () => {
        expect(truncateString('Hello', 0)).toBe('');
    });
});