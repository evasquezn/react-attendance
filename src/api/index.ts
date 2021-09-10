// The api module is aliased in the webpack config to provide the mock API when serving the page
//@ts-ignore
import { AttendanceLogAPI } from "./attendanceLogApi"
//@ts-ignore
import { StudentAPI } from "./studentApi";

const attendanceLogAPIBuilder = { 
    configure: (baseUrl: string) => {
        return new AttendanceLogAPI(baseUrl);
    } 
};

export { attendanceLogAPIBuilder as AttendanceLogAPI };

const studentAPIBuilder = { 
    configure: (baseUrl: string) => {
        return new StudentAPI(baseUrl);
    } 
};

export { studentAPIBuilder as StudentAPI };