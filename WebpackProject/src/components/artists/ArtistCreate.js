<<<<<<< HEAD
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {reduxForm, Field} from 'redux-form'
import * as actions from '../../actions'

class ArtistCreate extends Component {
  componentWillUnmount() {
    this.props.clearError()
  }

  onSubmit(formProps) {
    this.props.createArtist(formProps)
  }

  render() {
    const {handleSubmit} = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className='input-field'>
          <Field name='name' component='input' placeholder='Name' />
        </div>
        <div className='input-field'>
          <Field name='age' component='input' placeholder='Age' />
        </div>
        <div className='input-field'>
          <Field
            name='yearsActive'
            component='input'
            placeholder='Years Active'
          />
        </div>
        <div className='input-field'>
          <Field name='genre' component='input' placeholder='Genre' />
        </div>
        <div className='has-error'>{this.props.errorMessage}</div>
        <button className='btn'>Submit</button>
      </form>
    )
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class ArtistCreate extends Component {
  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit(formProps) {
    this.props.createArtist(formProps);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div className="input-field">
          <Field name="name" component="input" placeholder="Name" />
        </div>
        <div className="input-field">
          <Field name="age" component="input" placeholder="Age" />
        </div>
        <div className="input-field">
          <Field name="yearsActive" component="input" placeholder="Years Active" />
        </div>
        <div className="input-field">
          <Field name="genre" component="input" placeholder="Genre" />
        </div>
        <div className="has-error">
          {this.props.errorMessage}
        </div>
        <button className="btn">Submit</button>
      </form>
    );
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
  }
}

const mapStateToProps = (state) => {
  return {
<<<<<<< HEAD
    errorMessage: state.errors,
  }
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: 'create',
  })(ArtistCreate)
)
=======
    errorMessage: state.errors
  };
};

export default connect(mapStateToProps, actions)(reduxForm({
  form: 'create'
})(ArtistCreate));
>>>>>>> 1211fe30d8a5a222877106c182cdfa1d1312c1f6
