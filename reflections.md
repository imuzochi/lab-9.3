1. I used each task's id as the key when rendering the task list. Since every task has its own ID, React can tell which task changed when the list updates, such as after changing a status or deleting a task.

2. I wanted the status and priority filters to work together, rather than having one replace the other. The app checks each task against both selected filters and only shows tasks that match both. Leaving a filter set to “All” means that filter does not narrow the list.

3. When a task's status changes, I use its ID to find it in the task array and create an updated copy with the new status. The other tasks are left unchanged. This lets React update the display without changing the existing task object directly.

4. One thing I had to consider was what to show when there are no tasks to display. The task list shows a message instead of an empty list. I also used the task's status to choose its visual style, and made sure “in-progress” is shown as “In progress” so it's easier to read.
