import { TRPCError } from "@trpc/server";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import type { Photo } from "~/types";

const BASE_PHOTO_LIST_URL = "https://picsum.photos";

export const photoRouter = createTRPCRouter({
	getPics: publicProcedure.query(async () => {
		const response = await fetch(`${BASE_PHOTO_LIST_URL}/v2/list`);

		if (!response.ok) {
			throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
		}

		const result = (await response.json()) as Photo[];
		return result;
	}),
});
