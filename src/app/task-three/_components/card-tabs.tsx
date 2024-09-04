"use client";

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

interface CardTabsProps {
	isMobile: boolean;
}
const tabs = [
	{
		id: "about-me",
		label: "About Me",
		content:
			"Caramels jelly beans bonbon chupa chups icing. Cheesecake wafer pudding dessert gingerbread pastry sesame snaps cotton candy cake. Jelly beans sugar plum marshmallow brownie sugar plum marzipan. ",
	},
	{
		id: "experience",
		label: "Experience",
		content:
			"Pastry liquorice icing danish chupa chups donut pastry chupa chups lemon drops. Cupcake croissant dragée halvah candy marzipan marzipan lollipop croissant. ",
	},
	{
		id: "skills",
		label: "Skills",
		content:
			"Cotton candy danish cake sugar plum pie powder muffin. Marzipan pastry wafer jujubes carrot cake liquorice shortbread tiramisu.",
	},
];

export default function CardTabs({ isMobile }: CardTabsProps) {
	return (
		<div className="flex flex-col">
			<Tabs
				aria-label="Dynamic tabs"
				items={tabs}
				variant={isMobile ? "solid" : "underlined"}
			>
				{(item) => (
					<Tab key={item.id} title={item.label}>
						<Card>
							<CardBody>{item.content}</CardBody>
						</Card>
					</Tab>
				)}
			</Tabs>
		</div>
	);
}
