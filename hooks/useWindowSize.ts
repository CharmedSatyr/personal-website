"use client";

import { useEffect, useState } from "react";

export const useWindowSize = (): number => {
	const [isClient, setIsClient] = useState<boolean>(false);
	const [windowSize, setWindowSize] = useState<number>(0);

	useEffect(() => {
		setIsClient(true);
	}, []);

	useEffect(() => {
		if (!isClient) {
			return;
		}
		setWindowSize(window.innerWidth), [];
	});

	useEffect(() => {
		const updateWindowSize = () => setWindowSize(window.innerWidth);

		window.addEventListener("resize", updateWindowSize);

		return () => window.removeEventListener("resize", updateWindowSize);
	}, [windowSize]);

	return windowSize;
};
