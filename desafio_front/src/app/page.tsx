"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/pageHome.module.css";
import { AtasSection } from "../components/atasSection";
import { Title } from "../components/title";
import { AtaItemProps, ILogin, IUser } from "../interfaces/atasInter";
import Forms from "../components/forms";
import { atasRequest } from "../services/axios";
import { Button, TextField } from "@mui/material";
import { formsColors } from "../styles/textField";

export default function Page() {
	const [loginData, setLoginData] = useState<ILogin | null>({
		email: "eduardo@teste.com",
		password: "eduardo@18",
	});
	const [userData, setUserData] = useState<IUser | null>();
	const [atasData, setAtasData] = useState<any>();
	const [tiposData, setTiposData] = useState<any>();
	const [page, setPage] = useState<number>(0);

	// Tive problemas ao realizar o POST request para a api, portanto para ilustrar o design completo deixei uma lista de atas de teste
	const [atasListTeste1, setAtasListTeste1] = useState<
		AtaItemProps[] | undefined
	>([
		{
			id: 0,
			titulo: "Reunião super produtiva",

			dataInicio: "2023-09-24T12:16:02.460Z",
			dataFim: "2023-09-24T01:18:02.460Z",
			tipoReuniaoId: 2,
			localId: 3,
			camposAtaReuniao: [
				{
					campoId: 0,
					valor: "string",
				},
			],
		},
		{
			id: 1,
			titulo: "Acompanhando projetos",

			dataInicio: "2023-09-24T15:10:02.460Z",
			dataFim: "2023-09-24T01:11:02.460Z",
			tipoReuniaoId: 1,
			localId: 1,
			camposAtaReuniao: [
				{
					campoId: 0,
					valor: "string",
				},
			],
		},
	]);

	// Atualiza as Atas quando o usuário atualiza
	useEffect(() => {
		if (userData) {
			handleGetAtas();
			handleGetTiposPage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData]);

	const handleLogin = async () => {
		try {
			const responseUser = await atasRequest.post("login", {
				userName: loginData?.email,
				password: loginData?.password,
			});
			setUserData(responseUser.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogout = () => {
		setUserData(null);
	};

	const handleGetAtas = async () => {
		const responseAtas = await atasRequest.get("Atas", {
			headers: {
				Authorization: `Bearer ${userData?.token}`,
			},
		});
		setAtasData(responseAtas.data);
	};

	const handleGetTiposPage = async () => {
		const responseTipos = await atasRequest.get("TiposReuniao", {
			headers: {
				Authorization: `Bearer ${userData?.token}`,
			},
		});
		setTiposData(responseTipos.data);
	};

	// Dando erro não sei o pq
	// const handlePostAta = async () => {
	// 	try {
	// 		await atasRequest.post("Atas", atas, {
	// 			headers: {
	// 				Authorization: `Bearer ${userData?.token}`,
	// 				"Content-Type": "application/json",
	// 			},
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	// Precisa de atas upadas para funcionar
	// const handlePutAta = async () => {
	// 	try {
	// 		await atasRequest.put("Atas/0", atas, {
	// 			headers: {
	// 				Authorization: `Bearer ${userData?.token}`,
	// 				"Content-Type": "application/json",
	// 			},
	// 		});
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };

	let titulo = "";
	let desc = "";
	let setar = null;
	let lista = null;

	if (page === 0) {
		titulo = "Atas de Reunião";
		desc = "Estas são as atas das últimas reuniões";
		setar = setPage;
		lista = (
			<>
				{tiposData?.map((item: any) => (
					<div key={item.id}>
						<AtasSection {...tiposData[item.id - 1]} atas={atasListTeste1} />
					</div>
				))}
				<Button onClick={handleLogout} className={styles.buttonLogout}>
					log out
				</Button>
			</>
		);
	}
	if (page === 1) {
		titulo = "Nova Ata de Reunião";
		desc = "Os campos obrigatórios estão marcados com um asterisco (*)";
		lista = (
			<Forms atasRequest={atasRequest} userData={userData} setPage={setPage} />
		);
	}

	const handleEmail = (e: any) => {
		setLoginData({ email: e.target.value, password: loginData?.password });
	};

	const handlePassword = (e: any) => {
		setLoginData({ email: loginData?.email, password: e.target.value });
	};

	return (
		<main className={styles.main}>
			{userData ? (
				<>
					<Title title={titulo} desc={desc} setPage={setar} />
					<div className={styles.list}>{lista}</div>
				</>
			) : (
				<div className={styles.loginContainer}>
					<p>Bem vindo(a) ao Módulo de Gestão de Atas!</p>
					<TextField
						defaultValue={loginData?.email}
						onChange={handleEmail}
						sx={formsColors}
						fullWidth
					/>
					<TextField
						defaultValue={loginData?.password}
						type="password"
						fullWidth
						onChange={handlePassword}
						sx={formsColors}
					/>
					<Button onClick={handleLogin} className={styles.buttonLogin}>
						login
					</Button>

					<p>
						Suas credenciais de teste já foram previamente preenchidas para sua
						conveniência
					</p>
				</div>
			)}
		</main>
	);
}
