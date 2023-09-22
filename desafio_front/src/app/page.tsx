"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";

import styles from "./page.module.css";
import { AtasSection } from "@/components/atasSection";
import { AtasSectionProps } from "@/interfaces/atasInter";

const teste: AtasSectionProps[] = [
	{
		id: 0,
		title: "Acompanhamento de OKRs (Objectives and Key Results)",
		atas: [
			{
				id: 0,
				title: "Titulo 1",
				data: "hoje",
				hora: "agora",
				local: "aqui",
			},
			{
				id: 1,
				title: "Titulo 2",
				data: "f",
				hora: "g",
				local: "h",
			},
			{
				id: 2,
				title: "Titulo 23287",
				data: "ffdfs",
				hora: "gfsgsgdsf",
				local: "hgdsfsdf",
			},
		],
	},
	{
		id: 1,
		title: "Daily Scrum",
		atas: [
			{
				id: 1,
				title: "Titulo 2",
				data: "a",
				hora: "b",
				local: "c",
			},
		],
	},
];

export default function Home() {
	const [sectionList, setSectionList] = useState<AtasSectionProps[]>(teste);

	return (
		<main className={styles.main}>
			<div className={styles.title}>
				<div>
					<h1>Atas de Reunião</h1>
					<p>Estas são as atas das últimas reuniões</p>
				</div>
				<Button>+ NOVA ATA</Button>
			</div>
			<div className={styles.list}>
				{sectionList.map((item, index) => (
					<div key={item.id}>
						<AtasSection {...item} />
					</div>
				))}
			</div>
		</main>
	);
}
