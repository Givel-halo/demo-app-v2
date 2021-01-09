import { get, post, del } from "../utils/request";

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
/**
 * 删除多条商品
 * @param {*} ids
 */
export function delcartid(ids) {
  return post("/api/v1/shop_carts/delmany", { ids });
}
/**
 * 删除单条商品
 */
export function deloneid(id) {
  return del(`/api/v1/shop_carts/${id}`);
}
