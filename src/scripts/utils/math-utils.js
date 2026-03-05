export function sumRange(start, end) {
  const quantity = countRange(start, end);
  return ((start + end) * quantity) / 2;
}

export function countRange(start, end) {
  return Math.abs(start - end) + 1;
}

export function calcMeanAsText(sum, quantity) {
  return (sum / quantity).toFixed(2);
}