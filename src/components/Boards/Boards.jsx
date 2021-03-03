import React, { useState, useEffect } from "react";
import BoardDetails from "../BoardDetails/BoardDetails";
import url from "../../constants/url";

import styles from "./Boards.module.css";

function Boards({ navigate }) {
	const [boards, setBoards] = useState([]);

	useEffect(() => {
		const fetchBoards = async () => {
			try {
				const response = await fetch(`${url}/boards`, {
					method: "GET",
					mode: "cors",
				});
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
			<div className={styles.nav}>
				<h1>Job Sources</h1>
			</div>
			<div className={styles.flex + " " + styles.body}>
				{boards.map((board) => {
					return (
						<div
							className={styles.item}
							key={board.id}
							onClick={() => handleClick(board.id)}
						>
							<BoardDetails board={board} />
						</div>
					);
				})}
			</div>
		</nav>
	);
}

export default Boards;
