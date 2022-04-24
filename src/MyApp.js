import { Provider } from 'react-redux'
import Header from './components/Header'
import Main from'./components/Main'
import store from './store'

const MyApp = () => {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Main />
      </>
    </Provider>
  )
}

export default MyApp