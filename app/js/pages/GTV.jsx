import React from 'react';
import TorqueSlides from 'torque-react';
import EventPanels from 'containers/gtv/EventPanels';

const GTV = () => (
  <TorqueSlides duration={20} keyboardInteractive>
    <EventPanels />
  </TorqueSlides>
);

export default GTV;
