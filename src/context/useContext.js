import { createContext, useContext, useState } from 'react'

// use the context ro other componet SO we are exporting it
export const userContext = createContext({
    // creating the context
    user: null,
    logIn: () => { },
    logOut: () => { },

})

//initilze the basic user OR DEFAULT USER
const USER = { name: "kumar", isGuestUser: true }

export function UserContextProvider({ children }) {
    // set the default user
    const [user, setUser] = useState(USER);

    // login log out defenction
    function logIn(username) {
        setUser({
            name: username, isGuestUser: false
        })
    }

    function logOut() {
        setUser(USER)
    }

    return (
        // pass the value
        <userContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </userContext.Provider>
    )
}

// create a custom hooks for Accessing the data

export function useUserContext() {
    // pass through the context
    const { user, logIn, logOut } = useContext(userContext);

    return { user, logIn, logOut };

}



