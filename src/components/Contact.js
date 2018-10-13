import React from 'react';
import PropTypes from 'prop-types';

function Contact(props) {
  const { email } = props;
  return <div id="contact">{email}</div>;
}

Contact.propTypes = {
  email: PropTypes.string.isRequired
};

export default Contact;
