import styles from "../styles/components.module.css";
import { Button, TextField } from "@mui/material";
import { formsColors } from "../styles/textField";
import { FormsContentProps } from "../interfaces/atasInter";

export default function FormsContent(props: FormsContentProps) {
	let textAreas = (
		<span>
			<p>Selecione o Tipo de Reunião</p>
		</span>
	);

	if (props.tipo === 1) {
		textAreas = (
			<span>
				<h3> Descrição dos Ocorridos</h3>
				<TextField
					id="descOcorridos"
					variant="outlined"
					required
					fullWidth
					sx={formsColors}
					multiline
					rows={6}
				/>
			</span>
		);
	}
	return (
		<div className={styles.formsContent}>
			<h2>Conteúdo da Reunião</h2>
			{textAreas}
			<div className={styles.buttonGroup}>
				<Button className={styles.buttonCancel}>cancelar</Button>
				<Button className={styles.buttonSave}>salvar ata</Button>
			</div>
		</div>
	);
}
