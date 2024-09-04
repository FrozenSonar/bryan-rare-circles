"use client";

import Image from "next/image";
import type { Photo } from "~/types";
import { useHover } from "~/hooks/use-hover";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

interface ImageComponentProps {
	image: Photo;
}

const PRIORITY_INDEX_COUNT = 3;
const IMAGE_WIDTH = 600;
const IMAGE_HEIGHT = 400;
const BASE_IMAGE_URL = "https://picsum.photos/id";

export function ImageComponent({ image }: ImageComponentProps) {
	const { ref, hovered } = useHover();
	const finalImageUrl = `${BASE_IMAGE_URL}/${image.id}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}`;
	const imageNumber = Number(image.id) + 1;

	return (
		<Popover placement="bottom" showArrow={true} isOpen={hovered}>
			<PopoverTrigger disabled>
				<div ref={ref} className="h-56 object-cover">
					<Image
						className="h-full w-full object-cover"
						src={finalImageUrl}
						alt={image.author}
						width={IMAGE_WIDTH}
						height={IMAGE_HEIGHT}
						priority={imageNumber < PRIORITY_INDEX_COUNT} // Only the first 3 images are eagerly loaded.
					/>
				</div>
			</PopoverTrigger>
			<PopoverContent>
				<div className="px-1 py-2">
					<div className="flex flex-col">
						<h3 className="text-lg font-bold">{`${imageNumber} - ${image.author}`}</h3>
						<h4 className="text-medium">{image.download_url}</h4>
						<h4 className="text-medium">{image.url}</h4>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
