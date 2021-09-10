import React,  { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import { getPreviousSunday } from "../utils";
import { useReportContext } from "."

//#region Styling

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "80px",
      width: "100%",
      padding: 0
    },
    titleWrapper: {
      minHeight: "20px",
      width: "100%",
      padding: "2px 5px"
    },
    toolBar: {
      minHeight: "50px",
      width: "100%",
      padding: 0
    },
    headerWidgetContainer: {
      height: "100%",
      padding:"0",
      paddingLeft: "5px",
      '& .MuiTextField-root': {
        margin: theme.spacing(.5),
        padding: 0
      },
    },
    headerWidgetLabelText: {
      fontSize: 14,
      fontWeight: "bold",
      lineHeight: "44px"
    }
  }),
);

//#endregion

export interface IReportHeaderProps {
  studentAPIBaseUrl: string;
  reportTitle: string;
  defaultPageSize?: number;
  defaultDate? : string;
}

export const ReportHeader = function(props: IReportHeaderProps) {
  const classes = useStyles();
  const reportTitle = props.reportTitle || "Attendance Log";

  const { reportContext, setReportContext } = useReportContext();
  const { page, pageSize, selectedDate, studentData } = reportContext;
  const setPageSize = (pageSize: number) => setReportContext(current => {return {...current, pageSize }});
  const setSelectedDate = (date: Date) => {
    let selectedDate = getPreviousSunday(date)
    if(selectedDate != reportContext.selectedDate)
    {
      setReportContext(current => {return {...current, selectedDate }}); 
    }
  };

  const handleDateChange = (date: any) => {
    if (!!date) {
      setSelectedDate(date);
    }
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <Box className={classes.titleWrapper}>
        <Typography variant="h5" component="h5">
          {reportTitle}
        </Typography>
      </Box>
      <Container className={classes.toolBar}>
        <Box display="flex" flexDirection="row" flexWrap="nowrap" width="100%">
          <Box 
            width="60px"
            flexGrow={0}
            flexShrink={0}
            className={classes.headerWidgetContainer}
            >
            <Typography variant="body1" className={classes.headerWidgetLabelText}>Filters:</Typography>
          </Box>
          
          <Box
            flexGrow={1}
            flexShrink={1}
            className={classes.headerWidgetContainer}
            >
            <Box component="ul" >
              {/* {chipData.map((data) => {
                let icon;
                
                if (data.label === 'React') {
                  icon = <TagFacesIcon />;
                }
                
                return (
                  <li key={data.key}>
                  <Chip
                  icon={icon}
                  label={data.label}
                  onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                  className={classes.chip}
                  />
                  </li>
                  );
                })} */}
            </Box>
          </Box>

          <Box 
            width="60px"
            flexGrow={0}
            flexShrink={0}
            className={classes.headerWidgetContainer}
            >
            <Typography variant="body1" className={classes.headerWidgetLabelText}>Week of:</Typography>
          </Box>

          <Box
            width="160px"
            flexGrow={0}
            flexShrink={0}
            className={classes.headerWidgetContainer}
            >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                size="small"
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                />
            </MuiPickersUtilsProvider>
          </Box>
        </Box>
      </Container>     
    </Container>
  );
}

export default ReportHeader;