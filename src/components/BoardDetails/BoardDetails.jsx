import React, { useState, useEffect } from "react";
import styles from "./BoardDetails.module.css";

const BoardDetails = ({ board }) => {
	let color;

	if (board.rating === "Good") {
		color = styles.lightGreen;
	} else if (board.rating === "Great") {
		color = styles.green;
	} else {
		color = styles.yellow;
	}

	return (
		<div className={styles.flex}>
			<span className={styles.rating + " " + color}>{board.rating}</span>
			<div className={styles.logoContainer}>
				<img
					className={styles.logo}
					src={board.logo_file}
					alt={`Logo for ${board.name} job board`}
				/>
			</div>
			<span className={styles.description}>{board.description}</span>
		</div>
	);
};

export default BoardDetails;
