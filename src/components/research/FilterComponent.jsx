import React, { useState } from 'react';
import styled from 'styled-components';

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows filters to wrap on smaller screens */
  align-items: center;
  padding: 10px;
`;

const FilterButton = styled.button`
  background-color: ${({ active }) => (active ? '#800000' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : '#800000')};
  border: 1px solid #800000;
  padding: 8px 15px;
  margin: 5px 10px 5px 0; /* Adjusted margin for spacing */
  border-radius: 20px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #a00000;
    color: white;
  }
`;

const FilterComponent = () => {
  const filters = ['All', 'Computer Architect', 'Networking', 'Web Development', 'IoT'];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <FilterBar>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
          aria-pressed={activeFilter === filter}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterBar>
  );
};

export default FilterComponent;
