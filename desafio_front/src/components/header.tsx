import Image from "next/image";
import styles from "../styles/titleHeader.module.css";

export function Header() {
	return (
		<header>
			<a
				className={styles.header}
				href="https://industriall.ai/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src="/logo_clara.svg"
					width={182}
					height={45}
					alt="Logo da industriall"
				/>
			</a>
		</header>
	);
}
