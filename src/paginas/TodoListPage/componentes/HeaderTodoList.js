import { Plus } from "phosphor-react";
import "../../../styles/headerTodoList.css"

function HeaderTodoList() {
    return (
        <header className="headerPage">
            <div className="homepage">
                <span className="texto">Homepage Design</span>
            </div>

            <div className="adicionar">
                <Plus size={34} weight="fill"/>
            </div>
        </header>
    )
}

export default HeaderTodoList;
