import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import './App.scss';

function App() {
	return (
		<div className='body'>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Shop></Shop>}></Route>
				<Route path='shop' element={<Shop></Shop>}></Route>
				<Route path='order' element={<Order />}></Route>
				<Route path='inventory' element={<Inventory />}></Route>
				<Route path='login' element={<Login />}></Route>
				<Route path='*' element={<NotFound />}></Route>
			</Routes>
		</div>
	);
}

export default App;
