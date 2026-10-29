import TaskItem from '../TaskItem/TaskItem'
import type { TaskListProps } from '../../types'

function TaskList({ tasks, onStatusChange, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return <p>No tasks yet.</p>
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TaskList
