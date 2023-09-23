import styles from "../styles/titleHeader.module.css";
import { TitleProps } from "../interfaces/atasInter";
import { Button } from "@mui/material";

export function Title(props: TitleProps) {
	function handleClick() {
		if (props.setPage !== null) {
			props.setPage(1);
		}
	}

	let botao = null;
	if (props.setPage !== null) {
		botao = <Button onClick={handleClick}>+ NOVA ATA</Button>;
	}

	return (
		<div className={styles.title}>
			<div>
				<h1>{props.title}</h1>
				<p>{props.desc}</p>
			</div>
			{botao}
		</div>
	);
}
