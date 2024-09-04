"use client";

import { trpc } from "~/trpc/server";
import TaskContainer from "../_components/task-container";
import { ImageGrid } from "./_components/image-grid";
import { Spinner } from "@nextui-org/react";

/**
 *  Image optimization and lazy loading
 *
 *  Utilized `Image` from `NextJS` with lazy loading and
 *
 *  Utilized `Lorem Picsum` as Image API
 *
 * 	Utilized `trpc` for api calls for end to end typesafety
 *
 *  Utilized `Next UI` for `Popover` component for image metadata
 *
 *  Can be improved by
 * - Adding Loading state for async data and operations
 * - Adding blur using the npm module Plaiceholder for blur hashing
 * - Having our own image bucket service and database for storing blur hash for faster load times
 * - Having local images for important pictures load with priority such as headers to load fast enough, and lazy load the remote ones
 */
export default function TaskTwo() {
	const { data: photos, isLoading } = trpc.photo.getPics.useQuery();

	return (
		<TaskContainer>
			<h1 className="text-5xl font-extrabold tracking-tight gap-4 sm:text-[4rem]">
				Image <span className="text-[hsl(280,100%,70%)]"> optimization </span>{" "}
				and lazy loading
			</h1>
			{isLoading ? (
				<Spinner color="secondary" size="lg" className="mt-12" />
			) : (
				<ImageGrid images={photos} />
			)}
		</TaskContainer>
	);
}
