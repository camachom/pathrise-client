import React, { useState, useEffect } from "react";
import { useParams } from "@reach/router";

import styles from "./Jobs.module.css";

function Jobs() {
	const { boardId } = useParams();
	const [jobs, setJobs] = useState([]);
	const [board, setBoard] = useState([]);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const response = await fetch(
					`http://localhost:3000/boards/${boardId}/jobs`
				);
				const { jobs, board } = await response.json();

				setJobs(jobs);
				setBoard(board);
			} catch (error) {
				console.error(error);
			}
		};

		fetchJobs();
	}, []);

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
					{jobs.map((job) => {
						return (
							<tr>
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
		</div>
	);
}

export default Jobs;
