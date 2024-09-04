import Link from "next/link";

export interface LinkPageButtonProps {
	href: string;
	title: string;
	description: string;
}

export default function LinkPageButton({
	href,
	title,
	description,
}: LinkPageButtonProps) {
	return (
		<Link
			className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
			href={href}
		>
			<h3 className="text-2xl font-bold">{title}</h3>
			<div className="text-lg">{description}</div>
		</Link>
	);
}
