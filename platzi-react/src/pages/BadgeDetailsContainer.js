import React from 'react'
import BadgesList from '../components/BadgesList'
import PageLoading from '../components/PageLoading'
import MiniLoader from '../components/MiniLoader'
import PageError from '../components/PageError'
import confLogo from '../images/platziconf-logo.svg'
import '../components/styles/Badges.css'
import { Link } from 'react-router-dom'
import api from '../api'
import Badge from '../components/Badge'
import BadgeDetails from './BadgeDetails'

class BadgeDetailsContainer extends React.Component {  
    state = {
        loading: true,
        erro: null,
        data: undefined,
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, data: data})
        }
        catch (error) {
            this.setState({loading: false, error: error})

        }
    }
    handleOpenModal = e => {
        this.setState({modalIsOpen: true})
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen: false})
    }

    handleOnDeleteBadge = async e => {
        this.setState({loading: true, error: null})

        try {
            api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error})
        }
        
    }

    render() {
        if(this.state.loading){
            return <PageLoading/>
        }
        
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        const badge = this.state.data


        return (
            <React.Fragment>
                <BadgeDetails 
                    onCloseModal={this.handleCloseModal} 
                    onOpenModal={this.handleOpenModal}
                    modalIsOpen={this.state.modalIsOpen}
                    onDeleteBadge={this.handleOnDeleteBadge}
                    badge={this.state.data}
                />
            </React.Fragment>
        )
    }
}

 
export default BadgeDetailsContainer
