const headerNavLinks = [
	{ href: "/", title: "Home" },
	{ href: "/now", title: "Now" },
	{ href: "/contact", title: "Contact" },
	{ href: "/about", title: "About" },
];

if (process.env.NODE_ENV === "development") {
	headerNavLinks.push({ href: "/field-notes", title: "Field Notes" });
	headerNavLinks.push({ href: "/games", title: "Games" });
}

export default headerNavLinks;
