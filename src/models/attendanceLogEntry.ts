import { ICourseData, ITimeEntry } from ".";

export interface IAttendanceLogEntry {
    id: string,
    dailyActiveTime: ITimeEntry[]
    dailyIdleTime: ITimeEntry[]
    courseData: ICourseData[]
}
