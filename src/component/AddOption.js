import React, {Component} from 'react';

export default class AddOption extends Component {

  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      this.props.handleAddOption(option);
    }
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input input="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
