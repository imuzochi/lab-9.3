import { useState } from 'react'
import TaskFilter from './components/TaskFilter/TaskFilter'
import TaskList from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'
import './App.css'

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Review class notes',
    description: 'Go over the notes from this week.',
    status: 'pending',
    priority: 'medium',
    dueDate: '2026-10-30',
  },
  {
    id: '2',
    title: 'Finish assignment',
    description: 'Complete and submit the task manager assignment.',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2026-10-31',
  },
  {
    id: '3',
    title: 'Read React documentation',
    description: 'Review the React components guide.',
    status: 'completed',
    priority: 'low',
    dueDate: '2026-11-02',
  },
]

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filters, setFilters] = useState<{
    status?: TaskStatus
    priority?: Task['priority']
  }>({})

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = !filters.status || task.status === filters.status
    const matchesPriority =
      !filters.priority || task.priority === filters.priority

    return matchesStatus && matchesPriority
  })

  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    )
  }

  function handleDelete(taskId: string) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  return (
    <main>
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={setFilters} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </main>
  )
}

export default App
