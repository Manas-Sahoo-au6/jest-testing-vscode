// Helper function to calculate square of a number
function calculateSquare(num: number): number {
    return num * num;
}

// debounce.ts
 function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: NodeJS.Timeout;
  
    return ((...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    }) as T;
  }


  // findUnique.ts
 function findUnique<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
// memoize.ts
 function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache: { [key: string]: any } = {};
  
    return ((...args: any[]) => {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    }) as T;
  }
    
  // deepClone.ts
 function deepClone<T>(obj: T): T {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(item => deepClone(item)) as unknown as T;
    }
  
    const clonedObj: { [key: string]: any } = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone((obj as { [key: string]: any })[key]);
      }
    }
    return clonedObj as T;
  }
  


export { calculateSquare, debounce, findUnique, memoize, deepClone };
