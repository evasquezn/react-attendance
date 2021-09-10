import React, { useEffect, useState } from "react";
import clsx from "clsx";
import moment from "moment";
import { makeStyles, createStyles, lighten, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell, { TableCellProps } from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Toolbar from "@material-ui/core/Toolbar";
import { IStudent, IAttendanceLogEntry, ICourseData, ICourseActivityEntry, IActivity, ITimeEntry } from "models";
import { AttendanceLogAPI } from "ApiModule"
import { addDays } from "../utils";
import "moment-duration-format";
import { Padding } from "@material-ui/core/TableCell";
import ActivityModal from './activitiesModal';
import { RouterTwoTone } from "@material-ui/icons";


//#region Interfaces

export interface IReportGridProps {
  apiUrl: string;
  studentData?: IStudent[];
  selectedDate?: Date;
  beforeLoad?: Function;
  afterLoad?: Function;
  onError?: Function;
};

interface IReportDates {
  sunday: Date | null;
  monday: Date | null;
  tuesday: Date | null;
  wednesday: Date | null;
  thursday: Date | null;
  friday: Date | null;
  saturday: Date | null;
};

interface IColumn {
  id: string;
  label: string;
  subLabel?: string;
  alignment?: "left" | "right" | "inherit" | "center" | "justify";
  width?: string | number;
  padding?: Padding;
}

interface ICourseRowActivityEntry {
  time: string,
  activities: IActivity[]
}

interface ICourseRow {
  courseId: string;
  courseName: string;
  totalActivityTime: string;

  sundayActivity: ICourseRowActivityEntry;
  mondayActivity: ICourseRowActivityEntry;
  tuesdayActivity: ICourseRowActivityEntry;
  wednesdayActivity: ICourseRowActivityEntry;
  thursdayActivity: ICourseRowActivityEntry;
  fridayActivity: ICourseRowActivityEntry;
  saturdayActivity: ICourseRowActivityEntry;
};

interface IDataRow {
  id: string;
  studentName: string;

  sundayActivityTime: string;
  mondayActivityTime: string;
  tuesdayActivityTime: string;
  wednesdayActivityTime: string;
  thursdayActivityTime: string;
  fridayActivityTime: string;
  saturdayActivityTime: string;

  totalActivityTime: string;
  courseRows: ICourseRow[];
  isOpen: boolean;
};

interface IGridCellProps extends TableCellProps {
  id?: string
  columns?: IColumn[]
}

interface IGridRowProps {
  key: string;
  index: number;
  row: IDataRow;
  columns: IColumn[];
  onSelected: Function;
  isSelected: Function;
  isOpen: boolean;
}


interface IRenderSubTableProps {
  show: boolean;
  rows: ICourseRow[];
  columns: IColumn[];
}

interface IEnhancedTableToolbarProps {
  numSelected: number;
}

interface IEnhancedTableProps {
  columns: IColumn[],
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onOpenAllClick: () => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

//#endregion

//#region Styling

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    }
  }),
);

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === "light"
        ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
        : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
    title: {
      flex: "1 1 100%",
    },
  }),
);

const useRowStyles = makeStyles({
  headerSubText: {
    fontSize: "smaller"
  }
});

//#endregion

//#region Methods

const formatDateForHeader = (date: Date | null | undefined): string => {
  return !!date ? moment(date).format("MM/DD") : "";
};

const formatActivityTime = (duration: number | undefined, isWeekend?: boolean): string => {
  return !!duration && duration > 0 ? moment.duration(duration, 'seconds').format("hh:mm:ss", { trim: false }) : !!isWeekend ? "" : "No Work";
};

const formatActivitiesText = (courseRowActivity: ICourseRowActivityEntry): string => {
  const text = courseRowActivity.activities.length == 1 ? " Activity" : " Activities";
  return courseRowActivity.activities.length > 0 ? courseRowActivity.activities.length + text : "";
};

const triggerHandler = (handler: Function | undefined, response: any, defaultBehavior?: Function) => {
  if (!!handler) {
    handler(response);
  } else if (!!defaultBehavior) {
    defaultBehavior();
  }
};

const mapCourseActivityInfo = (activityEntry?: ICourseActivityEntry, isWeekend?: boolean): ICourseRowActivityEntry => {
  return {
    time: formatActivityTime(activityEntry?.duration, isWeekend),
    activities: activityEntry?.activities || []
  };
};

const mapCourseRows = (courseData: ICourseData[], dates: IReportDates): ICourseRow[] => {
  return courseData.map((courseEntry: ICourseData) => {
    const val: ICourseRow = {
      courseId: courseEntry.id,
      courseName: courseEntry.name,
      sundayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.sunday!)), true),
      mondayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.monday!))),
      tuesdayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.tuesday!))),
      wednesdayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.wednesday!))),
      thursdayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.thursday!))),
      fridayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.friday!))),
      saturdayActivity: mapCourseActivityInfo(courseEntry.activityEntries.find(x => moment(x.date).isSame(dates.saturday!)), true),
      totalActivityTime: formatActivityTime(courseEntry.activityEntries.map(x => x.duration).reduce((a, b) => a + b))
    };
    return val;
  });
};

const getActivityTime = (entries: ITimeEntry[], date: Date | null): number => {
  if (!date) {
    return 0
  }

  const entry = entries.find(x => moment(x.date).isSame(date!));
  return entry?.duration || 0;
}

const mapDataRows = (studentData: IStudent[], reportData: IAttendanceLogEntry[], dates: IReportDates): IDataRow[] => {
  if (!studentData || !reportData || !dates?.sunday) {
    return [];
  }

  let data = reportData.map((entry: IAttendanceLogEntry) => {
    const row: IDataRow = {
      id: entry.id,
      studentName: studentData.find(x => x.id === entry.id)?.name || "",
      totalActivityTime: formatActivityTime(entry.dailyActiveTime.map(x => x.duration).reduce((a, b) => a + b)),
      sundayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.sunday), true),
      mondayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.monday)),
      tuesdayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.tuesday)),
      wednesdayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.wednesday)),
      thursdayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.thursday)),
      fridayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.friday)),
      saturdayActivityTime: formatActivityTime(getActivityTime(entry.dailyActiveTime, dates.saturday), true),
      courseRows: mapCourseRows(entry.courseData, dates),
      isOpen: false
    }
    return row;
  });

  return data;
};

//#endregion

// #region Table Components

const GridToolbar = (props: IEnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  if (numSelected > 0) {
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      </Toolbar>
    );
  } else {
    return <div></div>
  }
};

function GridHeader(props: IEnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount, columns, onOpenAllClick } = props;
  const [open, setOpen] = React.useState(false);
  const setOpenState = () => {
    setOpen(!open)
    onOpenAllClick()
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell width={20} padding="none" align="center" >
          <IconButton aria-label="expand row" size="small" onClick={() => { setOpenState() }}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell width={30} padding="none" align="center" >
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all students" }}
          />
        </TableCell>
        {columns.map((column: IColumn) => (
          <TableCell
            key={column.id}
            align={column.alignment}
            padding={column.padding}
            width={column.width}
          >
            <Typography variant="h6">{column.label}</Typography>
            <Typography variant="caption">{!!column.subLabel ? column.subLabel : " "}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const GridCell = function (props: IGridCellProps) {
  const { id, columns } = props;
  const columnDef = columns?.find(x => x.id == id);
  return (
    <React.Fragment>
      <TableCell
        {...props}
        padding={props.padding || columnDef?.padding}
        width={props.width || columnDef?.width}
        align={props.align || columnDef?.alignment}
      >
        {props.children}
      </TableCell>
    </React.Fragment>
  );
};

const renderSubTable = (props: IRenderSubTableProps) => {
  const { show, rows, columns } = props
  const [isopen, setIsOpen] = useState(false);
  const [info, setInfo] = useState({studentName:'', course:'', date:'' });
  const openActivity = (row: ICourseRow)=>{
    setInfo({studentName:'', course: row.courseName, date: row.mondayActivity.time });
    setIsOpen(true);
    return undefined;
  }
  if (show) {
    return (
      <React.Fragment>
        <ActivityModal show={isopen} studentName={info?.studentName} course={info?.course} date={info?.date}/>
        { rows.map((row: ICourseRow) => (
          <TableRow key={row.courseId} >
            <GridCell width={30} padding="none" />
            <GridCell width={42} padding="none" />
            <GridCell id="studentName" columns={columns} />
            <GridCell id="courseName" columns={columns} >
              <Typography variant="body2" >{row.courseName}</Typography>
            </GridCell>
            <GridCell id="sundayActivity" columns={columns}>
              <Typography variant="body2" >{row.sundayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.sundayActivity)}</Typography>
            </GridCell>
            <GridCell id="mondayActivity" columns={columns} onClick={openActivity(row)}>
              <Typography variant="body2" >{row.mondayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.mondayActivity)}</Typography>
            </GridCell>
            <GridCell id="tuesdayActivity" columns={columns}>
              <Typography variant="body2" >{row.tuesdayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.tuesdayActivity)}</Typography>
            </GridCell>
            <GridCell id="wednesdayActivity" columns={columns} >
              <Typography variant="body2" >{row.wednesdayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.wednesdayActivity)}</Typography>
            </GridCell>
            <GridCell id="thursdayActivity" columns={columns}>
              <Typography variant="body2" >{row.thursdayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.thursdayActivity)}</Typography>
            </GridCell>
            <GridCell id="fridayActivity" columns={columns} >
              <Typography variant="body2" >{row.fridayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.fridayActivity)}</Typography>
            </GridCell>
            <GridCell id="saturdayActivity" columns={columns}>
              <Typography variant="body2" >{row.saturdayActivity.time}</Typography>
              <Typography variant="caption" >{formatActivitiesText(row.saturdayActivity)}</Typography>
            </GridCell>
            <GridCell id="totalActivity" columns={columns}  >
              <Typography variant="body2">{row.totalActivityTime}</Typography>
            </GridCell>
          </TableRow>
        ))}
      </React.Fragment>
    );
  }
}

function GridRow(props: IGridRowProps) {
  const { row, columns, onSelected, isSelected, index, isOpen } = props;
  const [open, setOpen] = React.useState(isOpen);
  const classes = useRowStyles();
  const labelId = "enhanced-table-checkbox-${index}";
  const isItemSelected = isSelected(row.id);

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  return (
    <React.Fragment>
      <TableRow
        hover
        tabIndex={-1}
        key={row.id}
        selected={isItemSelected}
      >
        <TableCell width={20} padding="none" align="center" >
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
          </IconButton>
        </TableCell>
        <TableCell width={30} padding="none" align="center"  >
          <Checkbox
            role="checkbox"
            onClick={(event) => onSelected(event, row.id)}
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </TableCell>
        <GridCell id="studentName" columns={columns} >
          <Typography variant="body1" >{row.studentName}</Typography>
        </GridCell>
        <GridCell id="courseName" columns={columns} >
          <Typography variant="body1" >{open ? "Total Daily Active Time:" : ""}</Typography>
        </GridCell>
        <GridCell id="sundayActivity" columns={columns}>
          <Typography variant="body2" >{row.sundayActivityTime}</Typography>
        </GridCell>
        <GridCell id="mondayActivity" columns={columns} >
          <Typography variant="body2" >{row.mondayActivityTime}</Typography>
        </GridCell>
        <GridCell id="tuesdayActivity" columns={columns}>
          <Typography variant="body2" >{row.tuesdayActivityTime}</Typography>
        </GridCell>
        <GridCell id="wednesdayActivity" columns={columns} >
          <Typography variant="body2" >{row.wednesdayActivityTime}</Typography>
        </GridCell>
        <GridCell id="thursdayActivity" columns={columns}>
          <Typography variant="body2" >{row.thursdayActivityTime}</Typography>
        </GridCell>
        <GridCell id="fridayActivity" columns={columns} >
          <Typography variant="body2" >{row.fridayActivityTime}</Typography>
        </GridCell>
        <GridCell id="saturdayActivity" columns={columns}>
          <Typography variant="body2" >{row.saturdayActivityTime}</Typography>
        </GridCell>
        <GridCell id="totalActivity" columns={columns}  >
          <Typography variant="body2">{row.totalActivityTime}</Typography>
        </GridCell>
      </TableRow>
      {renderSubTable({ show: open, rows: row.courseRows, columns })}
    </React.Fragment>
  );
}

//#endregion

export const ReportGrid = function (props: IReportGridProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [dataRows, setDataRows] = useState<IDataRow[]>([]);

  const { studentData, selectedDate } = props;
  const classes = useStyles();

  const dates: IReportDates = {
    sunday: !!selectedDate ? selectedDate : null,
    monday: !!selectedDate ? addDays(selectedDate, 1) : null,
    tuesday: !!selectedDate ? addDays(selectedDate, 2) : null,
    wednesday: !!selectedDate ? addDays(selectedDate, 3) : null,
    thursday: !!selectedDate ? addDays(selectedDate, 4) : null,
    friday: !!selectedDate ? addDays(selectedDate, 5) : null,
    saturday: !!selectedDate ? addDays(selectedDate, 6) : null
  }

  const columns: IColumn[] = [
    { id: "studentName", padding: "default", label: "Student", width: 140 },
    { id: "courseName", padding: "default", label: "", width: "auto" },
    { id: "sundayActivity", padding: "none", label: "Sun", subLabel: formatDateForHeader(dates.sunday), alignment: "center", width: 70 },
    { id: "mondayActivity", padding: "none", label: "Mon", subLabel: formatDateForHeader(dates.monday), alignment: "center", width: 70 },
    { id: "tuesdayActivity", padding: "none", label: "Tue", subLabel: formatDateForHeader(dates.tuesday), alignment: "center", width: 70 },
    { id: "wednesdayActivity", padding: "none", label: "Wed", subLabel: formatDateForHeader(dates.wednesday), alignment: "center", width: 70 },
    { id: "thursdayActivity", padding: "none", label: "Thu", subLabel: formatDateForHeader(dates.thursday), alignment: "center", width: 70 },
    { id: "fridayActivity", padding: "none", label: "Fri", subLabel: formatDateForHeader(dates.friday), alignment: "center", width: 70 },
    { id: "saturdayActivity", padding: "none", label: "Sat", subLabel: formatDateForHeader(dates.saturday), alignment: "center", width: 70 },
    { id: "totalActivity", padding: "none", label: "Total Time", subLabel: "(hh:mm:ss)", alignment: "center", width: 110 }
  ];

  //#region Methods & Handlers

  const triggerOnError = (response: any, defaultBehavior?: Function) => {
    triggerHandler(props.onError, response, defaultBehavior);
  }

  const triggerOnLoadStart = (response: any, defaultBehavior?: Function) => {
    setIsLoading(true);
    triggerHandler(props.beforeLoad, response, defaultBehavior);
  }

  const triggerOnLoadEnd = (response: any, defaultBehavior?: Function) => {
    setIsLoading(false);
    triggerHandler(props.afterLoad, response, defaultBehavior);
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = dataRows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleOpenAllClick = () => {
    setDataRows(dataRows.map(row => ({
      ...row,
      isOpen: !row.isOpen
    })));
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  //#endregion

  //#region Report Data Load

  const attendanceLogAPI = AttendanceLogAPI.configure(props.apiUrl);

  const load = () => {
    if (!!studentData && !!selectedDate && !!dates.sunday && !!dates.saturday) {
      triggerOnLoadStart({ isLoading: true });

      const studentIds: string[] = studentData.map((r: { id: any; }) => r.id);
      attendanceLogAPI.getAttendanceLogs(studentIds, dates.sunday, dates.saturday).then((data: any) => {
        const dataRows = mapDataRows(studentData, data, dates);

        setDataRows(dataRows);
        triggerOnLoadEnd({ isLoading: false });
      }).catch(() => {
        const errorMessage = "Unable to load report data.";
        triggerOnError(errorMessage);
      });
    }
  }



  useEffect(() => {
    load();
  }, [studentData, selectedDate]);
  //#endregion

  return !isLoading ? (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <GridToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="student attendance log"
            size={"small"}
          >
            <GridHeader
              classes={classes}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={dataRows.length}
              columns={columns}
              onOpenAllClick={handleOpenAllClick}
            />

            <TableBody>
              {dataRows.map((row, index) => (
                <GridRow
                  row={row}
                  key={row.id}
                  index={index}
                  columns={columns}
                  onSelected={handleClick}
                  isSelected={isSelected}
                  isOpen={row.isOpen}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  ) : (
    <div></div>
  );
}

export default ReportGrid;