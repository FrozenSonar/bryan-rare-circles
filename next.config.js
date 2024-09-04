// @ts-check
import withPlaiceholder from "@plaiceholder/next";
await import("./src/env.js");

/**
 * @type {import('next').NextConfig}
 */
const config = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/id/**",
			},
		],
	},
};

export default withPlaiceholder(config);
