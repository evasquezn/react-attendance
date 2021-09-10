import { IStudentAPI } from "./interfaces"
import { IStudentData } from "models";
import { tokenAxios } from "utils";


export class StudentAPI implements IStudentAPI {
    
    private BaseUrl: string;

    constructor(baseUrl: string) {
        this.BaseUrl = baseUrl;
    }

    async getStudents(page?: number, pageSize?: number): Promise<IStudentData> {
        let url = this.BaseUrl + "getattendancelogstudents";
        
        if(!!page && !!pageSize) {
            url+="?page=" + page + "&pageSize=" + pageSize;
        }

        const resp = await tokenAxios.get<IStudentData>(url);
        return resp.data;
    }
}