import { IStudentAPI } from "../interfaces"
import { IStudentData, IStudent } from "models";

export class StudentAPI implements IStudentAPI {
    constructor(baseUrl: string) { }

    getStudents(page?: number, pageSize?: number): Promise<IStudentData> {
        const data: IStudent[] = [
            {
                id: "12345661",
                name: "Student, Test01"
            },
            {
                id: "12345662",
                name: "Student, Test02"
            },
            {
                id: "12345663",
                name: "Student, Test03"
            },
            {
                id: "12345664",
                name: "Student, Test04"
            },
            {
                id: "12345665",
                name: "Student, Test05"
            },
            {
                id: "12345666",
                name: "Student, Test06"
            },
            {
                id: "12345667",
                name: "Student, Test07"
            },
            {
                id: "12345668",
                name: "Student, Test08"
            },
            {
                id: "12345669",
                name: "Student, Test09"
            },
            {
                id: "12345670",
                name: "Student, Test10"
            },
            {
                id: "12345671",
                name: "Student, Test11"
            },
            {
                id: "12345672",
                name: "Student, Test12"
            },
            {
                id: "12345673",
                name: "Student, Test13"
            }
        ];

        return new Promise<IStudentData>((resolve, _) => {
            page = page || 0;
            pageSize = pageSize || 10;
            
            const startIndex = page * pageSize;
            const endIndex = startIndex + pageSize;
            const mappedData = data.slice(startIndex, endIndex);

            const retVal: IStudentData = {
                page,
                pageSize,
                rowCount: data.length,
                rows: mappedData
            }

            setInterval(() => resolve(retVal), 1000);
        });
    }
}