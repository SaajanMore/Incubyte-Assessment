export const calcTotal = (inputString) => {
  if (!inputString) return 0; // Case: Empty string

  // Check for custom delimiter
  let delimiter = /,|\n/; // Default delimiters: comma or newline
  if (inputString.startsWith("//")) {
    const parts = inputString.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    inputString = parts[1];
  }

  const numbers = inputString.split(delimiter).map(Number);

  // Check for negative numbers
  const negatives = numbers.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
  }

  // Calculate the sum
  return numbers.reduce((sum, num) => sum + num, 0);
};
