import axios from 'axios';

// action type
export const FETCH_POSTS = 'FETCH_POSTS';
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