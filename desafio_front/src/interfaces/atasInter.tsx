import { Dispatch, SetStateAction } from "react";

export interface ILogin {
	email: string | undefined;
	password: string | undefined;
}

export interface ITipo {
	id: number;
	nome: string;
	campos: any;
	atas: AtaItemProps[] | undefined;
}

export interface AtaItemProps {
	id: number;
	titulo: string;
	dataInicio: string;
	dataFim: string;
	tipoReuniaoId: number;
	localId: number;
	camposAtaReuniao: [
		{
			campoId: number;
			valor: string;
		}
	];
}

export interface TitleProps {
	title: string;
	desc: string;
	setPage: Dispatch<SetStateAction<number>> | null;
}

export interface FormsProps {
	setPage: Dispatch<SetStateAction<number>>;
	atasRequest: any;
	userData: any;
}

export interface ILocal {
	id: number;
	nome: string;
}

export interface FormsContentProps {
	tipo: number;
	setPage: Dispatch<SetStateAction<number>>;
}

export interface IUser {
	token: string;
	user: {
		id: number;
		fullName: string;
		userName: string;
		email: string;
		claims: [
			{
				type: string;
				value: string;
			},
			{
				type: string;
				value: string;
			},
			{
				type: string;
				value: string;
			},
			{
				type: string;
				value: string;
			},
			{
				type: string;
				value: string;
			}
		];
	};
}
