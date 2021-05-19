import React from 'react';
import FolderTree from './components/FolderTree';
import { FoldersProvider } from './contexts/FoldersContext';

import './App.css';

const App = () => {
	return (
		<FoldersProvider>
			<div className="App">
				<FolderTree />
			</div>
		</FoldersProvider>
	);
}

export default App;
