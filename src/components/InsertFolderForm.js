import React, {useState, useContext} from 'react';
import axios from 'axios';
import { FoldersContext } from '../contexts/FoldersContext';

const InsertFolderForm = (props) => {
	const parentFolder = props.value;
	const [insertForm, setInsertForm] = props.visibility;
	const [name, setName] = useState('');
	const handleChange = (e) => {
		setName(e.target.value);
	}

	const {render, setRender} = useContext(FoldersContext);
	const handlePost = () => {
		if (name.trim() !== '') {
			axios.post('https://node-virtual-folder.herokuapp.com/folders', {
				name: String(name),
				parent_id: String(parentFolder._id)
			})
			.then(res => {
				console.log(res.data);
				setRender(!render);
				setInsertForm(false);
			})
			.catch(err => console.log(err) );
		}
	}

	return (
		<div className="InsertFormContainer cut-corner filled">
				<h4>Add folder in `{parentFolder?.name}`</h4>
				<input 
					type="text" 
					placeholder={"Folder name"} 
					value={name}
					onChange={handleChange}
					name="name"
				/>
				<div className="InsertFormBtns">
					<button onClick={handlePost}>Insert</button>
					<button onClick={() => setInsertForm(false)}>Cancel</button>
				</div>
		</div>
	);
}

export default InsertFolderForm;
