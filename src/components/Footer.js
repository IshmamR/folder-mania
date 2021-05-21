import React from 'react';
import LOGO from '../images/logo.png';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Footer-top">
				<ul>
					<li>- 
						<a href="https://node-virtual-folder.herokuapp.com" target="_blank" rel="noreferrer">
							Visit the API
						</a>
					</li>
					<li>- 
						<a href="mailto:ishmam785@gmail.com">
							Contact Me
						</a>
					</li>
				</ul>
				
				<ul>
					<li>- 
						<a href="https://github.com/IshmamR/folder-mania" target="_blank" rel="noreferrer">
							Github(Folder Mania)
						</a>
					</li>
					<li>-
						<a href="https://github.com/IshmamR/node-virtual-folder" target="_blank" rel="noreferrer">
							Github(node-virtual-folder)
						</a>
					</li>
				</ul>
			</div>
			<hr />
			<div className="Footer-bottom">
				<img src={LOGO} alt="Logo" />
				<br />
				Developed by <a href="https://ishmam-r.web.app" target="_blank" rel="noreferrer">Ishmam</a>
			</div>
		</div>
	);
}

export default Footer;
