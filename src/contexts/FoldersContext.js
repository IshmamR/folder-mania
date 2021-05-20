import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const FoldersContext = createContext();

export const FoldersProvider = (props) => {
	const [Folders, setFolders] = useState([]);
	const [render, setRender] = useState(false);

	useEffect(() => {
		axios.get('https://node-virtual-folder.herokuapp.com/folders')
			.then(res => {
				return res.data;
			})
			.then(data => {
				setFolders(data);
			})
			.catch(err => console.log(err) );
		console.log('rendered');
	}, [render]);

	return (
		<FoldersContext.Provider value={{Folders, setFolders, setRender}}>
			{props.children}
		</FoldersContext.Provider>
	)
}
