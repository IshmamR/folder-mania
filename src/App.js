import React from 'react';
import { FoldersProvider } from './contexts/FoldersContext';
import Home from './pages/Home';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<FoldersProvider>
			<div className="App">
				<NavBar />
				<Home />
			</div>
		</FoldersProvider>
	);
}

export default App;
