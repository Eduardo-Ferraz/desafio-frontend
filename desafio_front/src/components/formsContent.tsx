import styles from "../styles/components.module.css";

import { useState } from "react";
import { TextField, TextFieldVariants } from "@mui/material";
import { formsColors } from "../styles/textField";
import { FormsContentProps } from "../interfaces/atasInter";

export default function FormsContent(props: FormsContentProps) {
	let textAreas = (
		<div>
			<p>Selecione o Tipo de Reunião</p>
		</div>
	);
	if (props.tipo === 1) {
		textAreas = (
			<TextField
				id="titulo"
				label="Título"
				variant="outlined"
				required
				fullWidth
				sx={formsColors}
				multiline
			/>
		);
	}
	return (
		<div className={styles.forms}>
			<h2>Conteúdo da Reunião</h2>
			{textAreas}
		</div>
	);
}
