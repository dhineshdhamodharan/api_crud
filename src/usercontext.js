import React from 'react';
import { useState } from 'react/cjs/react.development';

let UserContext=React.createContext();

export default UserContext;

export const UserProvider=({children})=>{
    const [userList,setUserList]=useState([])
    return <UserContext.Provider value={{userList,setUserList}}>
        {children}
    </UserContext.Provider>
}


