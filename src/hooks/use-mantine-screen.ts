import tailwindConfig from "tailwind.config";
import { useMantineMediaQuery } from "./use-mantine-media-query";

const {
	theme: {
		extend: { screens },
	},
} = tailwindConfig;

export const useMantineScreenXs = () =>
	useMantineMediaQuery(`(min-width: ${screens.xs})`);

export const useMantineScreenSm = () =>
	useMantineMediaQuery(`(min-width: ${screens.sm})`);

export const useMantineScreenMd = () =>
	useMantineMediaQuery(`(min-width: ${screens.md})`);

export const useMantineScreenLg = () =>
	useMantineMediaQuery(`(min-width: ${screens.lg})`);

export const useMantineScreenXl = () =>
	useMantineMediaQuery(`(min-width: ${screens.xl})`);
