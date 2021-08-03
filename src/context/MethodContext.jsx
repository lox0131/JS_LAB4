import { useContext, useEffect, useState, createContext } from 'react'
import { getMethods } from "../services/api";

const MethodsContext = createContext();

export const MethodsProvider = ({ children }) => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getMethods()
      .then((res) => {
        setMethods(res)
      })
  }, [])

  const setMeth = (meth) => {
    setMeth(meth)
  }

  return (
    <MethodsContext.Provider value={{ methods, setMeth }}>
      {children}
    </MethodsContext.Provider>
  )
}

export const Method = () => {
  const context = useContext(MethodsContext)
  return context
}