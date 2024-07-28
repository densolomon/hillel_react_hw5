import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import MenuPage from './pages/MenuPage/MenuPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<LoginPage/>}/>
					<Route path="/menu" element={<MenuPage/>}/>
					<Route path="*" element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
