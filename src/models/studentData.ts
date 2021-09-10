import { IStudent }  from ".";

export interface IStudentData {
    rows: IStudent[],
    page: number,
    pageSize: number,
    rowCount: number
}