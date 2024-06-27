import { SVGProps } from "react";

export const ChevronDoubleUp = (svgProps: SVGProps<SVGSVGElement>) => (
	<svg
		width={15}
		height={15}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...svgProps}
	>
		<path d="M11.293 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 6.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6zM12 12.414l-5.293 5.293a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 12.414z" />
	</svg>
);

export const ChevronDoubleDown = (svgProps: SVGProps<SVGSVGElement>) => (
	<svg
		width={15}
		height={15}
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
		{...svgProps}
	>
		<path d="M5.293 6.293a1 1 0 0 1 1.414 0L12 11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414zm0 6a1 1 0 0 1 1.414 0L12 17.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" />
	</svg>
);
