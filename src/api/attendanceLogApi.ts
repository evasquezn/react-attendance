import { IAttendanceLogAPI } from "./interfaces"
import { IAttendanceLogEntry } from "models";
import { tokenAxios } from "utils";

export class AttendanceLogAPI implements IAttendanceLogAPI {
    
    private BaseUrl: string;

    constructor(baseUrl: string) {
        this.BaseUrl = baseUrl;
    }

    async getAttendanceLogs(studentIds: string[], startDate: Date, endDate: Date): Promise<IAttendanceLogEntry[]> {

        //TODO: define how the IDs are passed
        
        const resp = await tokenAxios.get<IAttendanceLogEntry[]>(this.BaseUrl + "getattendancelogreport");
        return resp.data;
    }
}