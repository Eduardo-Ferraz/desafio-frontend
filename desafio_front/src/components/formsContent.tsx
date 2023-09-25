import styles from "../styles/components.module.css";
import { Button, TextField } from "@mui/material";
import { formsColors } from "../styles/textField";
import { FormsContentProps } from "../interfaces/atasInter";

export default function FormsContent(props: FormsContentProps) {
	const handleCancel = () => {
		props.setPage(0);
	};
	const handleConfirm = () => {};

	let textAreas = (
		<span>
			<p>Selecione o Tipo de Reunião</p>
		</span>
	);

	if (props.tipo === 1) {
		textAreas = (
			<span>
				<div className={styles.mtSmall}>
					<h3>Descrição dos Ocorridos</h3>
				</div>
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
	if (props.tipo === 2) {
		textAreas = (
			<span>
				<div className={styles.mtSmall}>
					<h3>O que foi feito hoje?</h3>
				</div>
				<TextField
					id="feitoHoje"
					variant="outlined"
					required
					fullWidth
					sx={formsColors}
					multiline
					rows={6}
				/>
				<div className={styles.mtBig}>
					<h3>O que será feito amanhã?</h3>
				</div>
				<TextField
					id="fazerAmanha"
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
	if (props.tipo === 3) {
		textAreas = (
			<span>
				<div className={styles.mtSmall}>
					<TextField
						id="dataFimSprint"
						label="Data de Fim da Sprint"
						type="date"
						InputLabelProps={{ shrink: true }}
						variant="outlined"
						required
						sx={formsColors}
					/>
				</div>
				<div className={styles.mtBig}>
					<h3>Avaliação da Sprint</h3>
				</div>
				<TextField
					id="avaliacaoSprint"
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
	if (props.tipo === 4) {
		textAreas = (
			<span>
				<div className={styles.mtSmall}>
					<TextField
						id="dataInicioTrimestre"
						label="Data de Início do Trimestre"
						type="date"
						InputLabelProps={{ shrink: true }}
						variant="outlined"
						required
						fullWidth
						sx={formsColors}
					/>
				</div>
				<div className={styles.mtBig}>
					<TextField
						id="objetivoTrimestre"
						label="Objetivo Principal do Trimestre"
						variant="outlined"
						required
						fullWidth
						sx={formsColors}
					/>
				</div>
				<div className={styles.mtBig}>
					<h3>Resultados Obtidos Durante os Meses</h3>
				</div>
				<TextField
					id="resultadosObtidos"
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
				<Button className={styles.buttonCancel} onClick={handleCancel}>
					cancelar
				</Button>
				<Button className={styles.buttonSave} onClick={handleConfirm}>
					salvar ata
				</Button>
			</div>
		</div>
	);
}
