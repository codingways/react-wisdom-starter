import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'

const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    blacklist: ['account'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
