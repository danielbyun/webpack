<<<<<<< HEAD
import React, {Component} from 'react'
import Slider from 'react-input-range'

class Range extends Component {
  onChange(component, values) {
    const {
      input: {onChange},
    } = this.props

    onChange(values)
  }

  render() {
    const {
      input: {value},
    } = this.props

    return (
      <div className='range-slider'>
=======
import React, { Component } from 'react';
import Slider from 'react-input-range';

class Range extends Component {
  onChange(component, values) {
    const { input: { onChange } } = this.props;

    onChange(values);
  }

  render() {
    const { input: { value } } = this.props;

    return (
      <div className="range-slider">
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
        <label>{this.props.label}</label>
        <Slider
          onChange={this.onChange.bind(this)}
          minValue={parseInt(this.props.range.min)}
          maxValue={parseInt(this.props.range.max)}
          value={value || this.props.range}
        />
      </div>
<<<<<<< HEAD
    )
  }
}

Range.defaultProps = {
  range: {min: 0, max: 100},
}

export {Range}
=======
    );
  }
};

Range.defaultProps = {
  range: { min: 0, max: 100 }
};

export { Range };
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
