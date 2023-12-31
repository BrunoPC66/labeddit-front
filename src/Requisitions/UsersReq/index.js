import axios from "axios";
import { BASE_URL } from "../../Constants";

export const newUser = async (name, email, password) => {

    const body = {
        name,
        email,
        password
    }

    try {
        const res = await axios.post(`${BASE_URL}/users/signup`, body/*, headers*/)
        const result = res.data
        
        return result
    } catch (error) {
        console.error(`newUser error: ${err.response}`);
    }
}

export const getLogin = async (email, password) => {
    const body = {
        email,
        password
    }

    try {
        const res = await axios.get(`${BASE_URL}/users/login`, body)
        const result = res.data

        return result.data
    } catch (err) {
        console.error(`fetchUsers error: ${err.response}`);
    }
}

export const fetchUsers = async (token, userName) => {
    const config = {
        headers: {
            Authorization: token
        }
    }
    if (userName) {
        config.params = {
            q: userName
        }
    }

    try {
        const res = await axios.get(`${BASE_URL}/users`, config)

        const result = res.data

        return result
    } catch (err) {
        console.error(`fetchUsers error: ${err.response}`);
    }
}

export const editUser = async (
    password,
    input,
    id,
    token
) => {
    const {
        newName,
        newEmail,
        newPassword
    } = input

    const body = {
        password,
    };

    if (newName) {
        body.newName = newName
    }

    if (newEmail) {
        body.newEmail = newEmail
    }

    if (newPassword) {
        body.newPassword = newPassword
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = await axios.put(`${BASE_URL}/users/:${id}`, body, config)
        const result = res.data

        return result.data
    } catch (err) {
        console.error(`editUser error: ${err.response}`);
    }
}

export const deleteAccount = async (password, id, token) => {

    const body = {
        password
    }

    const config = {
        headers: {
            Authorization: token
        }
    }

    try {
        const res = await axios.delete(`${BASE_URL}/users/:${id}`, body, config)
        const result = res.data
        
        return result
    } catch (err) {
        console.error(`deleteAccount error: ${err.response}`);
    }
}