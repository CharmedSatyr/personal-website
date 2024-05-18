import { MetadataRoute } from "next";

import siteMetadata from "data/site-metadata";

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		//sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
		host: siteMetadata.siteUrl,
	};
};

export default robots;
