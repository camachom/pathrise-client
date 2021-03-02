import React, { useState, useEffect } from "react";
import { useParams } from "@reach/router";

function Jobs() {
	const { boardId } = useParams();
	const [board, setBoard] = useState([]);

	useEffect(() => {
		const fetchBoard = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/boards/${boardId}/jobs`
				);
				const data = await response.json();
				setBoard(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchBoard();
	});

	return (
		<div>
			<span>{boardId}</span>
			<div>{JSON.stringify(board)}</div>
		</div>
	);
}

export default Jobs;
