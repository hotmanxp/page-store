import React, { Component } from 'react'
import { Button, Modal, Row, Col, Menu, Icon, message, Dropdown } from 'antd'

import LoginForm from './login-form'

import { connectGlobal } from '../lib/store/'

 
class Login extends Component {
  state = {visible: false, err: null, checking: false}
  showLogin = () => {
    this.setState({visible: true})
  }
  submit = async userInfo => {
    const { login } = this.props
    const err = await login(userInfo)
    if(!err) {
      message.success('Login successfully')
      return this.setState({visible: false, err: null})
    }
    return this.setState({err: 'Password not correct...'})
  }
  showGrid = () => {
    Modal.info({
      title: 'Hello',
      content: <div>Hehe</div>,
      onOk: () => console.log('ok')
    })
  }
  render() {
    const { userName, logout, loading } = this.props
    const { err } = this.state
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={logout}>
          <a target="_blank" rel="noopener noreferrer" >Logout</a>
        </Menu.Item>
      </Menu>
    )
    return (<Row>
      <Col span={24} style={{textAlign: 'right', padding: '24px'}}>
        {
          !userName
            ? (<Button
              onClick={this.showLogin}
              type='primary'
              children='Login'
              />)
            : (
              <div>
                <Dropdown overlay={menu}>
                  <a className="ant-dropdown-link">
                    <span onClick={this.showGrid}>{`Hello, ${userName}`}</span> <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            )
        }
        <Modal
          title="Login"
          wrapClassName="vertical-center-modal"
          visible={this.state.visible}
          onCancel={() => this.setState({visible: false})}
          footer={null}
        >
          <LoginForm
            onSubmit={this.submit}
            checking={loading}
            err={err}
          />
        </Modal> 
      </Col>
    </Row>)
  }
}

export default connectGlobal(
  ({userName, loading}) => ({userName, loading}),
  ({login, logout}) => ({login, logout})

)(Login)
