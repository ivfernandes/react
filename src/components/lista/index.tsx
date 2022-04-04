import React from "react";

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
        <aside>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
    
export default Lista;