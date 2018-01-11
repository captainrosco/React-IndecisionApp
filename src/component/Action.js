import React from 'react';

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOption} onClick={props.handlePick}>
        What should I Do
      </button>
    </div>
  );
};

export default Action;