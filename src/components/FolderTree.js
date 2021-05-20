import React, { useContext, useState } from 'react';
import { FoldersContext } from '../contexts/FoldersContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFolderOpen, faPlusSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import InsertFolderForm from './InsertFolderForm';
import DeleteFolderForm from './DeleteFolderForm';

const FolderTree = ({ id }) => {
	const {Folders} = useContext(FoldersContext);
	// console.log(Folders);

	return(
		<div className="main">
			<ul>
				{Folders.length > 0 &&
					<FolderTreeNode 
						key={Folders[0]?._id} 
						value={{folders: Folders, folder: Folders[0]}} 
					/>
				}
			</ul>
		</div>
	)
}

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
		console.log('')
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
				className="folderIcons"
			/>
			{folder?.name}
			<FontAwesomeIcon 
				icon={faTrash} 
				onClick={() => handleDeleteFolderBox(folder)}
				className="trashIcon"
			/>
			<FontAwesomeIcon 
				icon={plusIconSquare? faPlus : faPlusSquare} 
				onClick={() => handleInsertFolderBox(folder)}
				onMouseEnter={() => setPlusIcon(true)}
				onMouseLeave={() => setPlusIcon(false)}
				className="plusIcons"
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


export default FolderTree;