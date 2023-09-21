import styles from "./page.module.css";
import { Button } from "@mui/material";
import React, { useState } from "react";

interface ataItem {
	id: number;
	title: string;
	data: string;
	hora: string;
	local: string;
}

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<div>
					<h1>Atas de Reunião</h1>
					<p>Estas são as atas das últimas reuniões</p>
				</div>
				<Button>+ NOVA ATA</Button>
			</div>
			<div className={styles.list}>Lista de Atas</div>{" "}
		</main>
	);
}
