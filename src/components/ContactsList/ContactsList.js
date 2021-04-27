import { connect } from 'react-redux';
import { onRemove } from '../../Redux/Actions';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

// const ContactsListItem = ({ id, name, phone, onRemove }) => {
//   return (
//     <li className={s.contact}>
//       {name}: {phone} <button onClick={() => onRemove(id)}>Delete</button>
//     </li>
//   );
// };

const ContactsList = ({ items, onRemove }) => {
  if (items.length === 0) return null;
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className={s.contact}>
          <span className={s.contact_span}>{item.name}</span>{' '}
          <span className={s.contact_span}>{item.number}</span>
          <button className={s.button} onClick={() => onRemove(item.id)}>
            Delete
          </button>
        </li>
      ))}
      {/* {items.map(item => ( 
        <ContactsListItem key={uuid()} {...items} onRemove={onRemove} />
      ))} */}
    </ul>
  );
};

const getVisibleContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(onRemove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onRemove: PropTypes.func,
};
