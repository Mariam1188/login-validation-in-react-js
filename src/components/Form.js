import React from 'react';

function Form({ onSubmit, children, style, isVisible }) {
  console.log('isVisible:', isVisible);
  return (
    <form onSubmit={onSubmit} style={{ ...style, display: isVisible ? 'block' : 'none' }}>
      {children}
    </form>
  );
}

export default Form;
