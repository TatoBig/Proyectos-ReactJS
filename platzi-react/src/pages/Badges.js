import React from 'react'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'
import confLogo from '../images/badge-header.svg'
import '../components/styles/Badges.css'
import { Link } from 'react-router-dom'
import api from '../api'

class Badges extends React.Component {  
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState ({loading: true, error: null})

    try {
      const data = await api.badges.list()
      this.setState({ loading: false, data: data})
    } catch (error) {
      this.setState({ loading: false, error: error})
    }
  }

  compomentWillUnmount() {
    clearInterval(this.intervalId)
  }

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     data: [],
  //   }
  // }
  // componentDidMount() {

  //   this.timeoutId = setTimeout(() => {
  //     this.setState({
  //       loading: true,
  //       data: undefined,
  //     })
  //   }, 3000)
  // }


  // componentDidUpdate(prevProps, prevState) {

  // }

  // componentWillUnmount() {
  //   clearTimeout(this.timeoutId)
  // }


  render(){
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading/>
    }

    if (this.state.error) {
      return <PageError error= {this.state.error}/>
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt=""/>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />

              {this.state.loading && <MiniLoader/>}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Badges
