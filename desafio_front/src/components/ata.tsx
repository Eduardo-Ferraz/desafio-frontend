import styles from "../styles/atas.module.css";
import { AtaItemProps } from "../interfaces/atasInter";

export function Ata(props: AtaItemProps) {
	function formatarData(data: any) {
		var day = data.slice(8, 10);
		var month = data.slice(5, 7);
		var year = data.slice(0, 4);
		var hora = data.slice(11, 16);
		return day + "/" + month + "/" + year + " às " + hora;
	}
	return (
		<div key={props.id} className={styles.ata}>
			<h3>{props.titulo}</h3>
			<p>
				{formatarData(props.dataInicio)} no local {props.localId}
			</p>
		</div>
	);
}
