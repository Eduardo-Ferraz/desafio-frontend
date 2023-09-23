import styles from "../styles/atas.module.css";
import { AtaItemProps } from "../interfaces/atasInter";

export function Ata(props: AtaItemProps) {
	return (
		<div key={props.id} className={styles.ata}>
			<h3>{props.title}</h3>
			<p>
				{props.data} às {props.hora} em {props.local}
			</p>
		</div>
	);
}
