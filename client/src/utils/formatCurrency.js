/**
 * Currency Formatter Utility for Indian Rupees (INR)
 * Formats numbers into official Indian Numbering System:
 * e.g. 9000 -> ₹9,000 | 24000 -> ₹24,000 | 125000 -> ₹1,25,000
 */

export const formatINR = (amount, options = {}) => {
  const numeric = Number(amount) || 0;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: options.decimals ?? 0
  }).format(numeric);
};

export default formatINR;
