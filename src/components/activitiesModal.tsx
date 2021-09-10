import React, { ReactElement, useState } from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ActivityList from './activityList';
//#region Styling 

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogContent = withStyles((theme: Theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme: Theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);

//#endregion

export interface IActivitiesModalProps {
    show: boolean,
    studentName: string,
    course:string,
    date: string,
};

export const ActivitiesModal = (props: IActivitiesModalProps): ReactElement => {
    const { show, studentName, course, date} = props;
    const [open,setOpen] = useState(show);
    const handleClose = ()=>{
        setOpen(false);
    };

    return (
        <div>
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <MuiDialogTitle disableTypography>
            <Typography variant="h6">Activity Log</Typography>          
                    <IconButton aria-label="close" onClick={handleClose}>
                    <CloseIcon />
                    </IconButton>
            </MuiDialogTitle>
            <DialogContent dividers>
             <ActivityList list={[]}/>  
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
};

export default ActivitiesModal;