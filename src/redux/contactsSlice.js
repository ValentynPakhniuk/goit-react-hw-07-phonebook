import { createSlice, nanoid } from '@reduxjs/toolkit';

const listContacts = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: listContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const isContactExists = state.some(
          contact => contact.name === action.payload.name
        );
        if (isContactExists) {
          return alert(`${action.payload.name} is already in contacts.`);
        }
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
