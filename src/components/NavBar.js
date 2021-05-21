import React, {useContext} from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import LOGO from '../images/logo.png';
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
					<img src={LOGO} alt="Logo" />FolderMania
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