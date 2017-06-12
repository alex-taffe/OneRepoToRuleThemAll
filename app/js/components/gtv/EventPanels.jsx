import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from 'components/gtv/EventPanelEvent';

import 'scss/gtv.scss';

const EVENTS_PER_COL = 4;
const col = events => events.map(e => (<Event key={e.id} event={e} />));

class EventPanels extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line react/forbid-prop-types
    getEvents: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;

    const cols = [
      col(events.slice(0, EVENTS_PER_COL)),
      col(events.slice(EVENTS_PER_COL, EVENTS_PER_COL * 2)),
      col(events.slice(EVENTS_PER_COL * 2, EVENTS_PER_COL * 3)),
    ];

    return (
      <section className="gtv-container">
        <h3 className="gtv-event-header">Upcoming Events</h3>
        <div className="gtv-event-container">
          {cols.map((c, index) => (<div key={index} className="gtv-event-col">{c}</div>))}
        </div>
      </section>
    );
  }
}

export default EventPanels;
