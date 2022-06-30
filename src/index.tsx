import { createRoot } from 'react-dom/client'
import './styles/index.sass'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = createRoot(
	document.getElementById('root') as HTMLElement
)
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)