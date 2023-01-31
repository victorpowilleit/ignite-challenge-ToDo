import style from './style.module.css'
import Clipboard from '../../assets/Clipboard.svg'
export function EmptyTaskbar(){
    return(
        <div className={style.empty_taskbar}>
            <img src={Clipboard} alt=""/>
            <span className="title">Você ainda não tem tarefas cadastradas</span>
            <span className="subtitle">Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}