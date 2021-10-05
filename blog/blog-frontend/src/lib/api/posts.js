import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags, files }) =>
  client.post('api/posts', { title, body, tags, files });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  // /api/posts?username=tester&page=2

  return client.get(`/api/posts?${queryString}`);
};

export const updatePost = ({ id, title, body, tags, files }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
    files,
  });

export const removePost = (id) => client.delete(`/api/posts/${id}`);

export const postbyUser = ({ id }) => client.get(`/api/posts/${id}`);
