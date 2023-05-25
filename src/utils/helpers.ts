export const formatPrice = (cents: number | null) => {
  return !cents
    ? ""
    : (cents / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
};
