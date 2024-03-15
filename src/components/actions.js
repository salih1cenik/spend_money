export const BUY_PRODUCT = "BUY_PRODUCT";
export const SELL_PRODUCT = "SELL_PRODUCT";

export function buyProduct(product) {
  return { type: BUY_PRODUCT, product };
}

export function sellProduct(price) {
  return { type: SELL_PRODUCT, price };
}
