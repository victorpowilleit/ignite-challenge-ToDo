import {useState} from "react";
import {FiPlusCircle} from "react-icons/fi";
import style from './style.module.css'

interface CreateTaskProps {
    createNewTask: (description: string) => void
}

type Description = string

export function CreateTask({createNewTask}: CreateTaskProps) {
    const [description, setDescription] = useState<Description>("")

    function onDescriptionChange(newDescription: string) {
        setDescription(newDescription)
    }

    return (
        <>
            <form
                className={style.form}
                onSubmit={() => {
                    createNewTask(description)
                    setDescription("")
                }}>
                <input
                    name="description"
                    className={style.inputText}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    onChange={e => onDescriptionChange(e.target.value)}
                    value={description}
                />
                <button className={style.button} type="submit">
                    Criar
                    <FiPlusCircle/>
                </button>
            </form>
        </>
    )
}