import {useState} from "react";

import {Header} from "../../components/Header";
import {CreateTask} from "../../components/CreateTask";
import {TaskList} from "../../components/TaskList";

import style from './style.module.css'

interface Task {
    id: number;
    description: string;
    completed: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Task[]>([])

    function handleCreateTask(description: string) {
        event!.preventDefault()
        if (description.length>0){
            const id = (new Date()).getTime() // unique identifier
            const completed = false // initial completed state
            setTasks(prevState => [...prevState, {id, description, completed}])
        }else{
            alert("Você deve dar um nome ou descrição à tarefa")
        }
    }

    function handleDeleteTask(id: number) {
        const newTaskList = tasks.filter(task => task.id !== id)
        setTasks(newTaskList)
    }

    function handleToggleCompleteTask(id: number) {
        const newTaskList: Task[] = []
        tasks.map(task => {
            if (task.id === id) {
                newTaskList.push({
                    id: task.id,
                    description: task.description,
                    completed: !task.completed
                })
            } else {
                newTaskList.push(task)
            }
            setTasks(newTaskList)
        })
    }

    return (
        <>
            <Header/>
            <div className={style.container}>
                <CreateTask createNewTask={handleCreateTask}/>
                <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onCompleteToggle={handleToggleCompleteTask}/>
            </div>
        </>
    )
}