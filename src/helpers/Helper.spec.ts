// Import the function to be tested
import { calculateSquare } from './Helper';

// Test case using Jest
describe('calculateSquare function', () => {
    it('should calculate the square of a number correctly', () => {
        // Test case 1: Positive number
        expect(calculateSquare(5)).toBe(25);

        // Test case 2: Zero
        expect(calculateSquare(0)).toBe(0);

        // Test case 3: Negative number
        expect(calculateSquare(-3)).toBe(9);
    });

    // Add more test cases as needed
});
