import style from './style.module.css'
import {HiOutlineTrash} from "react-icons/hi";
import {BsCheckCircleFill, BsCircle} from "react-icons/bs";

interface TaskProps {
    id: number;
    checked: boolean
    description: string
    onDeleteTask: (id: number) => void
    onCompleteToggle: (id: number) => void
}

export function Task({id, checked, description, onDeleteTask, onCompleteToggle}: TaskProps) {
    return (
        <div className={style.task}>
            <div onClick={()=>onCompleteToggle(id)}>
            {checked ? <BsCheckCircleFill className={style.checkbox_true}/> :
                <BsCircle className={style.checkbox_false}/>}
            </div>
            <span
                className={checked ? style.text_checked_true : undefined}
                onClick={()=>onCompleteToggle(id)}
            >
                {description}
            </span>
            <div onClick={()=>onDeleteTask(id)}>
                <HiOutlineTrash className={style.delete}/>
            </div>
        </div>
    )
}