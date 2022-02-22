<<<<<<< HEAD
import _ from 'lodash'
import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Range} from '../filters'
import * as actions from '../../actions'

const TEXT_FIELDS = [{label: 'Name', prop: 'name'}]
=======
import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Range } from '../filters';
import * as actions from '../../actions';

const TEXT_FIELDS = [
  { label: 'Name', prop: 'name' }
];
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

class ArtistFilter extends Component {
  componentWillMount() {
    if (this.props.filters) {
<<<<<<< HEAD
      const criteria = _.extend({}, {name: ''}, this.props.filters)
      this.props.searchArtists(criteria)
    } else {
      this.props.searchArtists({
        name: '',
        sort: 'name',
      })
=======
      const criteria = _.extend({}, { name: '' }, this.props.filters);
      this.props.searchArtists(criteria);
    } else {
      this.props.searchArtists({
        name: '',
        sort: 'name'
      });
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
    }
  }

  componentDidMount() {
<<<<<<< HEAD
    this.props.setAgeRange()
    this.props.setYearsActiveRange()
  }

  handleSubmit(formProps) {
    const criteria = _.extend({name: ''}, formProps)
    this.props.searchArtists(criteria)
  }

  renderInputs() {
    return TEXT_FIELDS.map(({label, prop}) => (
      <div className='input-field' key={prop}>
=======
    this.props.setAgeRange();
    this.props.setYearsActiveRange();
  }

  handleSubmit(formProps) {
    const criteria = _.extend({ name: '' }, formProps);
    this.props.searchArtists(criteria);
  }

  renderInputs() {
    return TEXT_FIELDS.map(({ label, prop }) =>
      <div className="input-field" key={prop}>
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
        <Field
          placeholder={label}
          id={prop}
          name={prop}
<<<<<<< HEAD
          component='input'
          type='text'
        />
      </div>
    ))
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <div className='card blue-grey darken-1 row'>
        <div className='card-content white-text'>
          <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
            <div className='center-align card-title'>Search</div>

            {this.renderInputs()}

            <div className='input-field'>
              <Field
                id='age'
                label='Age'
                component={Range}
                type='text'
                name='age'
=======
          component="input"
          type="text"
        />
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="card blue-grey darken-1 row">
        <div className="card-content white-text">
          <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
            <div className="center-align card-title">
              Search
            </div>

            {this.renderInputs()}

            <div className="input-field">
              <Field
                id="age"
                label="Age"
                component={Range}
                type="text"
                name="age"
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
                range={this.props.ageRange}
              />
            </div>

<<<<<<< HEAD
            <div className='input-field'>
              <Field
                id='years-active'
                label='Years Active'
                component={Range}
                type='text'
                name='yearsActive'
=======
            <div className="input-field">
              <Field
                id="years-active"
                label="Years Active"
                component={Range}
                type="text"
                name="yearsActive"
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
                range={this.props.yearsActive}
              />
            </div>

            <div>
<<<<<<< HEAD
              <label className='select' htmlFor='sort'>
                Sort By
              </label>
              <Field id='sort' name='sort' component='select'>
                <option value='name'>Name</option>
                <option value='age'>Age</option>
                <option value='albums'>Albums Released</option>
              </Field>
            </div>

            <div className='center-align'>
              <button className='btn'>Submit</button>
=======
              <label className="select" htmlFor="sort">Sort By</label>
              <Field id="sort" name="sort" component="select">
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="albums">Albums Released</option>
              </Field>
            </div>

            <div className="center-align">
              <button className="btn">Submit</button>
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
            </div>
          </form>
        </div>
      </div>
<<<<<<< HEAD
    )
=======
    );
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  }
}

const mapStateToProps = (state) => {
<<<<<<< HEAD
  const {filterCriteria} = state
=======
  const { filterCriteria } = state;
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6

  return {
    yearsActive: filterCriteria.yearsActive,
    ageRange: filterCriteria.age,
<<<<<<< HEAD
    filters: state.form.filters && state.form.filters.values,
  }
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    destroyOnUnmount: false,
    form: 'filters',
    initialValues: {sort: 'name'},
  })(ArtistFilter)
)
=======
    filters: state.form.filters && state.form.filters.values
  };
};

export default connect(mapStateToProps, actions)(reduxForm({
  destroyOnUnmount: false,
  form: 'filters',
  initialValues: { sort: 'name' }
})(ArtistFilter));
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
