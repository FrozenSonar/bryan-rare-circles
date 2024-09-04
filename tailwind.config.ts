import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import { nextui } from "@nextui-org/theme";
export default {
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.tsx",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-geist-sans)", ...fontFamily.sans],
			},
			screens: {
				xs: "360px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
} satisfies Config;
