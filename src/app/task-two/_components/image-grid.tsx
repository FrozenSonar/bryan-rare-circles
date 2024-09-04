import { ImageComponent } from "./image-component";
import type { Photo } from "~/types";

interface ImageGridProps {
	images?: Photo[];
}

export function ImageGrid({ images }: ImageGridProps) {
	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-xl">Hover each card for more details</h3>
			<div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-2">
				{images?.map((value) => (
					<ImageComponent key={value.id} image={value} />
				))}
			</div>
		</div>
	);
}
