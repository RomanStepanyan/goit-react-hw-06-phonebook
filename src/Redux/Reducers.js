import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

const items = createReducer(INITIAL_STATE, {
  ADD_CONTACT: (state, { payload }) => {
    const isNotUniqueContact = state.some(item => item.name === payload.name);
    if (!isNotUniqueContact) {
      return [...state, payload];
    } else {
      alert('Contact is already exist');
      return state;
    }
  },
  DELETE_CONTACT: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer('', {
  FILTER_CONTACT: (_, { payload }) => payload,
});

// const items = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case 'ADD_CONTACT':
//       const isNotUniqueContact = state.some(item => item.name === payload.name);
//       if (!isNotUniqueContact) {
//         return [...state, payload];
//       } else {
//         alert('Contact is already exist');
//         return state;
//       }

//     case 'DELETE_CONTACT':
//   return state.filter(({ id }) => id !== payload);
// //    [state.filter(item => item.id !== payload)];
// // (state.contacts.items: state?.contacts.items.filter(item => item.id !== id)),

//     default:
//       return state;
//   }
// };
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case 'FILTER_CONTACT':
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
