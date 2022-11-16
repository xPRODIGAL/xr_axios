import { request } from "./index";

export function course() {
  return request({
    method: "get",
    url: "course/course"
  });
}

export function getCommont(data) {
  return request({
    method: "post",
    url: "course/getCommont",
    data
  });
}

export function addCommont(data) {
  return request({
    method: "post",
    url: "course/addCommont",
    data
  });
}

export function deleteComment(data) {
  return request({
    method: "post",
    url: "course/deleteComment",
    data
  });
}

export function collectionClasses(data) {
  return request({
    method: "post",
    url: "course/addCommont",
    data
  });
}

export function getClasses(data) {
  return request({
    method: "post",
    url: "course/getClasses",
    data
  });
}

export function deleteClasses(data) {
  return request({
    method: "post",
    url: "course/deleteClasses",
    data
  });
}

export function addClasses(data) {
  return request({
    method: "post",
    url: "course/addClasses",
    data
  });
}

export function dbClasses(data) {
  return request({
    method: "post",
    url: "course/dbClasses",
    data
  });
}
