import {Info} from "../Info";
import {Task} from '../Task';
import {EmptyTaskbar} from "../EmptyTaskbar";

interface TaskProps {
    tasks: {
        id: number
        description: string
        completed: boolean
    }[],
    onDeleteTask: (id: number) => void
    onCompleteToggle: (id: number) => void
}

export function TaskList({tasks, onDeleteTask, onCompleteToggle}: TaskProps) {
    const totalTasks = tasks.length
    let completedTasks = (tasks.filter(task => task.completed)).length
    return (
        <>
            <Info completedTasks={completedTasks} totalTasks={totalTasks}/>
            {tasks.length===0&&<EmptyTaskbar/>}
            {tasks.map(task => {
                    return (
                        <Task
                            key={task.id}
                            id={task.id}
                            checked={task.completed}
                            description={task.description}
                            onDeleteTask={onDeleteTask}
                            onCompleteToggle={onCompleteToggle}
                        />
                    )
                }
            )
            }
        </>
    )
}