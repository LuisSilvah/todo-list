import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login, TodoList } from "./paginas"

export function Router() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TodoList />}/>
                    <Route path="/login" element={<Login />}/>
                </Routes>
        </BrowserRouter>
    )
}
