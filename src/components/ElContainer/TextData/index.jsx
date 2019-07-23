import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Projects from './Projects';
import Skils from './Skils';
import Summary from './Summary';

export default function TextData(props) {
  const { action } = props;

  let elem;
  if (action === 1) {
    elem = <Projects />;
  } else if (action === 2) {
    elem = <Skils />;
  } else if (action === 3) {
    elem = <Summary />;
  }

  return (
    <Row>
      <Col>{elem}</Col>
    </Row>
  );
}

TextData.propTypes = {
  action: PropTypes.number.isRequired,
};