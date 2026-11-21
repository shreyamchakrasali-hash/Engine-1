// Data & Integrity Engine - Input Validation Middleware
export const validateApplianceInput = (req, res, next) => {
  const { name, category, purchaseYear, purchasePrice } = req.body;
  if (!name || !category || !purchaseYear || !purchasePrice) {
    return res.status(400).json({
      success: false,
      message: 'Validation Error: name, category, purchaseYear and purchasePrice are required fields'
    });
  }

  const currentYear = new Date().getFullYear();
  if (purchaseYear < 1980 || purchaseYear > currentYear) {
    return res.status(400).json({
      success: false,
      message: `Validation Error: purchaseYear must be between 1980 and ${currentYear}`
    });
  }

  next();
};
