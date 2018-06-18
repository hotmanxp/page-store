import Base from './base'

class GlobalStore extends Base {
  login = ({userName, password}) => {
    this.setState({loading: true})
    return new Promise((res, rej) => {
      setTimeout(() => {
        this.setState({loading: false})
        if (userName !== password) return(res(true))
        this.setState({userName})
        return(res(false))
      }, 1500)
    })
  }

  logout = () => {
    this.setState({userName: null})
  }

 get hasLogin () {
    return true
  }

}
export default GlobalStore
