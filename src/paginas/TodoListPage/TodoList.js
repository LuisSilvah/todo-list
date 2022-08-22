import "../../styles/todoList.css"
import { Link } from "react-router-dom"
import Header from "../../componentes/Header"

export function TodoList() {
    return (
        <>
            <Header />

            <h1>Todo List Pagina</h1>

            <Link to="/login">Login</Link>
            
        </>
    )
}

