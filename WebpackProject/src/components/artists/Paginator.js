<<<<<<< HEAD
import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Paginator extends Component {
  back() {
    const {
      offset,
      limit,
      form: {
        filters: {values},
      },
    } = this.props

    if (offset === 0) return

    this.props.searchArtists(values, offset - 10, limit)
  }

  advance() {
    const {
      offset,
      limit,
      count,
      form: {
        filters: {values},
      },
    } = this.props

    if (offset + limit > count) return

    this.props.searchArtists(values, offset + 10, limit)
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Paginator extends Component {
  back() {
    const { offset, limit, form: { filters: { values } } } = this.props;

    if (offset === 0 ) { return; }

    this.props.searchArtists(values, offset - 10, limit);
  }

  advance() {
    const { offset, limit, count, form: { filters: { values } } } = this.props;

    if ((offset + limit) > count) { return; }

    this.props.searchArtists(values, offset + 10, limit);
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  }

  left() {
    return (
      <li className={this.props.offset === 0 ? 'disabled' : ''}>
        <a onClick={this.back.bind(this)}>
<<<<<<< HEAD
          <i className='material-icons'>chevron_left</i>
        </a>
      </li>
    )
  }

  right() {
    const {offset, limit, count} = this.props
    const end = offset + limit >= count ? true : false
=======
          <i className="material-icons">chevron_left</i>
        </a>
      </li>
    );
  }

  right() {
    const { offset, limit, count } = this.props;

    const end = ((offset + limit) >= count) ? true : false;
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

    return (
      <li className={end ? 'disabled' : ''}>
        <a onClick={this.advance.bind(this)}>
<<<<<<< HEAD
          <i className='material-icons'>chevron_right</i>
        </a>
      </li>
    )
=======
          <i className="material-icons">chevron_right</i>
        </a>
      </li>
    );
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  }

  render() {
    return (
<<<<<<< HEAD
      <div className='center-align'>
        <ul className='pagination'>
          {this.left()}
          <li>
            <a>Page {this.props.offset / 10 + 1}</a>
          </li>
=======
      <div className="center-align">
        <ul className="pagination">
          {this.left()}
          <li><a>Page {this.props.offset / 10 + 1}</a></li>
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
          {this.right()}
        </ul>
        {this.props.count} Records Found
      </div>
<<<<<<< HEAD
    )
  }
}

const mapStateToProps = ({artists, form}) => {
  const {limit, offset, count} = artists

  return {limit, offset, count, form}
}

export default connect(mapStateToProps, actions)(Paginator)
=======
    );
  }
}

const mapStateToProps = ({ artists, form }) => {
  const { limit, offset, count } = artists;

  return { limit, offset, count, form};
};

export default connect(mapStateToProps, actions)(Paginator);
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
