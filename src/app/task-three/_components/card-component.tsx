"use client";

import { Card } from "@nextui-org/react";

import Mutuals from "./mutuals";
import AppointmentContent from "./appointment-content";
import UserContent from "./user-content";

interface ImageCardProps {
	text: string;
	isMobile: boolean;
}

export default function CardComponent({ text, isMobile }: ImageCardProps) {
	return (
		<div className="flex flex-col items-center w-full justify-center gap-4">
			<h1 className="text-2xl font-bold mb-8 text-center md:text-[2rem]">
				{text}
			</h1>
			<Card className="max-w-[50rem] md:w-[50rem] p-6">
				<div className={"flex flex-col p-4 gap-4"}>
					<UserContent isMobile={isMobile} />
					<div className="flex flex-col gap-8">
						<Mutuals isMobile={isMobile} />
						<AppointmentContent />
					</div>
				</div>
			</Card>
		</div>
	);
}
