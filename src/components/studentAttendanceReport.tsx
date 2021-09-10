import React, {
  ReactElement,
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect
} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { IReportContext, IStudentAttendanceReportProps, IStudent } from "../models";
import { ReportHeader, ReportGrid, ProgressSpinner } from ".";
import { StudentAPI } from "ApiModule"
import { getPreviousSunday } from "../utils";

//#region Styling

const useStyles = makeStyles({
  content: {
    maxHeight: 1000,
    maxWidth: 1200,
    position: "relative"
  },
});

//#endregion

//#region Context Setup

const initialState : IReportContext = {
  isLoading: false,
  page: 0,
  pageSize: 10,
  selectedDate: new Date(),
  studentData: []
}

interface IReportState {
  reportContext: IReportContext;
  setReportContext: React.Dispatch<React.SetStateAction<IReportContext>>;
}

const defaultReportState: IReportState = {
  reportContext: initialState,
  setReportContext: (): void => {console.warn('no context provider')},
};

export const ReportContext = createContext<IReportState>(defaultReportState);

export const useReportContext = (): IReportState => {
  return useContext(ReportContext);
};

//#endregion

export const StudentAttendanceReport = (props: IStudentAttendanceReportProps): ReactElement => {
  const classes = useStyles();

  //#region Context Hooks and Methods
  
  const [reportContext, setReportContext] = useState<IReportContext>({
    ...initialState,
    pageSize: props.defaultPageSize || 10,
    selectedDate: getPreviousSunday(!!props.defaultDate ? new Date(props.defaultDate) : new Date())
  });

  const contextValue = useMemo(() => {
    return { reportContext, setReportContext };
  }, [reportContext, setReportContext]);

  const { selectedDate, studentData, isLoading, page, pageSize } = reportContext;
  const setIsLoading = (isLoading: boolean) => setReportContext(current => {return {...current, isLoading }});
  const setStudentData = (studentData: IStudent[]) => setReportContext(current => {return {...current, studentData }});
  const beforeLoad = () => setIsLoading(true);
  const afterLoad = () => setIsLoading(false);

  //#endregion

  //#region Student Data

  const studentApi = StudentAPI.configure(props.studentAPIBaseUrl);

  const onError = (message: string) => {
    setIsLoading(false);
    if (!!props.onError) {
      props.onError(message);
    }
  };
  
  const load = () => {
    beforeLoad();

    studentApi.getStudents(page, pageSize).then((data: any) => {
      setStudentData(data.rows);
      // afterLoad();
    }).catch(() => {
      const errorMessage = "Unable to load student data.";
      onError(errorMessage);
    }); 
  }
  
  // If the page or page size changes reload the data.
  useEffect(() => {
    load();
  }, [page, pageSize]);
  
  //#endregion

  return (
    <ReportContext.Provider value={contextValue}>
        <Container>
          <Box className={classes.content}>
            <ReportHeader {...props} />
            <ReportGrid 
                apiUrl={props.attendanceReportAPIBaseUrl}
                studentData={studentData}
                selectedDate={selectedDate}
                beforeLoad={beforeLoad}
                afterLoad={afterLoad}
                onError={onError}
            />
            <ProgressSpinner show={isLoading}/>
          </Box>
        </Container>
    </ReportContext.Provider>
  );
};
  
export default StudentAttendanceReport;