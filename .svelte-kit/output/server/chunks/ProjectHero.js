import { n as noop, o as getContext, f as fallback, k as attr_style, e as escape_html, g as attr, c as bind_props } from "./index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "@sveltejs/kit/internal/server";
import "./root.js";
import { I as Icon } from "./Icon.js";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function ProjectHero($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    let meta = fallback($$props["meta"], () => ({}), true);
    const get = (key) => {
      const value = meta?.[key];
      return typeof value === "string" && value.trim() ? value : void 0;
    };
    const putCommasInBigNumber = (num) => {
      if (typeof num !== "number" || isNaN(num)) {
        return "";
      }
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    const repo = get("name") || project?.name;
    const name = get("title") || (get("name") || project?.name || "Untitled").replaceAll("-", " ");
    const description = get("description") ?? project?.description;
    const homepage = get("homepage") ?? project?.homepage;
    const githubUrl = repo ? `https://github.com/lissy93/${repo}` : project?.url;
    const docsUrl = get("docs");
    const dockerUrl = get("docker");
    const mirrorUrl = get("mirror");
    const crate = get("crate");
    const icon = get("icon");
    const screenshot = get("screenshot");
    const color = get("color");
    const license = get("license") || project?.license || "MIT";
    const stars = putCommasInBigNumber(get("stars") || project?.stars || 0);
    const author = get("author") || project?.user || "Lissy93";
    const language = get("language") || project?.language || "";
    const isArchived = get("archived") || project?.archived || false;
    $$renderer2.push(`<header${attr_style(color ? `--primary: ${color}` : "")} class="svelte-1kcghih"><div class="middle svelte-1kcghih"><div class="left svelte-1kcghih">`);
    if (name) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<h1 class="svelte-1kcghih">${escape_html(name)}</h1>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (description) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="subtitle svelte-1kcghih">${escape_html(description)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (icon) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img width="128"${attr("src", icon)} alt="Project icon"/>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="main-links svelte-1kcghih">`);
    if (githubUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="btn-link svelte-1kcghih"${attr("href", githubUrl)} target="_blank" rel="noopener">`);
      Icon($$renderer2, { name: "github", width: "20", height: "20" });
      $$renderer2.push(`<!----> View on GitHub</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (homepage) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="btn-link svelte-1kcghih"${attr("href", homepage)} target="_blank" rel="noopener">`);
      Icon($$renderer2, { name: "website", width: "20", height: "20" });
      $$renderer2.push(`<!----> View Website</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="links svelte-1kcghih">`);
    if (docsUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", docsUrl)} target="_blank" rel="noopener" class="svelte-1kcghih">`);
      Icon($$renderer2, { name: "docs", width: "20", height: "20" });
      $$renderer2.push(`<!----> <span class="svelte-1kcghih">Docs</span></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (dockerUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", dockerUrl)} target="_blank" rel="noopener" class="svelte-1kcghih">`);
      Icon($$renderer2, { name: "docker", width: "20", height: "20" });
      $$renderer2.push(`<!----> <span class="svelte-1kcghih">DockerHub</span></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (mirrorUrl) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", mirrorUrl)} target="_blank" rel="noopener" class="svelte-1kcghih">`);
      Icon($$renderer2, { name: "codeberg", width: "20", height: "20" });
      $$renderer2.push(`<!----> <span class="svelte-1kcghih">CodeBerg Mirror</span></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (crate) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a${attr("href", crate)} target="_blank" rel="noopener" class="svelte-1kcghih">`);
      Icon($$renderer2, { name: "rust", width: "20", height: "20" });
      $$renderer2.push(`<!----> <span class="svelte-1kcghih">Crates.io</span></a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (screenshot) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="right svelte-1kcghih"><img class="screenshot svelte-1kcghih"${attr("src", screenshot)} alt="Screenshot" loading="lazy"/></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="bottom svelte-1kcghih">`);
    if (language || stars && stars !== "0" || isArchived) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="chips svelte-1kcghih"><ul class="svelte-1kcghih">`);
      if (license) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="svelte-1kcghih">`);
        Icon($$renderer2, { name: "license", width: "14", height: "14" });
        $$renderer2.push(`<!----> License: ${escape_html(license)}</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (stars && stars !== "0") {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="svelte-1kcghih">`);
        Icon($$renderer2, { name: "star", width: "14", height: "14" });
        $$renderer2.push(`<!----> Stars: ${escape_html(stars)}</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (author) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="svelte-1kcghih">`);
        Icon($$renderer2, { name: "user", width: "14", height: "14" });
        $$renderer2.push(`<!----> Author: ${escape_html(author)}</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (language) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="svelte-1kcghih">`);
        Icon($$renderer2, { name: "language", width: "18", height: "14" });
        $$renderer2.push(`<!----> Language: ${escape_html(language)}</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (isArchived) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<li class="warn svelte-1kcghih">Archived</li>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p class="license svelte-1kcghih">Free &amp; open source, forever. <a${attr("href", githubUrl)} target="_blank" rel="noopener" class="svelte-1kcghih">${escape_html(name)}</a> is licensed under
			${escape_html(license)}
			© 2025 <a href="https://aliciasykes.com" target="_blank" rel="noopener" class="svelte-1kcghih">Alicia Sykes</a></p></div></header>`);
    bind_props($$props, { project, meta });
  });
}
export {
  ProjectHero as P,
  page as p
};
