import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const onAdd = createAction('ADD_CONTACT', text => ({
  payload: {
    id: uuid(),
    name: text.name,
    number: text.number,
  },
}));

// export const onAdd = text => {
//   return {
//     type: 'ADD_CONTACT',
//     payload: {
//       id: uuid(),
//       name: text.name,
//       number: text.number,
//     },
//   };
// };

export const onRemove = createAction('DELETE_CONTACT');

// export const onRemove = id => {
//   return {
//     type: 'DELETE_CONTACT',
//     payload: id,
//   };
// };

export const onChange = createAction('FILTER_CONTACT');

// export const onChange = value => {
//   return {
//     type: 'FILTER_CONTACT',
//     payload: value,
//   };
// };
