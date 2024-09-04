"use client";

import TaskContainer from "../_components/task-container";
import { useMantineScreenMd } from "~/hooks/use-mantine-screen";

import CardComponent from "./_components/card-component";
import NavButtons from "./_components/nav-buttons";

/**
 *
 *  With React's new concurrent rendering, React maintains multiple versions of a UI simultaneously (concurrently), one visible and one work-in-progress. This allows the browser to handle events while rendering instead of being blocked, making the app feel more responsive.
 *
 *  But a problem with most current implementation of `useMediaQuery` in this example, Mantine's implementation, is that it doesn't utilize this new technology and still
 * 	utilizes `useState`, `useRef` and `useEffect`  which is for only a single version of the external state of a browser.
 *
 *  For this challenge, I utilized React's `useSyncExternalStore` to mitigate the edge case that can cause the UI to tear;
 *  where it show two different values for the same data at the same time.
 *
 *  `useSyncExternalStore` detects changes in external state during rendering and re-starts rendering before showing the inconsistent UI to the user. Because these updates are forced to be synchronous, React can guarantee that the UI will always be consistent
 *
 *  I also packaged `useMediaQuery` into a hook to be used across the project to check reliably for window screen changes and UI logic depending on screen size
 *
 */
export default function TaskThree() {
	const mantineMd = useMantineScreenMd();

	return (
		<TaskContainer>
			<div className="flex flex-col justify-center items-center gap-8">
				<HeaderText />
				<NavButtons />
				<div className="flex flex-col items-center gap-16">
					<CardComponent
						isMobile={!mantineMd}
						text="Without useSyncExternalStore"
					/>
				</div>
			</div>
		</TaskContainer>
	);
}

function HeaderText() {
	return (
		<div className="flex flex-col gap-8 text-center">
			<h1 className="text-4xl font-extrabold tracking-tight md:text-[4rem]">
				Open-ended <span className="text-[hsl(280,100%,70%)]">challenge</span>
			</h1>
			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold tracking-tight md:text-[2rem]">
					Implementing a new{" "}
					<span className="text-[hsl(234,55%,70%)]">useMediaQuery</span> with{" "}
					<span className="text-[hsl(234,55%,70%)]">useSyncExternalStore</span>
				</h2>
				<h4 className="text-md font-bold tracking-tight">
					(More explaination in the code)
				</h4>
			</div>
			<h2 className="text-xl font-bold tracking-tight md:text-[1.5rem]">
				Reload your browser{" "}
				<span className="text-[hsl(234,55%,70%)]">quickly </span> to see{" "}
				<span className="text-[hsl(0,78%,70%)]">hydration error</span>
			</h2>
		</div>
	);
}
