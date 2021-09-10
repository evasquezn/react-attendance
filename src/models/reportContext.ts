import { IStudent } from ".";

export interface IReportContext {
    isLoading: boolean,
    page: number,
    pageSize: number,
    selectedDate: Date,
    studentData: IStudent[]
}
