import type { Task, TaskStatus } from '../../types'

interface TaskItemProps {
  task: Task
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void
  onDelete: (taskId: string) => void
}

const taskStatuses: TaskStatus[] = ['pending', 'in-progress', 'completed']

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due date: {task.dueDate}</p>
      <label>
        Status
        <select
          value={task.status}
          onChange={(event) => {
            const newStatus = taskStatuses.find(
              (status) => status === event.target.value,
            )
            if (newStatus) onStatusChange(task.id, newStatus)
          }}
        >
          {taskStatuses.map((status) => (
            <option key={status} value={status}>
              {status === 'in-progress'
                ? 'In progress'
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </label>
      <button type="button" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  )
}

export default TaskItem
