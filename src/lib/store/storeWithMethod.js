import Store from './base'

class StoreWithMethods extends Store {
  setName = name => {
    this.setState({name})
  }
  toggleShow = () => {
    this.setState({showChild: !this.state.showChild})
  }
}

export default StoreWithMethods
