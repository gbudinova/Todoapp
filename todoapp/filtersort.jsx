import React from 'react';

const FilterSortControls = ({ 
  filterUserId, 
  setFilterUserId,
  sortOrder,
  setSortOrder
}) => {
  const users = [
    { id: 1, name: 'alice' },
    { id: 2, name: 'bob' },
  ];

  return (
    <div className="controls">
      <div className="filter">
        <label>Filter by User:</label>
        <select 
          value={filterUserId} 
          onChange={(e) => setFilterUserId(e.target.value)}
        >
          <option value="all">All Users</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <div className="sort">
        <label>Sort by Text:</label>
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortControls;