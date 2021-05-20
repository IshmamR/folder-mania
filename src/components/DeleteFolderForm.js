import React, {useContext} from 'react';
import axios from 'axios';
import { FoldersContext } from '../contexts/FoldersContext';

const DeleteFolderForm = (props) => {
	const folderToDelete = props.value;
	const [deleteForm, setDeleteForm] = props.visibility;
	
	const {render, setRender} = useContext(FoldersContext);
	const handleDelete = () => {
		axios.delete('https://node-virtual-folder.herokuapp.com/folders', {
			data: {
				id: String(folderToDelete._id)
			}
		})
		.then(res => {
			setRender(!render);
			setDeleteForm(false);
		})
		.catch((err) => console.log(err) );
	}

	return (
		<div className="InsertFormContainer cut-corner filled">
				<h4>Delete `{folderToDelete?.name}`?</h4>
				<div className="InsertFormBtns">
					<button onClick={handleDelete}>Yes</button>
					<button onClick={() => setDeleteForm(false)}>No</button>
				</div>
		</div>
	);
}

export default DeleteFolderForm;
