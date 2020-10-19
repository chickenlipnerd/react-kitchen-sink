import React, { useReducer } from 'react'

function UsingReducer() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "reducer checked" : "reducer not checked"}
    </>
  );
}

export default UsingReducer;