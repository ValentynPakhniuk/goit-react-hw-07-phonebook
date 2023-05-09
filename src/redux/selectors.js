import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterSearchValue = state => state.filter;

export const selectVisibleContact = createSelector(
  [selectContact, selectFilterSearchValue],
  (contacts, filter) => {
    return filter
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  }
);
