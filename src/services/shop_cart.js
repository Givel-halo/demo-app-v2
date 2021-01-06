import { get, post } from "../utils/request";

/**
 *加入购物车
 * @param {*} product 商品id
 * @param {*} amount  购买数量
 */
export function addTocart(product, amount = 1) {
  return post("/api/v1/shop_carts", { product, quantity: amount });
}
/**
 * 加载购物车信息
 */
export function loadcart() {
  return get("/api/v1/shop_carts");
}

export function delcartid(ids) {
  return post("/api/v1/shop_carts/delmany", { ids });
}
