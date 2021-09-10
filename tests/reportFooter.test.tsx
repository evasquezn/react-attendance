import React from 'react';
import renderer from 'react-test-renderer';
import { ReportFooter } from "../src/components";

test('Footer Renders Correctly', () => {

  const component = renderer.create(
    <ReportFooter/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});