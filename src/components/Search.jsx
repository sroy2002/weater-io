import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { url, geoAPIOptions } from '../api';

function Search({ onSearchChange, onSubmitChange }) {

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'border border-gray-300', 
      borderRadius: '2rem', 
      fontSize: 'text-lg', 
      paddingTop: '3px', 
      paddingBottom: '3px', 
      paddingLeft: '1rem',
      marginTop: onSubmitChange ? `0px` : `3rem`,
      backgroundColor: '#E0FFFF',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'text-white' : 'text-gray-800',
      borderRadius: '1rem',
      padding: '1rem',
      cursor: 'pointer'
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'text-gray-400', 
      '&:hover': { color: 'text-green-500' }, 
      paddingRight: '10px'
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '1rem',
    })
  };


  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    try {
      const response = await fetch(`${url}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoAPIOptions);
      const result = await response.json();
      return {
        options: result.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    } catch (error) {
      console.error(error);
    }
  }

  const handleOnChange = (searchData) => {
    setSearch(null);
    onSearchChange(searchData);
  }

  return (
    <div className={`w-[80%] md:w-[70%] lg:w-[60%] xl:w-[55%] ${onSubmitChange ? 'py-2 w-[65%] md:w-[55%] lg:w-[45%] xl:w-[40%]':'py-4'}`}>
      <AsyncPaginate
        styles={customStyles}
        placeholder='Search for city'
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search
