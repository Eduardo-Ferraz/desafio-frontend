import { Dispatch, SetStateAction } from "react";

export interface AtasSectionProps {
	id: number;
	title: string;
	atas?: AtaItemProps[];
}

export interface AtaItemProps {
	id: number;
	title: string;
	data: string;
	hora: string;
	local: string;
}

export interface TitleProps {
	title: string;
	desc: string;
	setPage: Dispatch<SetStateAction<number>> | null;
}

export interface FormsProps {
	setPage: Dispatch<SetStateAction<number>>;
}

export interface FormsContentProps {
	tipo: number;
	setPage: Dispatch<SetStateAction<number>>;
}
