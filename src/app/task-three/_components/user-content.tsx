"use client";

import { Link, User } from "@nextui-org/react";

import CardTabs from "./card-tabs";

interface UserContentProps {
	isMobile: boolean;
}

export default function UserContent({ isMobile }: UserContentProps) {
	return (
		<div className="flex flex-col items-start gap-4">
			<div
				className={
					isMobile
						? "flex flex-col gap-4 w-full items-start px-4"
						: "flex flex-row justify-between gap-4 w-full px-4"
				}
			>
				<User
					name="Junior Garcia"
					description={
						<Link href="https://twitter.com/jrgarciadev" size="sm" isExternal>
							@jrgarciadev
						</Link>
					}
					avatarProps={{
						src: "https://avatars.githubusercontent.com/u/30373425?v=4",
						className: "w-16 h-16 text-large",
					}}
				/>
			</div>
			<CardTabs isMobile={isMobile} />
		</div>
	);
}
