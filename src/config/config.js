import instance from "./interceptor";

export function get(endPoint, params = {}) {
  return instance.get(endPoint, params);
}

export function post(endPoint, params = {}, config) {
  return instance.post(endPoint, params, config);
}

export const api = {
  LIST:'/'
}
