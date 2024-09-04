import tailwindConfig from "tailwind.config";
import { useMediaQuery } from "./use-media-query";

const {
	theme: {
		extend: { screens },
	},
} = tailwindConfig;

export const useScreenXs = () => useMediaQuery(`(min-width: ${screens.xs})`);

export const useScreenSm = () => useMediaQuery(`(min-width: ${screens.sm})`);

export const useScreenMd = () => useMediaQuery(`(min-width: ${screens.md})`);

export const useScreenLg = () => useMediaQuery(`(min-width: ${screens.lg})`);

export const useScreenXl = () => useMediaQuery(`(min-width: ${screens.xl})`);
