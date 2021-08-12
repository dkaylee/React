import axios from 'axios';

// action type
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// root url for API
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=ehrudWkd';

export function fetchPosts(){

    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    
    return {
        type: FETCH_POSTS,
        payload: request
    };
}

// form -> property -> endpoint
export function createPost(props) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return {
        type: CREATE_POST,
        patload: request
    };
}