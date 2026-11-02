import api from './axiosInstance'

const ENDPOINT = '/posts'

export const fetchPosts = () => api.get(ENDPOINT).then((res)=>res.data)

export const getPost = (id) => api.get(`${ENDPOINT}/${id}`).then((res)=>res.data)

export const addPost = (post) => api.post(ENDPOINT, post).then((res)=>res.data)
