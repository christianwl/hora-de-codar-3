/**
 * Generates a string sequence of numbers within a specified range.
 * @param {number} maxIndex - The maximum or ending value of the sequence.
 * @param {Object} [options] - Optional configuration for the sequence.
 * @param {boolean} [options.isRegressive=true] - If true, the sequence counts down from maxIndex to initialIndex.
 * @param {number} [options.initialIndex=0] - The starting value for ascending or ending value for descending counts.
 * @returns {string} A space-separated string of numbers.
 */
export function getTimerStatus(
  maxIndex,
  { isRegressive = true, initialIndex = 0 } = {},
) {
  let timerValues = [];
  let currentMin = initialIndex;
  let currentMax = maxIndex;

  while (isRegressive ? currentMax >= currentMin : currentMin <= currentMax) {
    timerValues.push(isRegressive ? currentMax-- : currentMin++);
  }

  return timerValues.join(" ");
}