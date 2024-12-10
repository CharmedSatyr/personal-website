"use client";

import { useEffect, useState } from "react";

const useWindowSize = (): number => {
	const [windowSize, setWindowSize] = useState<number>(0);

	useEffect(() => {
		setWindowSize(window.innerWidth);
	}, [windowSize]);

	useEffect(() => {
		const updateWindowSize = () => setWindowSize(window.innerWidth);

		window.addEventListener("resize", updateWindowSize);

		return () => window.removeEventListener("resize", updateWindowSize);
	}, []);

	return windowSize;
};

export default useWindowSize;
