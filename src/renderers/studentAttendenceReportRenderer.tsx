import { StudentAttendanceReport } from "../components/studentAttendanceReport"
import { IStudentAttendanceReportProps } from "models";
import React from "react";
import ReactDOM from "react-dom";

interface IProps extends IStudentAttendanceReportProps {
    selector?: string;
}

export class StudentAttendanceReportRenderer {
    private props: IProps;

    constructor(props: IProps) {
        this.props = props;
    }

    render() {
        const domContainer = this.props.selector !== undefined ? document.querySelector(this.props.selector) : document.createElement('div');

        if (this.props.selector === undefined && domContainer !== null) {
            document.body.appendChild(domContainer);
        }

        ReactDOM.render(React.createElement(StudentAttendanceReport, this.props), domContainer);
    }
}