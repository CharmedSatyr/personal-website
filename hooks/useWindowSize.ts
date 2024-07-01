"use client";

import { useEffect, useState } from "react";

const useWindowSize = (): number => {
	const [mounted, setMounted] = useState<boolean>(false);
	const [windowSize, setWindowSize] = useState<number>(0);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) {
			return;
		}
		setWindowSize(window.innerWidth), [];
	}, [mounted, windowSize]);

	useEffect(() => {
		const updateWindowSize = () => setWindowSize(window.innerWidth);

		window.addEventListener("resize", updateWindowSize);

		return () => window.removeEventListener("resize", updateWindowSize);
	}, [windowSize]);

	return windowSize;
};

export default useWindowSize;
