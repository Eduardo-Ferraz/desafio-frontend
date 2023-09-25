import styles from "../styles/components.module.css";

import { useEffect, useState } from "react";
import { Box, MenuItem, Select, TextField } from "@mui/material";
import { formsColors } from "../styles/textField";
import FormsContent from "./formsContent";
import { FormsProps, ILocal, ITipo } from "../interfaces/atasInter";

export default function Forms(props: FormsProps) {
	const [locaisData, setLocaisData] = useState<ILocal[] | null>();
	const [tiposData, setTiposData] = useState<ITipo[] | null>();
	const [idLocalEsc, setIDLocalEsc] = useState<number>(0);
	const [idTipoEsc, setIDTipolEsc] = useState<number>(0);
	const [tituloEsc, setTituloEsc] = useState<string>("");
	const [dataInicioEsc, setDataInicioEsc] = useState<any>();
	const [dataFimEsc, setDataFimEsc] = useState<any>();

	// Atualiza os Tipos de ata e Locais quando o usuário atualiza
	useEffect(() => {
		handleGetLocais();
		handleGetTiposForms();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.userData]);

	const handleGetLocais = async () => {
		try {
			const response = await props.atasRequest.get("Locais", {
				headers: {
					Authorization: `Bearer ${props.userData?.token}`,
				},
			});
			setLocaisData(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleGetTiposForms = async () => {
		const responseTipos = await props.atasRequest.get("TiposReuniao", {
			headers: {
				Authorization: `Bearer ${props.userData?.token}`,
			},
		});
		setTiposData(responseTipos.data);
	};

	const handleChangeTitulo = (e: any) => {
		setTituloEsc(e.target.value);
	};

	const handleChangeLocal = (e: any) => {
		setIDLocalEsc(e.target.value);
	};

	const handleChangeDataInicio = (e: any) => {
		setDataInicioEsc(e.target.value);
	};

	const handleChangeDataFim = (e: any) => {
		setDataFimEsc(e.target.value);
	};

	const handleChangeTipo = (e: any) => {
		setIDTipolEsc(e.target.value);
	};

	return (
		<div className={styles.forms}>
			<h2>Identificação</h2>
			<div>
				<Box
					sx={{
						marginBottom: "2.19rem",
					}}
				>
					<TextField
						id="titulo"
						label="Título"
						value={tituloEsc}
						onChange={handleChangeTitulo}
						variant="outlined"
						required
						fullWidth
						sx={formsColors}
					/>
				</Box>
				<Box
					sx={{
						marginBottom: "2.19rem",
					}}
				>
					<Select
						id="local"
						value={idLocalEsc}
						onChange={handleChangeLocal}
						sx={formsColors}
						required
					>
						{idLocalEsc === 0 && (
							<MenuItem value={0} disabled>
								<p style={{ color: "#7B7B7B" }}>Local *</p>
							</MenuItem>
						)}

						{locaisData?.map((item: any) => (
							<MenuItem key={item.id} value={item.id}>
								{item.nome}
							</MenuItem>
						))}
					</Select>
				</Box>
				<Box
					sx={{
						marginBottom: "2.19rem",
					}}
				>
					<div>
						<TextField
							id="dataHoraInicio"
							label="Data e Horário de Início"
							type="datetime-local"
							value={dataInicioEsc}
							onChange={handleChangeDataInicio}
							InputLabelProps={{ shrink: true }}
							variant="outlined"
							required
							fullWidth
							sx={formsColors}
						/>
						<TextField
							id="dataHoraFim"
							label="Data e Horário de Fim"
							type="datetime-local"
							value={dataFimEsc}
							onChange={handleChangeDataFim}
							InputLabelProps={{ shrink: true }}
							variant="outlined"
							fullWidth
							sx={formsColors}
						/>
					</div>
				</Box>
				<Select
					id="tipo"
					value={idTipoEsc}
					defaultValue={0}
					onChange={handleChangeTipo}
					sx={formsColors}
					required
				>
					{idTipoEsc === 0 && (
						<MenuItem value={0} disabled>
							<p style={{ color: "#7B7B7B" }}>Tipo de Reunião *</p>
						</MenuItem>
					)}

					{tiposData?.map((item: any) => (
						<MenuItem key={item.id} value={item.id}>
							{item.nome}
						</MenuItem>
					))}
				</Select>
			</div>
			<FormsContent tipo={idTipoEsc} setPage={props.setPage} />
		</div>
	);
}
