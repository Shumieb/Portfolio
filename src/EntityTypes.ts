export interface ProjectType {
    id: number,
    name: string,
    summary: string,
    description: string,
    completed: boolean,
    startDate: string,
    completedDate?: string,
    techStack: string,
    likes: number,
    imgUrl?: string,
    type: "frontend" | "backend" | "fullstack"
}