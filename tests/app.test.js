// Import the module or functions you want to test
// Example: const { sum } = require('../src/sum');

// Example test suite
describe("Basic Math Operations", () => {
    test("should correctly add two numbers", () => {
      const result = 2 + 3;
      expect(result).toBe(5); // Test passes if result === 5
    });
  
    test("should correctly subtract two numbers", () => {
      const result = 10 - 7;
      expect(result).toBe(3); // Test passes if result === 3
    });
  });
  
  // Example for async function testing
  describe("Async Function Example", () => {
    const fetchData = async () => "Hello, World!";
  
    test("should return the correct data", async () => {
      const data = await fetchData();
      expect(data).toBe("Hello, World!"); // Test passes if data === "Hello, World!"
    });
  });
  