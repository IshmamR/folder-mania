import React from 'react';
import { FoldersProvider } from './contexts/FoldersContext';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
	return (
		<FoldersProvider>
			<div className="App">
				<NavBar />
				<Home />
				<Footer />
			</div>
		</FoldersProvider>
	);
}

export default App;
