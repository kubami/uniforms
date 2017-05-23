import React       from 'react';
import {mount}     from 'enzyme';
import {PropTypes} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ValidatedQuickForm from 'uniforms-material/ValidatedQuickForm';

import createSchema from './_createSchema';

const createContext = () => ({context: {muiTheme: getMuiTheme()},childContextTypes: {muiTheme: PropTypes.object.isRequired}}); // eslint-disable-line max-len

test('<ValidatedQuickForm> - works', () => {
    const element = <ValidatedQuickForm schema={createSchema()} />;
    const wrapper = mount(element, createContext());

    expect(wrapper.find(ValidatedQuickForm)).toHaveLength(1);
});
