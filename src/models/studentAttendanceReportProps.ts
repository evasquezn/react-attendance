export interface IStudentAttendanceReportProps {
    attendanceReportAPIBaseUrl: string,
    studentAPIBaseUrl: string,
    reportTitle: string,
    defaultPageSize?: number,
    defaultDate? : string,
    onError?: Function
}