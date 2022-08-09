import { createContext, useContext, useState } from "react";


const TareaGlobal = createContext({})

export const useGlobalContext = () => useContext(TareaGlobal)/* USO EL CONTEXTO TareaGlobal */

export const TareaProvider = ({children})=>{

    const [tarea, setTarea] = useState([])
    const [lista, setLista] = useState([])

    const handleSubmit = e =>{
        e.preventDefault()
        agregarTarea(tarea)
        setTarea("")
    }

    const handleChange = (e) => setTarea(e.target.value)

    const agregarTarea = addItem =>{
        setLista([...lista, addItem])
    }

    const borrar = ((e)=> {
		setLista([]);
	});
    return<TareaGlobal.Provider value={{
        tarea,
        lista,
        borrar,
        handleChange,
        handleSubmit
    }}>
        {children}
    </TareaGlobal.Provider>
}