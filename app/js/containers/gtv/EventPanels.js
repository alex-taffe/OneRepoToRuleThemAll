import { connect } from 'react-redux';
import EventPanels from 'components/gtv/EventPanels';
import { getAllEvents } from 'actions/events';

function mapStateToProps({ events }) {
  return {
    events: events.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getAllEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPanels);
