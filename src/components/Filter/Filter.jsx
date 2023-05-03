import { useDispatch, useSelector } from 'react-redux';
import { FilterBox } from './FilterBox.styled';
import { setFilterSearchValue } from 'redux/filterSlice';
import { getFilterSearchValue } from 'redux/selectors';

export const Filter = () => {
  const filterSearchValue = useSelector(getFilterSearchValue);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilterSearchValue(e.target.value));

  return (
    <FilterBox>
      <label htmlFor="exampleInputName">Find contacts by name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filterSearchValue}
        onChange={handleFilter}
      />
    </FilterBox>
  );
};
