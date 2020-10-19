import React from 'react';

// Using Babel syntax
export const Hello = ({ library, message }) => {
  return (
    <div className="heading">
      <h1>Welcome to {library || "React"}</h1>
      <p>{message}</p>
    </div>
  )
}