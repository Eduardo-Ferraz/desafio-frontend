export interface AtasSectionProps {
	id: number;
	title: string;
	atas: AtaItemProps[];
}

export interface AtaItemProps {
	id: number;
	title: string;
	data: string;
	hora: string;
	local: string;
}
