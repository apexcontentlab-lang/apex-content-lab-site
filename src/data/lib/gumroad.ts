export interface GumroadProduct {
  id: string;
  name: string;
  price: string;
  short_url: string;
  description: string;
  formatted_price: string;
}

export async function getGumroadProducts(): Promise<GumroadProduct[]> {
  const token = import.meta.env.GUMROAD_ACCESS_TOKEN;

  if (!token) {
    console.warn("GUMROAD_ACCESS_TOKEN missing. Falling back to local products.ts");
    return [];
  }

  try {
    const response = await fetch(`https://api.gumroad.com/v2/products?access_token=${token}`);
    const data = await response.json();

    if (!data.success) {
      throw new Error("Failed to fetch products from Gumroad API");
    }

    return data.products;
  } catch (error) {
    console.error("Gumroad API Fetch Error:", error);
    return [];
  }
}
