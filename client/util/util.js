// Delete Product from List By Id
export const deleteProduct = (list, id) => {
  const filter = list.filter((item) => item.id !== id);
  return filter;
};

// Find Product Index From List
export const findProductIndex = (list, slug) => {
  const index = list.findIndex((item) => item.slug === slug);
  return index;
};
export const findProductIndexById = (list, id) => {
  const index = list.findIndex((item) => item.id === id);
  return index;
};

export const formattedPrice = (price) => {
  if (price === undefined) return "Theo mùa vụ và thời điểm ký hợp đồng";
  return price.toLocaleString("en-US", { style: "currency", currency: "VND" });
};
