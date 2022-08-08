import { createContext, useContext } from "react";


const TareaGlobal = createContext({
    tarea:""
})

export const useGlobalContext = () => useContext(TareaGlobal)/* USO EL CONTEXTO TareaGlobal */

export const TareaProvider = ({children})=>{
    return<TareaGlobal.Provider value={{tarea:""}}>
        {children}
    </TareaGlobal.Provider>
}