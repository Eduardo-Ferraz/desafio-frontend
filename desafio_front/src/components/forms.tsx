import styles from "../styles/components.module.css";

import { useState } from "react";
import { Box, MenuItem, Select, TextField, colors } from "@mui/material";
import { formsColors } from "../styles/textField";
import FormsContent from "./formsContent";

export default function Forms(this: any) {
	const [tipo, setTipo] = useState<number>(0);
	const [local, setLocal] = useState<number>(0);

	const handleChangeLocal = (event: any) => {
		setLocal(event.target.value);
	};

	const handleChangeTipo = (event: any) => {
		setTipo(event.target.value);
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
						value={local}
						defaultValue={0}
						onChange={handleChangeLocal}
						sx={formsColors}
						required
					>
						{local === 0 && (
							<MenuItem value={0} disabled>
								<p style={{ color: "#7B7B7B" }}>Local *</p>
							</MenuItem>
						)}

						<MenuItem value={1}>Base 27</MenuItem>
						<MenuItem value={2}>Home Office</MenuItem>
						<MenuItem value={3}>Visitando Cliente</MenuItem>
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
							InputLabelProps={{ shrink: true }}
							variant="outlined"
							fullWidth
							sx={formsColors}
						/>
					</div>
				</Box>
				<Select
					id="tipo"
					value={tipo}
					defaultValue={0}
					onChange={handleChangeTipo}
					sx={formsColors}
					required
				>
					{tipo === 0 && (
						<MenuItem value={0} disabled>
							<p style={{ color: "#7B7B7B" }}>Tipo de Reunião *</p>
						</MenuItem>
					)}

					<MenuItem value={1}>Resumida</MenuItem>
					<MenuItem value={2}>Daily Scrum</MenuItem>
					<MenuItem value={3}>Sprint Retrospective</MenuItem>
					<MenuItem value={4}>
						Acompanhamento de OKRs (Objectives and Key Results)
					</MenuItem>
				</Select>
			</div>
			<FormsContent tipo={tipo} />
		</div>
	);
}
