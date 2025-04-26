// Import the function to be tested
import { calculateSquare,debounce,deepClone,memoize,findUnique } from './Helper';

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

// debounce.test.ts

describe('debounce function', () => {
  jest.useFakeTimers();

  it('should call the function after the specified delay', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 500);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(fn).not.toBeCalled(); // Function should not be called immediately

    jest.advanceTimersByTime(500); // Fast-forward the timer
    expect(fn).toHaveBeenCalledTimes(1); // Function should be called once after the delay
  });

  it('should not call the function until the delay passes', () => {
    const fn = jest.fn();
    const debouncedFn = debounce(fn, 1000);

    debouncedFn();
    debouncedFn();

    expect(fn).not.toBeCalled(); // Ensure that the function is not called yet

    jest.advanceTimersByTime(1000); // Fast-forward the timer
    expect(fn).toHaveBeenCalledTimes(1); // Function should be called after the final call
  });
});


// findUnique.test.ts

describe('findUnique function', () => {
  it('should return an array with unique values', () => {
    const input = [1, 2, 2, 3, 4, 4];
    const result = findUnique(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('should handle an empty array', () => {
    const input: number[] = [];
    const result = findUnique(input);
    expect(result).toEqual([]);
  });

  it('should handle arrays with only one element', () => {
    const input = [5];
    const result = findUnique(input);
    expect(result).toEqual([5]);
  });

  it('should work with strings', () => {
    const input = ['apple', 'banana', 'apple'];
    const result = findUnique(input);
    expect(result).toEqual(['apple', 'banana']);
  });

  it('should return unique objects by reference', () => {
    const input = [{ name: 'John' }, { name: 'Alice' }, { name: 'John' }];
    const result = findUnique(input);
    expect(result).toHaveLength(2);
    expect(result[0]).not.toBe(result[2]); // Ensure different references
  });
});

// memoize.test.ts

describe('memoize function', () => {
  it('should return cached value for repeated calls', () => {
    const slowFn = jest.fn((x: number) => x * 2);
    const memoizedFn = memoize(slowFn);

    expect(memoizedFn(5)).toBe(10); // First call, should compute and cache
    expect(slowFn).toHaveBeenCalledTimes(1);

    expect(memoizedFn(5)).toBe(10); // Second call, should return from cache
    expect(slowFn).toHaveBeenCalledTimes(1); // No additional calls to slowFn
  });

  it('should handle multiple different arguments', () => {
    const addFn = jest.fn((x: number, y: number) => x + y);
    const memoizedAdd = memoize(addFn);

    expect(memoizedAdd(2, 3)).toBe(5); // Compute and cache
    expect(memoizedAdd(2, 3)).toBe(5); // Return from cache
    expect(memoizedAdd(3, 4)).toBe(7); // Compute and cache for different args
    expect(memoizedAdd(3, 4)).toBe(7); // Return from cache
    expect(addFn).toHaveBeenCalledTimes(2); // Add function called twice
  });

  it('should handle invalid cache data and recompute', () => {
    const fn = (x: number) => x * x;
    const memoizedFn = memoize(fn);
    const result1 = memoizedFn(3);
    const result2 = memoizedFn(4);

    expect(result1).toBe(9);
    expect(result2).toBe(16);
  });
});


// deepClone.test.ts

describe('deepClone function', () => {
  it('should deep clone a simple object', () => {
    const obj = { name: 'John', age: 30 };
    const clonedObj = deepClone(obj);
    expect(clonedObj).toEqual(obj);
    expect(clonedObj).not.toBe(obj); // Ensure it's a new object
  });

  it('should deep clone an object with nested objects', () => {
    const obj = { name: 'Alice', address: { city: 'Wonderland' } };
    const clonedObj = deepClone(obj);
    expect(clonedObj.address).toEqual(obj.address);
    expect(clonedObj.address).not.toBe(obj.address); // Ensure nested objects are cloned
  });

  it('should deep clone an array', () => {
    const arr = [1, 2, { name: 'Bob' }];
    const clonedArr = deepClone(arr);
    expect(clonedArr).toEqual(arr);
    expect(clonedArr).not.toBe(arr); // Ensure it's a new array
    expect(clonedArr[2]).not.toBe(arr[2]); // Ensure objects inside the array are cloned
  });

  it('should return primitive values unchanged', () => {
    const value = 42;
    const clonedValue = deepClone(value);
    expect(clonedValue).toBe(value);
  });
});




