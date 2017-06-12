import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class EventPanelsEvent extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  isOneDay = () => (
    moment(this.props.event.startDate).isSame(moment(this.props.event.endDate), 'day')
  )

  fullStartDay = () => (
    moment(this.props.event.startDate).format('dddd, MMMM D')
  )

  timeRange = () => (
    `${moment(this.props.event.startDate).format('h:mm a')} to ${moment(this.props.event.endDate).format('h:mm a')}`
  )

  startDay = () => (
    `${moment(this.props.event.startDate).format('MMMM D')}, ${moment(this.props.event.startDate).format('h:mm a')}`
  )

  endDay = () => (
    `${moment(this.props.event.endDate).format('MMMM D')}, ${moment(this.props.event.endDate).format('h:mm a')}`
  )

  render() {
    return (
      <div className="gtv-event">
        <h3 className="gtv-event-title">{this.props.event.name}</h3>
        {
          /* eslint-disable semi */
          /* eslint-disable no-unused-expressions */
          do {
            if (this.isOneDay()) {
              [
                <span key={1} className="gtv-event-data">{this.fullStartDay()}</span>,
                <span key={2} className="gtv-event-data">{this.timeRange()}</span>,
                <span key={3} className="gtv-event-data text-muted">{this.props.event.location}</span>,
              ]
            } else {
              [
                <span key={1} className="gtv-event-data">{this.startDay()} to</span>,
                <span key={2} className="gtv-event-data">{this.endDay()}</span>,
                <span key={3} className="gtv-event-data text-muted">{this.props.event.location}</span>,
              ]
            }
          }
          /* eslint-enable no-unused-expressions */
          /* eslint-enable semi */
        }
      </div>
    );
  }
}

export default EventPanelsEvent;
