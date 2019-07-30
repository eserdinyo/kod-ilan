import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.kodilan.com',
});

export const fetchPosts = () => {
    return http.get('/posts?get=25').then(res => res.data.data)
}

export const fetchPost = (slug) => {
    return http.get(`/posts/${slug}`).then(res => res.data);
}