import React from 'react';
import { createRender } from '@material-ui/core/test-utils';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

export const withMaterialUI = (Component: any, props?: any) => {
    const render = createRender();
    return render(
        <Component {...props} />
    );
};