import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Badge from '../components/Badge'
import '../components/styles/Badges.css'
import BadgeForm from '../components/BadgeForm'
import header from '../images/platziconf-logo.svg'
import api from '../api'

class BadgeEdit extends React.Component {
  state = { 
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
   };

  
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState ({ loading: true, error: null})
    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState ({ loading: false, form: data})
      }
      catch (error) {
        this.setState ({ loading: false, error: error})        
      }      
    }

  handleChange = e => {
    // const nextForm = this.state.form
    // nextForm[e.target.name] = e.target.value
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false})
      this.props.history.push('/badges')

    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading){
      return <PageLoading/>
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__img-fluid" src={header} alt="logo"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName|| 'LAST_NAME'}
                twitter={this.state.form.twitter|| 'twitter'}
                jobTitle={this.state.form.jobTitle||'JOB_TITLE'}
                email={this.state.form.email||'EMAIL'}
                avatarUrl="https://ui-avatars.com/api/?name=Nombre+Apellido"
              />
            </div>

            <div className="col-6">
            <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeEdit
