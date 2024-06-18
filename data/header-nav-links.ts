const headerNavLinks = [
	{ href: "/", title: "Home" },
	{ href: "/now", title: "Now" },
	{ href: "/contact", title: "Contact" },
	{ href: "/about", title: "About" },
	{ href: "/games", title: "Games" },
];

if (process.env.NODE_ENV === "development") {
	headerNavLinks.push({ href: "/field-notes", title: "Field Notes" });
}

export default headerNavLinks;
