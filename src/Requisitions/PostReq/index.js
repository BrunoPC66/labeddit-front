import axios from "axios";
import { BASE_URL } from "../../Constants";

export const newPost = async (content, token) => {
    const body = {
        content
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = axios.post(`${BASE_URL}/posts`, body, config)
        const result = res.data

        return result
    } catch (error) {
        console.error(`newPost error: ${err.response}`);
    }
}

export const fetchPost = async (creatorName, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    if (creatorName) {
        config.params = {
            q: creatorName
        }
    }

    try {
        const promises = await axios.get(`${BASE_URL}/posts`, config)

        const res = Promise.all(promises.map(Post => Post))
        const result = res.data

        return result
    }
    catch (err) {
        console.error(`fetchPost error: ${err.response}`);
    }
}

export const editPost = async (postId, newContent, token) => {

    const body = {}

    if (newContent) {
        body.newContent = newContent
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = await axios.put(`${BASE_URL}/posts/:${postId}`, body, config)
        const result = res.data

        return result
    } catch (err) {
        console.error(`editPost error: ${err.response}`);
    }
}

export const deletePost = async (postId, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = await axios.delete(`${BASE_URL}/posts/:${postId}`, config)
        const result = res.data

        return result
    } catch (err) {
        console.error(`deleteAccount error: ${err.response}`);
    }
}

export const likes = async (like, postId, token) => {
    const body = {
        like
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = await axios.delete(`${BASE_URL}/posts/:${postId}/like`, body, config)
        const result = res.data

        return result
    } catch (err) {
        console.error(`likes error: ${err.response}`);
    }
}