import { IActivity } from ".";

export interface ICourseActivityEntry {
    duration: number, 
    date: Date,
    activities: IActivity[]
}
