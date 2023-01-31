import {useEffect, useState} from "react";

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

    function memorizeTasks(memotasks:Task[]){
        window.localStorage.setItem('tasks', JSON.stringify(memotasks))
    }


    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(()=>{
        if(window.localStorage.getItem('tasks')) {
            const loadedTasks = JSON.parse(window.localStorage.getItem('tasks')!)
            setTasks(loadedTasks)
        }
    },[])

    function handleCreateTask(description: string) {
        event!.preventDefault()
        if (description.length>0){
            const id = (new Date()).getTime() // unique identifier
            const completed = false // initial completed state
            setTasks(prevState => {
                const newState = [...prevState, {id, description, completed}]
                memorizeTasks(newState)
                return newState
            })
        }else{
            alert("Você deve dar um nome ou descrição à tarefa")
        }
    }

    function handleDeleteTask(id: number) {
        const newTaskList = tasks.filter(task => task.id !== id)
        memorizeTasks(newTaskList)
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
            memorizeTasks(newTaskList)
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