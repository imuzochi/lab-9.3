import { useState, type ChangeEvent } from 'react'
import type { TaskFilterProps, TaskStatus } from '../../types'

type TaskPriority = 'low' | 'medium' | 'high'

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | ''>('')
  const [priority, setPriority] = useState<TaskPriority | ''>('')

  function handleStatusChange(event: ChangeEvent<HTMLSelectElement>) {
    const newStatus = event.target.value as TaskStatus | ''
    setStatus(newStatus)

    const filters: { status?: TaskStatus; priority?: TaskPriority } = {}
    if (newStatus) filters.status = newStatus
    if (priority) filters.priority = priority
    onFilterChange(filters)
  }

  function handlePriorityChange(event: ChangeEvent<HTMLSelectElement>) {
    const newPriority = event.target.value as TaskPriority | ''
    setPriority(newPriority)

    const filters: { status?: TaskStatus; priority?: TaskPriority } = {}
    if (status) filters.status = status
    if (newPriority) filters.priority = newPriority
    onFilterChange(filters)
  }

  return (
    <div>
      <label>
        Filter by status
        <select value={status} onChange={handleStatusChange}>
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Filter by priority
        <select value={priority} onChange={handlePriorityChange}>
          <option value="">All priorities</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
    </div>
  )
}

export default TaskFilter
