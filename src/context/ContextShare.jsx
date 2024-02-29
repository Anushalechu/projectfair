import React, { createContext, useState } from 'react'

export const addProjectResponseContext = createContext()

function ContextShare({children}) {
    //children is a predefined props used to share data between components
    // create a state that need to be shared
    const [addProjectResponse, setAddProjectResponse] = useState({})
    const[editProjectResponse,setEditProjectResponse]= useState({})
    return (
        <>
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                <editProjectResponseContext.Provider value={{editProjectResponse,setAddProjectResponse}}>
                {children}
                </editProjectResponseContext.Provider>
            </addProjectResponseContext.Provider>
        </>
    )
}

export default ContextShare