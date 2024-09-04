import { useEffect, useRef, useState } from "react";

export function useHover<T extends HTMLElement = HTMLDivElement>() {
	const [hovered, setHovered] = useState(false);
	const ref = useRef<T>(null);

	useEffect(() => {
		if (ref.current) {
			const reference = ref.current;
			const onMouseEnter = () => setHovered(true);
			const onMouseLeave = () => setHovered(false);

			reference.addEventListener("mouseenter", onMouseEnter);
			reference.addEventListener("mouseleave", onMouseLeave);

			return () => {
				reference.removeEventListener("mouseenter", onMouseEnter);
				reference.removeEventListener("mouseleave", onMouseLeave);
			};
		}
	}, []);

	return { ref, hovered, setHovered };
}
