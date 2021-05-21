import React, { useContext } from 'react';
import { FoldersContext } from '../contexts/FoldersContext';
import FolderTreeNode from './FolderTreeNode';
import Loader from './Loader';

import '../styles/folderTree.css';

const FolderTree = ({ id }) => {
	const {Folders} = useContext(FoldersContext);
	// console.log(Folders);

	return(
		<>
		{Folders?.length > 0 ? (
			<div className="main shadow">
				<ul>
					<FolderTreeNode 
						key={Folders[0]?._id} 
						value={{folders: Folders, folder: Folders[0]}} 
					/>
				</ul>
			</div>
			) : (
				<Loader />
			)
		}
		</>
	)
}




export default FolderTree;