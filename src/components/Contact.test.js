import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';
import Contact from './Contact';

describe('<Contact />', () => {
  const props = {
    email: 'emailteste@gmail.com'
  };

  exports[
    `test should render an email`
  ] = `<div id="contact">emailteste@gmail.com</div>`;

  it('should render an email', () => {
    const email = shallow(<Contact {...props} />);
    expect(email).toMatchSnapshot();
  });
});
