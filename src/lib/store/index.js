import { connectStore_1, connectStore_2, connectStoreWithMethods } from './store'
import StoreBase from './base'
import connect from './connect'
import GlobalStore from './globalStore'

const globalStore = new GlobalStore({userName: null})
const connectGlobal = connect(globalStore)


export {
  StoreBase,
  connect,
  connectGlobal,
  connectStore_1,
  connectStore_2,
  connectStoreWithMethods
}

