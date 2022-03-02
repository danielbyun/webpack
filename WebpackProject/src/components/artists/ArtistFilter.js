import React, {useEffect} from 'react'
import _ from 'lodash'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {Range} from '../filters'
import * as actions from '../../actions'

const TEXT_FIELDS = [{label: 'Name', prop: 'name'}]

const ArtistFilter = ({
  searchArtists,
  setAgeRange,
  setYearsActiveRange,
  ageRange,
  filters,
  yearsActive,
}) => {
  const renderInputs = () => {
    return TEXT_FIELDS.map(({label, prop}) => (
      <div className='input-field' key={prop}>
        <Field
          placeholder={label}
          id={prop}
          name={prop}
          component='input'
          type='text'
        />
      </div>
    ))
  }

  const handleSubmit = (formProps) => {
    const criteria = _.extend({name: ''}, formProps)
    searchArtists(criteria)
  }

  useEffect(() => {
    setAgeRange()
    setYearsActiveRange()

    if (filters) {
      const criteria = _.extend({}, {name: ''}, filters)
      searchArtists(criteria)
    } else {
      searchArtists({
        name: '',
        sort: 'name',
      })
    }
  }, [filters])

  return (
    <div className='card blue-grey darken-1 row'>
      <div className='card-content white-text'>
        <form onSubmit={handleSubmit}>
          <div className='center-align card-title'>Search</div>

          {renderInputs()}

          <div className='input-field'>
            <Field
              id='age'
              label='Age'
              component={Range}
              type='text'
              name='age'
              range={ageRange}
            />
          </div>

          <div className='input-field'>
            <Field
              id='years-active'
              label='Years Active'
              component={Range}
              type='text'
              name='yearsActive'
              range={yearsActive}
            />
          </div>

          <div>
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
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {filterCriteria} = state

  return {
    yearsActive: filterCriteria.yearsActive,
    ageRange: filterCriteria.age,
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
