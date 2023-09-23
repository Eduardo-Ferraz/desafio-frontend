import styles from "../styles/components.module.css";

import { useState } from "react";
import { TextField } from "@mui/material";
import { formsColors } from "../styles/textField";
import FormsContent from "./formsContent";

export default function Forms() {
	const [tipo, setTipo] = useState<number>(0);

	return (
		<div className={styles.forms}>
			<h2>Identificação</h2>
			<div>
				<TextField
					id="titulo"
					label="Título"
					variant="outlined"
					required
					fullWidth
					sx={formsColors}
				/>
				<TextField
					id="local"
					label="Local"
					variant="outlined"
					required
					fullWidth
					sx={formsColors}
				/>
				<div>
					<TextField
						id="dataHoraInicio"
						label="Data e Horário de Início"
						variant="outlined"
						required
						fullWidth
						sx={formsColors}
					/>
					<TextField
						id="dataHoraFim"
						label="Data e Horário de Fim"
						variant="outlined"
						required
						fullWidth
						sx={formsColors}
					/>
				</div>
				<TextField
					id="tipoReuniao"
					label="Tipo de Reunião"
					variant="outlined"
					required
					fullWidth
					sx={formsColors}
				/>
			</div>
			<FormsContent tipo={tipo} />
		</div>
	);
}
