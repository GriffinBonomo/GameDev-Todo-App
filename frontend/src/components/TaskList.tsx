import { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <strong>{task.title}</strong> — {task.status}
        </li>
      ))}
    </ul>
  );
}
