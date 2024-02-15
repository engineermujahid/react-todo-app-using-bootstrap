import React, { createContext, useContext, useState, useEffect, useReducer } from 'react'

const AuthContext = createContext()

const initialState = { isAuth: false, user: {} }

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGGED_IN":
            return { ...state, isAuth: true, user: action.payload.user }
        case "SET_LOGGED_OUT":
            return initialState
        default:
            return state
    }
}

export default function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isAppLoading, setIsAppLoading] = useState(true)

    useEffect(() => {
        const isLoggedin = localStorage.getItem("isLoggedIn");
        if (isLoggedin === "true") {
            const user = JSON.parse(localStorage.getItem("currentUser"))
            dispatch({ type: "SET_LOGGED_IN", payload: { user } })
        }
        setTimeout(() => {
            setIsAppLoading(false)
        }, 1000)
    }, [])

    return (
        <AuthContext.Provider value={{ ...state, dispatch, isAppLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)