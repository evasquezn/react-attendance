import { ICourseActivityEntry } from ".";

export interface ICourseData {
    id: string,
    name: string,
    activityEntries: ICourseActivityEntry[]
}
