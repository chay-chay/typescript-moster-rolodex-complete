import React from 'react';

import './search-box.styles.css';

interface Props {
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
   // added parameter and no return
}

export const SearchBox:React.FC<Props> = props => (
  <input
    className='search-box'
    type='search'
    placeholder='search monsters'
    onChange={props.onSearchChange}
  />
);
