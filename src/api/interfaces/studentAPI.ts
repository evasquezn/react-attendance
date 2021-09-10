import { IStudentData } from "models";

export interface IStudentAPI {
    getStudents(page?: number, pageSize?: number): Promise<IStudentData>;
}
