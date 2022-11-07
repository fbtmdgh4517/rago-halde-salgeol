import client from './client';

export const writeComment = ({ postId, body }) => client.post(`/api/posts/${postId}/comments`, { body });

export const listComments = (postId) => client.get(`/api/posts/${postId}/comments`);

export const removeComment = ({ postId, commentId }) => client.delete(`/api/posts/${postId}/comments/${commentId}`);
