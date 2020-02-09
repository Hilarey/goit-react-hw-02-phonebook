import React from "react";

export default function Filter({ value, onFilterChange }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
}
