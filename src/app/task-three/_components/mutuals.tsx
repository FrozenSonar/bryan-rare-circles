"use client";

import { Avatar, AvatarGroup } from "@nextui-org/react";

interface MutualsProps {
	isMobile: boolean;
}

export default function Mutuals({ isMobile }: MutualsProps) {
	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-sm text-start">Mutuals</h2>
			<AvatarGroup isBordered max={isMobile ? 2 : 4}>
				<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
				<Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
				<Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
				<Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
				<Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
				<Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
			</AvatarGroup>
		</div>
	);
}
