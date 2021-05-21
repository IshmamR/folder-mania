import React, {useContext} from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FoldersContext } from '../contexts/FoldersContext';

import {changeThemeToDark, changeThemeToLight} from '../themes/ThemeChanger';

import '../styles/navBar.css';

const NavBar = () => {
	const {theme, setTheme} = useContext(FoldersContext);
	const handleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light')
		theme === 'light' ? changeThemeToDark() : changeThemeToLight();
	}

	return (
		<header>
			<nav className="Nav">
				<div className="title">
					FolderMania
				</div>

				<div>
					<label>
						<Toggle
							defaultChecked={true}
							className="theme-toggler"
							icons={{
								checked: '🌞',
								unchecked: '🌙',
							}}
							onChange={handleTheme} 
						/>
					</label>
				</div>
			</nav>
		</header>
	)
}

export default NavBar;