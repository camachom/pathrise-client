import React, { useState, useEffect } from "react";
import BoardDetails from "../BoardDetails/BoardDetails";

import styles from "./Boards.module.css";

function Boards({ navigate }) {
	const [boards, setBoards] = useState([]);

	useEffect(() => {
		const fetchBoards = async () => {
			try {
				const response = await fetch("http://localhost:3000/boards");
				const data = await response.json();

				setBoards(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchBoards();
	}, []);

	const handleClick = (id) => {
		navigate(`/boards/${id}`);
	};

	return (
		<nav className={styles.grid}>
			<h1 className={styles.nav}>Job Sources</h1>
			<div className={styles.flex + " " + styles.body}>
				{boards.map((board) => {
					return (
						<div className={styles.item} onClick={() => handleClick(board.id)}>
							<BoardDetails board={board} />
						</div>
					);
				})}
			</div>
		</nav>
	);
}

export default Boards;
