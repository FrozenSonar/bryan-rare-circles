import LinkPageButton, {
	type LinkPageButtonProps,
} from "./_components/link-page-button";

const links: LinkPageButtonProps[] = [
	{
		href: "/task-one",
		title: "Task 1 →",
		description: "Real-time search feature",
	},
	{
		href: "/task-two",
		title: "Task 2 →",
		description: "Image optimization and lazy loading",
	},
	{
		href: "/task-three",
		title: "Task 3 →",
		description: "Open-ended challenge",
	},
];
export default async function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-8 px-4 py-16">
			<h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
				<span className="text-[hsl(280,100%,70%)]">RareCircles</span> Tasks
			</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-4">
				{links.map((link) => (
					<LinkPageButton
						key={link.href}
						href={link.href}
						title={link.title}
						description={link.description}
					/>
				))}
			</div>
		</div>
	);
}
