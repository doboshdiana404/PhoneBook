import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from './slice';
import { selectContacts } from '../contacts/selectors';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterName) => {
    const filterContacts = filterName.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts)
    );
  }
);
