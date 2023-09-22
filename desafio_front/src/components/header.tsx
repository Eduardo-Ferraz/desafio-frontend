import Image from "next/image";
import styles from "../app/page.module.css";

export function Header() {
	return (
		<header>
			<div className={styles.header}>
				<Image
					src="/logo_industriall.png"
					width={182}
					height={45}
					alt="Logo da industriall"
				/>
			</div>
		</header>
	);
}
