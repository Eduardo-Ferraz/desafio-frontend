import { Header } from "../components/header";

import "../styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const open_sans = Open_Sans({
	weight: ["400", "700"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Gestão de Atas",
	description: "IndustriAll",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={open_sans.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
