//server action là nơi chứa các hàm xử lý trêm server (nơi chứa source nextjs)
export const getAllProduct = async () => {
  const res = await fetch("https://apistore.cybersoft.edu.vn/api/Product", {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data.content;
};

export const getProductById = async (id) => {
  const res = await fetch(
    `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data.content;
};

export const getProdctKeywordApi = async (keyword) => {
  const res = await fetch(
    `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await res.json();
  return data.content;
};
