import { useEffect } from "react"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, TodoList } from "./paginas"

export function Router() {

    const [autenticado, setAutenticado] = useState(false)
    const [usuario, setUsuario] = useState()

    useEffect(() => {
        const isAutenticado = localStorage.getItem("autenticado")
        const usuario = localStorage.getItem("usuario")

        if (isAutenticado === "true") {
            setAutenticado(true)
            setUsuario(JSON.parse(usuario))
        } else {
            setAutenticado(false)
        }

    }, [])

    return (
        <BrowserRouter>
            <Routes>
                {!autenticado && (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<Login />} />
                    </>
                )}

                {autenticado && (
                    <>
                        <Route path="/" element={<TodoList usuario={usuario} />} />
                        <Route path="*" element={<TodoList usuario={usuario} />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )
}
