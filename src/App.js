import { Route, Routes, redirect, Navigate } from 'react-router-dom';
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
				<Route
					exact
					path='amazon-clone/'
					element={<Shop></Shop>}
				></Route>
				<Route
					exact
					path='amazon-clone'
					element={<Shop></Shop>}
				></Route>
				<Route
					exact
					path='amazon-clone/shop'
					element={<Shop></Shop>}
				></Route>
				<Route
					exact
					path='amazon-clone/order'
					element={<Order />}
				></Route>
				<Route
					exact
					path='amazon-clone/inventory'
					element={<Inventory />}
				></Route>
				<Route
					exact
					path='amazon-clone/login'
					element={<Login />}
				></Route>
				<Route
					exact
					path='amazon-clone/*'
					element={<NotFound></NotFound>}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
