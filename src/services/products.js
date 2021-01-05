import { get } from '../utils/request';
//调商品分类
export const loadCategories = () => get("/api/v1/product_categories")
//根据分类id调商品
// export const loadProductsAPI = (cid) => get(`/api/v1/products/${cid}`)
//调商品
export const loadProductAPI = (page, product_category) => get("/api/v1/products", { page, product_category })

