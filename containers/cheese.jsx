import React from "react";

class Cheese extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired
  }
  render() {
    const { title } = this.props;
    return (
      <div className='unc-cheese'>
        <h5 className='unc-cheese__header'>{title}</h5>
        <div className='unc-cheese__content'></div>
      </div>
    );
  }
}

export default Cheese;
