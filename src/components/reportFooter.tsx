import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useReportContext } from ".";

// Define our styles for material-ui
const useStyles = makeStyles({
  root: {
    height: "80px",
    maxHeight: "80px",
    width: "100%",

    backgroundColor: "green"
  },
  footerWidgetContainer: {
    height: "46px",
    padding:"3px 6px"
  },
  footerWidgetLabelText: {
    fontSize: 14,
    lineHeight: "64px",
    fontWeight: "bold",
    justifySelf: "bottom",
    verticalAlign: "bottom",
  }
});

export const ReportFooter = function(props: any) {
  const classes = useStyles();
  const { reportContext, setReportContext } = useReportContext();
  const { page, pageSize } = reportContext;

  return (
    <Container className={classes.root} maxWidth="lg">
        <Box display="flex" flexDirection="row" flexWrap="nowrap" width="100%">
            {/* TODO: create footer paging and alphabet filter */}
        </Box>
    </Container>
  );
}
export default ReportFooter;