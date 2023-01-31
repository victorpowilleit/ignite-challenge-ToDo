import style from './style.module.css'

interface InfoProps {
    totalTasks: number
    completedTasks: number
}

export function Info({totalTasks, completedTasks}: InfoProps) {
    return (
        <div className={style.info}>
            <div className={style.allTasks}>
                <span>Tarefas criadas</span>
                <div>{totalTasks}</div>
            </div>
            <div className={style.completedTasks}>
                <span>Concluídas</span>
                <div>{`${completedTasks} de ${totalTasks}`}</div>
            </div>
        </div>
    )
}