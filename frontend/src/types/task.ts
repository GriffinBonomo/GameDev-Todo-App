export type TaskId = string;

export type TaskStatus = "backlog" | "in-progress" | "completed" | "cancelled";

export type TaskCategory = "coding" | "art" | "tools" | "ui";

export interface Task {
    id: TaskId;
    title: string;
    description: string;
    status: TaskStatus;
    category: TaskCategory;

    timeEstimate?: number;
    dependencies?: TaskId[];

    createdDate: number
    completedDate?: number;
}