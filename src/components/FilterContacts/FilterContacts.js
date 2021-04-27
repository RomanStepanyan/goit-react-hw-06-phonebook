import { connect } from 'react-redux';
import { onChange } from '../../Redux/Actions';
import PropTypes from 'prop-types';
import s from './FilterContacts.module.css';

const FilterContacts = ({ filter, onChange }) => {
  return (
    <input
      className={s.input}
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      // onChange={({ target }) => onChange(target.value)}
      placeholder="Search contact"
    />
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target }) => dispatch(onChange(target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);

FilterContacts.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
