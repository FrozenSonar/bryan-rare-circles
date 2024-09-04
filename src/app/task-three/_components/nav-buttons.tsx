"use client";

import { Button } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function NavButtons() {
	const router = useRouter();
	const pathname = usePathname();
	const isWithSyncPage = pathname.includes("with-sync");

	return (
		<div className="flex flex-row gap-4">
			<Button
				size="lg"
				color="secondary"
				isDisabled={!isWithSyncPage}
				onClick={() => router.push("/task-three")}
			>
				Without
			</Button>
			<Button
				size="lg"
				color="secondary"
				isDisabled={isWithSyncPage}
				onClick={() => router.push("/task-three/with-sync")}
			>
				With
			</Button>
		</div>
	);
}
