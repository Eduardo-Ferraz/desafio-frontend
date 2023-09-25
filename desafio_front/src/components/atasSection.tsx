import styles from "../styles/atas.module.css";
import { ITipo } from "../interfaces/atasInter";
import { Ata } from "./ata";

export function AtasSection(props: ITipo) {
	// Para exibir os locais de cada reunião e não apenas sua ID, precisariamos usar o handleGetLocais
	// Idealmente a função seria importada do axios.tsx

	return (
		<div className={styles.atasSection}>
			<h2>{props.nome}</h2>

			{props.atas?.map((item: any) => (
				<div key={item.id}>
					<Ata {...item} />
				</div>
			))}
		</div>
	);
}
