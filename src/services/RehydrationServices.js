import ReduxPersist from '../config/ReduxPersist'
import { persistStore } from 'redux-persist'

const updateReducers = (store: Object) => {
  const config = ReduxPersist.storeConfig
  const log = () => {}
  persistStore(store, config, log)
}

export default {updateReducers}
