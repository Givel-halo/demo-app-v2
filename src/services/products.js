import { get } from '../utils/request';
//调商品分类
export const loadCategories = () => get("/api/v1/product_categories")
//根据分类id调商品
export const loadProductsAPI = (product_category) => get("/api/v1/products", { product_category })
//调商品
export const loadProductAPI = (page, product_category, name) => get("/api/v1/products", { page, product_category, name })

