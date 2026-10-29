import type { Task, TaskStatus } from '../../types'

interface TaskItemProps {
  task: Task
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void
  onDelete: (taskId: string) => void
}

const taskStatuses: TaskStatus[] = ['pending', 'in-progress', 'completed']

function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <li className={`task-card task-${task.status}`}>
      <div className="task-card-heading">
        <h2>{task.title}</h2>
        <span className={`task-priority priority-${task.priority}`}>
          {task.priority} priority
        </span>
      </div>
      <p className="task-description">{task.description}</p>
      <p className="task-due-date">
        <span aria-hidden="true">Due:</span> {task.dueDate}
      </p>
      <div className="task-actions">
        <span className={`task-status status-${task.status}`}>
          {task.status === 'in-progress' ? 'In progress' : task.status}
        </span>
        <label className="task-status-control">
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
        <button
          className="task-delete"
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
