import React from 'react';
import Option from './Option';

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOption}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleAddOption}
        />
      ))}
    </div>
  );
};

export default Options;