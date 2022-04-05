import React from "react";
import Item from "./item";
import style from "./Lista.module.scss";

function Lista() {
    const tarefas=[{
        tarefa:"React",
        tempo:"01:30:00"
    },{
        tarefa:"Typescript",
        tempo:"00:45:00"
    },{
        tarefa:"Front End",
        tempo:"01:00:00"
    }]

    return (
        <aside className={style.listaTarefas}>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}
    
export default Lista;