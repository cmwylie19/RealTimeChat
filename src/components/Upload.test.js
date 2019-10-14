import 'raf/polyfill';
import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Upload from './Upload';

configure({ adapter: new Adapter() });

describe('Upload',()=>{
    test('Upload component has the correct css class', () => {
        const view = shallow( <Upload title="test" /> );
        expect(view.props().className).toMatch(/upload-btn-wrapper/);
      });

    test('matches snapshot',()=>{
        const view = mount(<Upload />);
        expect(view).toMatchSnapshots()
    })
})
