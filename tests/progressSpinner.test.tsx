import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressSpinner } from "../src/components";
import { withMaterialUI } from "./testUtils"

describe('Loading ProgressSpinner', () => {

    it('should render as expected when showing', function() {
        const tree = withMaterialUI(ProgressSpinner, { show: true });
        expect(tree).toMatchSnapshot();
    });
    it('should render as expected not showing', function() {
        const tree = withMaterialUI(ProgressSpinner, { show: false });
        expect(tree).toMatchSnapshot();
    });
});