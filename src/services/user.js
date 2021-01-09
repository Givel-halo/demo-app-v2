import { get, post } from "../utils/request";

/**
 * 加载用户信息
 */
export function loaduser() {
  return get("/api/v1/users/info");
}
/**
 * 修改用户
 * @param {*} nickName
 * @param {*} avatar
 */
export function updateuser(nickName, avatar) {
  return post("/api/v1/users/change_info", { nickName, avatar });
}
