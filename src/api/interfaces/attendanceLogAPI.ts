import { IAttendanceLogEntry } from "models";

export interface IAttendanceLogAPI {
    getAttendanceLogs(studentIds: string[], startDate: Date, endDate: Date): Promise<IAttendanceLogEntry[]>;
}
