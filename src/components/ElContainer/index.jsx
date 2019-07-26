import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AboutMe from './AboutMe';
import Menu from './Menu';
import TextData from './TextData';
import Form from './Form';

export default function ElContainer() {
  const [active, setActive] = useState(0);

  const updateActive = (value) => {
    setActive(value);
  };

  return (
    <Container>
      <AboutMe />
      <Menu active={active} updateActive={updateActive} />
      <TextData active={active} />
      <Form />
    </Container>
  );
}