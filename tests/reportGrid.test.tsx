import React from 'react';
import renderer from 'react-test-renderer';
import { ReportGrid } from "../src/components";
import { IStudent } from "../src/models";


test('Grid Renders Correctly', () => {
  const selectedDate = new Date("2021/04/04");
  const studentData: IStudent[] = [];
  const attendanceReportAPIBaseUrl = "https://this.dummy.com/api"
  const onError = function() { };
  const beforeLoad = function() { };
  const afterLoad = function() { };

  const component = renderer.create(
    <ReportGrid
      apiUrl={attendanceReportAPIBaseUrl}
      selectedDate={selectedDate}
      studentData={studentData}
      onError={onError}
      beforeLoad={beforeLoad}
      afterLoad={afterLoad}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});