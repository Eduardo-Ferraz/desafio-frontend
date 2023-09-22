"use client";

import React, { useState } from "react";
import styles from "../styles/pageHome.module.css";
import { AtasSection } from "../components/atasSection";
import { Title } from "../components/title";
import { AtasSectionProps } from "../interfaces/atasInter";

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
		title: "Daily Scrumii",
		atas: undefined,
		// [
		// {
		// 	id: 1,
		// 	title: "Titulo 2",
		// 	data: "a",
		// 	hora: "b",
		// 	local: "c",
		// },
		// ],
	},
];

export default function Page() {
	const [sectionList, setSectionList] = useState<AtasSectionProps[]>(teste);
	const [page, setPage] = useState<number>(0);

	let titulo = "";
	let desc = "";
	let setar = null;
	let lista = null;

	if (page === 0) {
		titulo = "Atas de Reunião";
		desc = "Estas são as atas das últimas reuniões";
		setar = setPage;
		lista = (
			<div className={styles.list}>
				{sectionList.map((item, index) => (
					<div key={item.id}>
						<AtasSection {...item} />
					</div>
				))}
			</div>
		);
	} else if (page === 1) {
		titulo = "Nova Ata de Reunião";
		desc = "Os campos obrigatórios estão marcados com um asterisco (*)";
	}

	return (
		<main className={styles.main}>
			<Title title={titulo} desc={desc} setPage={setar} />
			{lista}
		</main>
	);
}
