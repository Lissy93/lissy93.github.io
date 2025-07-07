import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
const css = {
  code: "section.svelte-13sw29i.svelte-13sw29i{display:flex;justify-content:space-between;align-content:center;padding:0 1rem;gap:1rem;flex-wrap:wrap}section.svelte-13sw29i .home.svelte-13sw29i{display:flex;flex-direction:row;align-items:center;gap:1rem}section.svelte-13sw29i .home h1.svelte-13sw29i{margin:0;font-family:var(--font-heading);color:var(--primary);transition:all 0.5s ease-in-out;text-shadow:0 10px 10px rgba(99, 102, 241, 0.1);opacity:0.85}section.svelte-13sw29i .home.svelte-13sw29i:hover{text-decoration:none}section.svelte-13sw29i .home:hover h1.svelte-13sw29i{text-shadow:5px 15px 20px rgba(99, 102, 241, 0.35);opacity:1}section.svelte-13sw29i nav.svelte-13sw29i{display:flex;gap:1rem;height:fit-content;padding:1rem 0}section.svelte-13sw29i nav a.svelte-13sw29i{transition:all 0.2s ease-in-out;border-bottom:3px solid transparent}section.svelte-13sw29i nav a.svelte-13sw29i:hover{text-decoration:none;border-bottom:3px solid var(--primary)}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let siteName = "AS93";
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname.endsWith("aliciasykes.com")) {
      siteName = "Alicia Sykes";
    } else if (hostname.endsWith("lissy93.github.io")) {
      siteName = "Lissy93";
    }
  }
  $$result.css.add(css);
  return `<section class="svelte-13sw29i"><a class="home svelte-13sw29i" href="/" title="Awesome Source Ninety Three">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "terminal",
      width: "1.8rem",
      height: "1.8rem",
      color: "var(--primary)"
    },
    {},
    {}
  )} <h1 class="svelte-13sw29i">${escape(siteName)}</h1></a> <nav class="svelte-13sw29i" data-svelte-h="svelte-2lm850"><a href="https://aliciasykes.com/about" class="svelte-13sw29i">About</a> <a href="https://cv.aliciasykes.com" class="svelte-13sw29i">Resume</a> <a href="https://aliciasykes.com/blog" class="svelte-13sw29i">Blog</a>  <a href="https://aliciasykes.com/contact" class="svelte-13sw29i">Contact</a></nav> </section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-15ie2d1_START -->${$$result.title = `<title>AS93 | Alicia Sykes Project Catalog</title>`, ""}<meta name="author" content="Alicia Sykes"><link rel="canonical" href="https://as93.net"><meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes"><meta name="keywords" content="open source, code, privacy, security, linux, self-hosted, projects"><meta charset="UTF-8"><meta http-equiv="Content-Language" content="en"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"><meta name="theme-color" content="#ec4899"><link rel="icon" href="/favicon.png" type="image/png"><link rel="apple-touch-icon" href="/favicon.png"><meta property="og:type" content="website"><meta property="og:title" content="AS93 | Project Catalog"><meta property="og:description" content="Free & Open Source apps by Alicia Sykes"><meta property="og:image" content="https://as93.net/banner.png"><meta property="og:url" content="https://as93.net"><meta property="og:site_name" content="AS93"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="AS93 | Project Catalog"><meta name="twitter:description" content="Free & Open Source apps by Alicia Sykes"><meta name="twitter:image" content="https://as93.net/banner.png"><script defer data-domain="as93.net" src="https://no-track.as93.net/js/script.js" data-svelte-h="svelte-16hyxdw"><\/script><meta name="msvalidate.01" content="3B8A195ACDEB67AAA9AB3BBD8C37E3B6"><script type="application/ld+json" data-svelte-h="svelte-x0gm6">{
			"@context": "http://schema.org",
			"@type": "WebSite",
			"name": "AS93",
			"url": "https://as93.net"
		}
		{
		"@context": "http://schema.org",
		"@type": "Website",
		"headline": "AS93 | Alicia Sykes's Project Catalog",
		"image": [
			"https://as93.net/favicon.png",
			"https://as93.net/banner.png",
		],
		"datePublished": "2024-01-11T08:00:00+08:00",
		"dateModified": new Date().toString() || "2024-01-11T09:20:00+08:00",
		"author": {
			"@type": "Person",
			"name": "Alicia Sykes",
			"image": "https://as93.net/profile.jpg"
		},
		"publisher": {
			"@type": "Organization",
			"name": "AS93",
			"logo": { "@type": "ImageObject", "url": "https://as93.net/favicon.png" }
		},
		"description": "Free and open source apps and services, which respect your privacy",
	}<\/script><!-- HEAD_svelte-15ie2d1_END -->`, ""} <div class="app">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}  </div>`;
});
export {
  Layout as default
};
