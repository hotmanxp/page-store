import React, { Component } from 'react'
import {Input, Icon, Form, Button, Col } from 'antd'

const FormItem = Form.Item

class Login extends Component {
  onSubmit = e => {
    const { onSubmit, form } = this.props
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }
  render() {
    const { checking, err } = this.props
    const { getFieldDecorator } = this.props.form
    return (
      <Form
        onSubmit={this.onSubmit}
      >
        <FormItem>
          {
            getFieldDecorator('userName', {
              rules:[{
                required: true,
                message: 'Input something!',
              }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />
            )
          }
        </FormItem>
        <FormItem>
          {
            getFieldDecorator('password')(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
              />
            )
          }
        </FormItem>
        <Col span={24} style={{ textAlign: 'left' }}>
          {err}
        </Col>
        <FormItem style={{ textAlign: 'right', marginBottom: '0' }}>
          <Button
            htmlType='submit'
            type='primary'
            loading={checking}
            children='Submit'
          />
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Login)
