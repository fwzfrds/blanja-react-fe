import axios from 'axios'
import swal from 'sweetalert';

export const loginUser = (loginData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_PENDING' })
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/users/login`, loginData)
        const user = result.data.data

        const dataLocal = user

        console.log(dataLocal)
        localStorage.setItem('BlanjaUser', JSON.stringify(dataLocal))

        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user })

        swal({
            title: "Good job!",
            text: `${result.data.message}`,
            icon: "success"
        });
        navigate('/')

    } catch (error) {
        console.log(error);
        dispatch({ type: 'USER_LOGIN_ERROR' })
        swal({
            title: "Good job!",
            text: `${error.response.data.message}`,
            icon: "error",
        });
    }
}

export const register = (registerData, navigate) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_REGISTER_PENDING' })
        const result = await axios.post(`${process.env.REACT_APP_API_BACKEND}/v1/users/registration`, registerData)

        dispatch({ type: 'USER_REGISTER_SUCCESS'})

        swal({
            title: "Good job!",
            text: `${result.data.message}`,
            icon: "success"
        });
        navigate('/login-admin')

    } catch (error) {
        console.log(error);
        swal({
            title: "Error!",
            text: `${error.response.data.message}`,
            icon: "error",
        })
        dispatch({ type: 'USER_REGISTER_ERROR' })
        // throw error
    }
}

export const update = (updateData, authToken) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_UPDATE_PENDING' })
        const result = await axios.put(`${process.env.REACT_APP_API_BACKEND}/v1/users/edit`, updateData, {
            headers: { Authorization: `Bearer ${authToken}` }
        })

        const resultGet = await axios.get(`${process.env.REACT_APP_API_BACKEND}/v1/users/profile`, {
            headers: { Authorization: `Bearer ${authToken}` }
        })
        const user = resultGet.data.data

        dispatch({ type: 'USER_UPDATE_SUCCESS', payload: user})

        swal({
            title: "Good job!",
            text: `${result.data.message}`,
            icon: "success"
        });
        // navigate('/login-admin')

    } catch (error) {
        console.log(error)
        swal({
            title: "Error!",
            text: `${error.response.data.message}`,
            icon: "error",
        })
        dispatch({ type: 'USER_UPDATE_ERROR' })
        // throw error
    }
}