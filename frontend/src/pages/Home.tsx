import { Task } from "../types/task";
import { TaskList } from "../components/TaskList";

const dummyTasks: Task[] = [
    {
    id: "1",
    title: "Implement task creation",
    description: "Allow users to create new tasks with a title and description.",
    status: "backlog",
    category: "coding",
    timeEstimate: 120,
    createdDate: Date.now()},
    {
    id: "2",
    title: "Design task card UI",
    description: "Create a visually appealing design for the task cards.",
    status: "in-progress",
    category: "ui",
    timeEstimate: 90,
    createdDate: Date.now() - 86400000},
    {
    id: "3",
    title: "Implement task filtering",
    description: "Allow users to filter tasks by status or category.",
    status: "backlog",
    category: "coding",
    timeEstimate: 150,
    createdDate: Date.now() - 86400000},
];


export function Home() {
    return (
        <div>
            <h1>Gamedev To-Do List</h1>
            <TaskList tasks={dummyTasks} />
        </div>
    )
}