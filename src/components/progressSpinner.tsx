import React, { ReactElement } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

//#region Styling 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }),
);

//#endregion

export interface IProgressSpinnerProps {
    show: boolean
};

export const ProgressSpinner = (props: IProgressSpinnerProps): ReactElement => {
    const classes = useStyles();
    const { show } = props;

    return (
        <Backdrop className={classes.backdrop} open={show}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default ProgressSpinner;