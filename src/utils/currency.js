const USD_TO_INR_RATE = 83.5;

export const convertUsdToInr = (usd) => {
  return usd * USD_TO_INR_RATE;
};

export const formatInr = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};
