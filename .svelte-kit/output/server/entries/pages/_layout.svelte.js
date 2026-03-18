import { e as escape_html, h as head, a as slot } from "../../chunks/index.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
function Nav($$renderer) {
  let siteName = "AS93";
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname.includes("aliciasykes.com")) {
      siteName = "Alicia Sykes";
    } else if (hostname.includes("lissy93.github.io")) {
      siteName = "Lissy93";
    }
  }
  $$renderer.push(`<section class="svelte-1jnx671"><a class="home svelte-1jnx671" href="/" title="Awesome Source Ninety Three">`);
  Icon($$renderer, {
    name: "terminal",
    width: "1.8rem",
    height: "1.8rem",
    color: "var(--primary)"
  });
  $$renderer.push(`<!----> <h1 class="svelte-1jnx671">${escape_html(siteName)}</h1></a> <nav class="svelte-1jnx671"><a href="https://aliciasykes.com/about" class="svelte-1jnx671">About</a> <a href="https://cv.aliciasykes.com" class="svelte-1jnx671">Resume</a> <a href="https://aliciasykes.com/blog" class="svelte-1jnx671">Blog</a> <a href="https://aliciasykes.com/contact" class="svelte-1jnx671">Contact</a></nav></section>`);
}
function _layout($$renderer, $$props) {
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<meta name="author" content="Alicia Sykes"/> <meta name="keywords" content="open source, code, privacy, security, linux, self-hosted, projects"/> <meta name="theme-color" content="#ec4899"/> <link rel="icon" href="/favicon.png" type="image/png"/> <link rel="apple-touch-icon" href="/favicon.png"/> `);
    $$renderer2.push(`<script defer="" data-domain="as93.net" src="https://no-track.as93.net/js/script.js"><\/script>`);
    $$renderer2.push(` <meta name="msvalidate.01" content="3B8A195ACDEB67AAA9AB3BBD8C37E3B6"/> `);
    $$renderer2.push(`<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "AS93",
			"url": "https://as93.net",
			"description": "Free and open source apps and services, which respect your privacy",
			"author": {
				"@type": "Person",
				"name": "Alicia Sykes",
				"url": "https://aliciasykes.com",
				"image": "https://as93.net/profile.jpg"
			}
		}
	<\/script>`);
  });
  $$renderer.push(`<div class="app">`);
  Nav($$renderer);
  $$renderer.push(`<!----> <!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--></div>`);
}
export {
  _layout as default
};
