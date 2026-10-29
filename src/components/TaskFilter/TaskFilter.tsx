import { useState } from 'react'
import type { TaskFilterProps, TaskStatus } from '../../types'

type TaskPriority = 'low' | 'medium' | 'high'

function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<TaskStatus | ''>('')
  const [priority, setPriority] = useState<TaskPriority | ''>('')

  function updateFilters(
    nextStatus: TaskStatus | '',
    nextPriority: TaskPriority | '',
  ) {
    onFilterChange({
      ...(nextStatus && { status: nextStatus }),
      ...(nextPriority && { priority: nextPriority }),
    })
  }

  return (
    <div>
      <label>
        Filter by status
        <select
          value={status}
          onChange={(event) => {
            const nextStatus = event.target.value as TaskStatus | ''
            setStatus(nextStatus)
            updateFilters(nextStatus, priority)
          }}
        >
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In progress</option>
          <option value="completed">Completed</option>
        </select>
      </label>

      <label>
        Filter by priority
        <select
          value={priority}
          onChange={(event) => {
            const nextPriority = event.target.value as TaskPriority | ''
            setPriority(nextPriority)
            updateFilters(status, nextPriority)
          }}
        >
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
