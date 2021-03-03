import React, { useState, useEffect } from "react";
import { useParams } from "@reach/router";

import styles from "./Jobs.module.css";

function Jobs() {
	const { boardId } = useParams();
	const [currentJobs, setJobs] = useState([]);
	const [board, setBoard] = useState([]);
	const [paging, setPaging] = useState({});

	const [limit] = useState(20);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(
					`http://20.62.246.134:3000/boards/${boardId}/jobs?limit=${limit}&offset=${offset}`
				);
				const { jobs, board, paging } = await response.json();

				setJobs([...currentJobs, ...jobs]);
				setBoard(board);
				setPaging(paging);
			} catch (error) {
				console.error(error);
			}
		};

		fetchJobs();
	}, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

	const clickMoreJobs = (e) => {
		e.preventDefault();
		setOffset(limit + offset);
	};

	return (
		<div className={styles.grid}>
			<h1 className={styles.nav}>Job Sources: {board.name}</h1>
			<table className={styles.body}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Company Name</th>
						<th>Job Title</th>
						<th>Job URL</th>
					</tr>
				</thead>
				<tbody>
					{currentJobs.map((job) => {
						return (
							<tr key={job.id}>
								<td>{job.id}</td>
								<td>{job.company_name}</td>
								<td>{job.title}</td>
								<td>
									<a href={job.url}>{job.url}</a>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{paging.page < paging.pages && (
				<div className={styles.footer}>
					<div className={styles.flex}>
						<button className={styles.button} onClick={clickMoreJobs}>
							Load more jobs
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default Jobs;
