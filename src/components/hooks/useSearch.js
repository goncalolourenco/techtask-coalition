import { useState } from 'react';

const useSearch = (initialSearchState) => {
  const [{ searchInputValue, searchTerm }, setSearch] = useState(initialSearchState);

  const handleInputSearch = ({ target }) => {
    setSearch((previous) => ({ ...previous, searchInputValue: target.value }));
  };

  const handleSearch = () => {
    setSearch((previous) => ({ ...previous, searchTerm: searchInputValue }));
  };

  return {
    searchInputValue,
    searchTerm,
    handleInputSearch,
    handleSearch,
  };
};

export default useSearch;
