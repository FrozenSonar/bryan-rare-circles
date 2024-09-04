"use client";

import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { type Key, useState } from "react";
import type { UserDetail } from "~/types";
import { UserDetailsContent } from "./user-details-content";

interface UserAutocompleteProps {
	users: UserDetail[];
}

export default function UserAutocomplete({ users }: UserAutocompleteProps) {
	const [selectedUser, setSelectedUser] = useState<UserDetail | undefined>();

	const onSelectionChange = (key: Key | null) => {
		const user = users.find((user) => user.id === Number(key));
		setSelectedUser(user);
	};

	return (
		<div className="flex flex-col gap-4">
			<Autocomplete
				label="Search for a user..."
				className="max-w-xs"
				onSelectionChange={onSelectionChange}
				popoverProps={{ placement: "top", backdrop: "opaque" }}
			>
				{users.map((user) => (
					<AutocompleteItem key={user.id} value={user.id}>
						{user.full_name}
					</AutocompleteItem>
				))}
			</Autocomplete>
			<UserDetailsContent user={selectedUser} />
		</div>
	);
}
