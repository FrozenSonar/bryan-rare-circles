import { useCallback, useSyncExternalStore } from "react";

function getSnapshot(query: string) {
	const doesMatch = window.matchMedia(query).matches;
	return doesMatch;
}

function subscribe(onChange: () => void, query: string) {
	const mql = window.matchMedia(query);
	localStorage.setItem("window-matches", String(mql.matches));
	mql.addEventListener("change", onChange);

	return () => {
		mql.removeEventListener("change", onChange);
	};
}

export function useMediaQuery(query: string) {
	const subscribeMediaQuery = useCallback(
		(onChange: () => void) => {
			return subscribe(onChange, query);
		},
		[query],
	);

	const matches = useSyncExternalStore(
		subscribeMediaQuery,
		() => getSnapshot(query),
		() => false,
	);

	return matches;
}
