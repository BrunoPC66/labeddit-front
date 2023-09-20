import axios from "axios";
import { BASE_URL } from "../../Constants";

export const newComment = async (
    content,
    postId,
    token
    ) => {
    const body = {
        content
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const result = axios.post(`${BASE_URL}/posts/:${postId}/comments`, body, config)

        return result
    } catch (error) {
        console.error(`newComment error: ${err.response}`);
    }
}

export const fetchComments = async (postId, token) => {
    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const promises = await axios.get(`${BASE_URL}/posts/:${postId}/comments`, config)

        const result = Promise.all(promises.map(Comment => Comment))

        return result
    }
    catch (err) {
        console.error(`fetchComments error: ${err.response}`);
    }
}

export const editComment = async (
    postId,
    commentId,
    content,
    token
    ) => {

    const body = {}

    if (content) {
        body.content = content
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const result = await axios.put(`${BASE_URL}/posts/:${postId}/comments/:${commentId}`, body, config)

        return result
    } catch (err) {
        console.error(`editComment error: ${err.response}`);
    }
}

export const deleteComment = async (
    commentId,
    token
    ) => {
    
    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const result = await axios.delete(`${BASE_URL}/posts/:${postId}/comments/:${commentId}`, config)

        return result
    } catch (err) {
        console.error(`deleteAccount error: ${err.response}`);
    }
}