import { get } from "../utils/request";

/**
 * 根据id获取详情
 * @param {*} id
 */
export const loadDetailById = (id) => get(`/api/v1/products/${id}`);
