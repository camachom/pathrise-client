import React, { useState, useEffect } from "react";
import styles from "./BoardDetails.module.css";

const BoardDetails = ({ board }) => {
	return (
		<div className={styles.flex}>
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
