import { CaretDoubleLeft, Plus } from "phosphor-react";
import "../../../styles/headerTodoList.css"

function HeaderTodoList(
    {
        title,
        AbrirCriarCaixinha,
        mostrarCaixinha
    }
) {
    return (
        <header className="headerPage">
            <div className="homepage">
                <span className="texto">{title}</span>
            </div>

            <div className="adicionar" onClick={() => AbrirCriarCaixinha(mostrarCaixinha)}>
            {!mostrarCaixinha && <Plus size={34} weight="fill" />}
            {mostrarCaixinha && <CaretDoubleLeft size={34} />}
            </div>

        </header>
    )
}

export default HeaderTodoList;
