import { MetadataRoute } from "next";

import siteMetadata from "@/data/site-metadata";

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: siteMetadata.siteUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${siteMetadata.siteUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${siteMetadata.siteUrl}/words`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${siteMetadata.siteUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${siteMetadata.siteUrl}/now`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${siteMetadata.siteUrl}/games`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.5,
		},
		{
			url: `${siteMetadata.siteUrl}/code`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${siteMetadata.siteUrl}/colophon`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];
};

export default sitemap;
