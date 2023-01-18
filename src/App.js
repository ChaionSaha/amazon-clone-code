import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';

function App() {
	return (
		<div className='body'>
			<Header></Header>
			<Routes>
				<Route element={<Shop></Shop>} path='/'></Route>
				<Route element={<Shop></Shop>} path='/shop'></Route>
				<Route element={<Order />} path='/order'></Route>
				<Route path='/inventory' element={<Inventory />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
		</div>
	);
}

export default App;
