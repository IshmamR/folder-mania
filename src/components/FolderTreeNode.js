import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faPlusSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import InsertFolderForm from './InsertFolderForm';
import DeleteFolderForm from './DeleteFolderForm';

import '../styles/folderTreeNode.css';


const FolderTreeNode = (props) => {
	const {folders, folder} = props.value;
	const [childVisible, setChildVisibility] = useState(false);
	const [plusIconSquare, setPlusIcon] = useState(false);
	const [insertForm, setInsertForm] = useState(false);
	const [deleteForm, setDeleteForm] = useState(false);

	const children = folders?.filter(obj => {
		return obj.parent_id === folder?._id
	});
	// console.log(children); // children array
	const handleChildren = () => setChildVisibility(!childVisible);
	
	const handleInsertFolderBox = (parentFolder) => {
		setInsertForm(true);
	}
	const handleDeleteFolderBox = (folderToDelete) => {
		setDeleteForm(true);
	}

	return(
		<div className="li" style={{marginLeft:"10px"}}>
			{insertForm && 
				(<div className="insertFormOuter">
					<InsertFolderForm value={folder} visibility={[insertForm, setInsertForm]} />
				</div>)
			}
			{deleteForm && 
				(<div className="insertFormOuter">
					<DeleteFolderForm value={folder} visibility={[deleteForm, setDeleteForm]} />
				</div>)
			}

			<FontAwesomeIcon 
				onClick={handleChildren}
				icon={childVisible? faFolderOpen : faFolder} 
				className="folderIcons icon"
			/>
			<span className="folder-name" title={folder?.name}>
				{folder?.name.length > 16 ? folder?.name.slice(0,10)+'...' : folder?.name}
			</span>
			<FontAwesomeIcon 
				icon={faTrash} 
				onClick={() => handleDeleteFolderBox(folder)}
				className="trashIcon icon"
			/>
			<FontAwesomeIcon 
				icon={plusIconSquare? faPlus : faPlusSquare} 
				onClick={() => handleInsertFolderBox(folder)}
				onMouseEnter={() => setPlusIcon(true)}
				onMouseLeave={() => setPlusIcon(false)}
				className="plusIcons icon"
			/>
			<br />
			{children.length > 0 ? (
				childVisible && (children ?? []).map(fold => 
					<FolderTreeNode 
						key={fold?._id} 
						value={{folders: folders, folder: fold}} 
					/>
				)
			) : (
				<div>
					{childVisible? <h5 className="no-folder">-No folder here-</h5> : ""}
				</div>
			)}
				
		</div>
	)
}

export default FolderTreeNode;