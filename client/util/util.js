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
  if (price == 2) return "Theo mùa vụ và thời điểm ký hợp đồng";
  if (price == 1) return "5 triệu VNĐ/10g/1 hộp/10 hũ thuỷ tinh";
  return price?.toLocaleString("en-US", { style: "currency", currency: "VND" });
};
