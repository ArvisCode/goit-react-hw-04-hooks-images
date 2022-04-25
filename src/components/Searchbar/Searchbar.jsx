import { useState } from 'react';
import css from './Searchbar.module.css';
import { IconContext } from 'react-icons';
import { BiSearchAlt2 } from 'react-icons/bi';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = e => setSearchInput(e.target.value.toLowerCase());

  const handleFormSubmit = e => {
    e.preventDefault();

    if (searchInput.trim() === '') {
      Notiflix.Notify.failure('Please enter a search term!');
      return;
    }
    onSubmit(searchInput);
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleFormSubmit} className={css.searchForm}>
        <input
          className={css.searchFormInput}
          value={searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />

        <button type="submit" className={css.searchFormButton}>
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <BiSearchAlt2 size={24} />
          </IconContext.Provider>
        </button>
      </form>
    </header>
  );
}

Notiflix.Notify.init({
  distance: '10px',
  timeout: 1500,
});

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
