import styles from "../styles/atas.module.css";
import { AtasSectionProps } from "../interfaces/atasInter";
import { AtaItemProps } from "../interfaces/atasInter";
import { Ata } from "./ata";
import { useState } from "react";

export function AtasSection(props: AtasSectionProps) {
	const [atasList, setAtasList] = useState<AtaItemProps[] | undefined>(
		props.atas
	);

	return (
		<div className={styles.atasSection}>
			<h2>{props.title}</h2>

			{atasList?.map((item, index) => (
				<div key={item.id}>
					<Ata {...item} />
				</div>
			))}
		</div>
	);
}
