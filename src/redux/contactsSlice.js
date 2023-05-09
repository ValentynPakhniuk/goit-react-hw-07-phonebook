import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './operations';

const arrThunk = [addContactsThunk, deleteContactsThunk, fetchContactsThunk];

const fn = type => arrThunk.map(el => el[type]);

const listContacts = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};
const handleFulfilledFetchContacts = (state, action) => {
  state.items = action.payload;
};
const handleFulfilledAddContacts = (state, action) => {
  const isContactExists = state.items.some(
    contact => contact.name === action.payload.name
  );
  if (isContactExists) {
    return alert(`${action.payload.name} is already in contacts.`);
  } else {
    state.items.push(action.payload);
  }
};
const handleFulfilledDeleteContacts = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(index, 1);
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: listContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetchContacts)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAddContacts)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDeleteContacts)
      .addMatcher(isAnyOf(...fn('pending')), handlePending)
      .addMatcher(isAnyOf(...fn('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...fn('rejected')), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
