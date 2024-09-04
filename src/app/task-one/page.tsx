"use client";

import { MOCK_USER_DETAILS_JSON } from "~/consts";
import type { UserDetail } from "~/types";
import TaskContainer from "../_components/task-container";
import UserAutocomplete from "./_components/user-autocomplete";

/**
 * Real-time search feature
 *
 *  Utilized `Next UI` for Autocomplete component
 *
 *  Can be improved by
 * - Adding Loading state for async data and operations
 * - Adding error states
 * - Adding more filtering by email, address, etc
 * - Adding avatars and subtext on selection
 * - Adding multi select user as a new component building on top of autocomplete
 * - Adding data validators such as `zod` for custom string inputs
 * - Adding search filters to limit results such as address, etc.
 */
export default function TaskOne() {
	const users: UserDetail[] = MOCK_USER_DETAILS_JSON.data;

	return (
		<TaskContainer>
			<h1 className="text-5xl font-extrabold tracking-tight sm:text-[4rem]">
				Real-time <span className="text-[hsl(280,100%,70%)]">search </span>
				feature
			</h1>

			<UserAutocomplete users={users} />
		</TaskContainer>
	);
}
