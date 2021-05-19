import React, { useContext, useState } from 'react';
import { FoldersContext } from '../contexts/FoldersContext';


const FolderTree = ({ id }) => {
	const {Folders} = useContext(FoldersContext);
	// console.log(Folders);

	return(
		<div>
			<FolderTreeNode 
				key={Folders[0]?._id} 
				value={{folders: Folders, folder: Folders[0]}} 
			/>
		</div>
	)
}

const FolderTreeNode = (props) => {
	const {folders, folder} = props.value;
	const [childVisible, setChildVisibility] = useState(false);
	// console.log(folder?.root);

	const children = folders?.filter(obj => {
		return obj.parent_id === folder?._id
	});
	// console.log(children); // children array
	const handleChildren = () => {
		setChildVisibility(!childVisible);
	}

	return(
		<div style={{marginLeft:"10px"}}>
			<button 
				onClick={handleChildren}
			>
				{childVisible ? 'v' : '>'}
			</button>
			{folder?.name}
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
						{childVisible? "No folder here" : ""}
					</div>
				)}
				
		</div>
	)
}


export default FolderTree;