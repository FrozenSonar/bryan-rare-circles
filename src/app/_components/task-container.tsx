import { useRouter } from "next/navigation";

interface TaskContainerProps {
	children: React.ReactNode;
}

export default function TaskContainer({ children }: TaskContainerProps) {
	const router = useRouter();

	return (
		<div className="flex flex-col gap-4 p-16 justify-center">
			<button
				type="button"
				className="flex w-fit flex-col gap-4 rounded-xl bg-white/10 py-2 px-4 hover:bg-white/20"
				onClick={() => router.push("/")}
			>
				<h3 className="text-2xl font-bold">← Back</h3>
			</button>
			{children}
		</div>
	);
}
