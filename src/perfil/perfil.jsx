import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header, Container } from 'semantic-ui-react'

class Perfil extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  render() {
    const { name, email } = this.props.user
    return (
      <Container className='page-content'>
        <Header
          className='profile-header'
          as='h2'
          textAlign='center'
          icon
        >
          <div className="user-header">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Default_profile_picture_%28male%29_on_Facebook.jpg"
              className="img-circle" alt="User Image" />
            <p>{name}</p><p className="text"><small>{email}</small></p>
          </div>
        </Header>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ user: state.auth.user })
export default connect(mapStateToProps, null)(Perfil)