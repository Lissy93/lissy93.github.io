import { i as getContext, c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import "./exports.js";
import { o as onMount } from "./ssr2.js";
import { I as Icon } from "./Icon.js";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
const is_legacy = onMount.toString().includes("$$") || /function \w+\(\) \{\}/.test(onMount.toString());
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
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
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
const css = {
  code: "header.svelte-1po4ls7.svelte-1po4ls7{align-items:center;background:var(--background);background:radial-gradient(circle, var(--background-lighter) 0%, var(--background) 50%);color:var(--primary);padding:1rem;min-height:100vh;display:flex;flex-direction:column}header.svelte-1po4ls7 .middle.svelte-1po4ls7{min-height:70vh;display:flex;justify-content:space-around;flex-wrap:wrap;gap:2rem}header.svelte-1po4ls7 .chips ul.svelte-1po4ls7{list-style:none;margin:0;padding:0;display:flex;gap:1rem;justify-content:center}header.svelte-1po4ls7 .chips ul li.svelte-1po4ls7{color:var(--foreground);border:2px solid var(--foreground-transparent);border-radius:4px;font-size:0.8rem;opacity:0.7;padding:0.2rem 0.5rem;display:flex;align-items:center;gap:0.25rem}header.svelte-1po4ls7 .chips ul li.warn.svelte-1po4ls7{color:var(--warning);border-color:var(--warning)}header.svelte-1po4ls7 h1.svelte-1po4ls7{margin:0;color:var(--primary);font-size:4rem;font-weight:600;font-family:var(--font-heading);text-shadow:2px 2px 3px #000}header.svelte-1po4ls7 .subtitle.svelte-1po4ls7{font-size:1.2rem;font-weight:400;font-family:var(--font-body);text-align:center;margin:0.5rem auto;color:var(--foreground);max-width:600px;text-shadow:2px 2px 3px #000}header.svelte-1po4ls7 .subtitle a.svelte-1po4ls7{color:var(--primary)}header.svelte-1po4ls7 .main-links.svelte-1po4ls7{display:flex;margin-top:0.5rem}header.svelte-1po4ls7 .main-links a.btn-link.svelte-1po4ls7{color:var(--primary);text-decoration:none;margin:0.5rem;padding:0.5rem;border-radius:0.25rem;border:1px solid var(--primary);transition:all 0.2s ease-in-out;min-width:6rem;text-align:center;font-family:var(--font-body);font-weight:bold;display:flex;align-items:center;gap:0.5rem}header.svelte-1po4ls7 .main-links a.btn-link.svelte-1po4ls7:hover{background:var(--primary);color:var(--background)}header.svelte-1po4ls7 .links.svelte-1po4ls7{display:flex;flex-wrap:wrap;justify-content:space-evenly;max-width:600px;gap:1.25rem;margin:1rem auto}header.svelte-1po4ls7 .links a.svelte-1po4ls7{color:var(--primary);opacity:0.5;font-family:var(--font-body);transition:all 0.2s ease-in-out;text-decoration:none;display:flex;align-items:center;gap:0.25rem}header.svelte-1po4ls7 .links a.svelte-1po4ls7:hover{opacity:1}header.svelte-1po4ls7 .links a:hover span.svelte-1po4ls7{text-decoration:underline}header.svelte-1po4ls7 .bottom.svelte-1po4ls7{display:flex;flex-direction:column}@media(min-width: 800px){header.svelte-1po4ls7 .bottom.svelte-1po4ls7{bottom:1rem;position:absolute;width:-moz-available;margin:0 auto;display:flex;justify-content:center}}header.svelte-1po4ls7 .license.svelte-1po4ls7{color:var(--grey);font-family:var(--font-body);margin:1rem auto;font-size:0.75rem;opacity:0.5;text-align:center}header.svelte-1po4ls7 .license a.svelte-1po4ls7{color:var(--grey);text-decoration:none;margin:0 6px}header.svelte-1po4ls7 .left.svelte-1po4ls7{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:48vw}header.svelte-1po4ls7 .right.svelte-1po4ls7{align-items:center;display:flex}header.svelte-1po4ls7 .left.svelte-1po4ls7,header.svelte-1po4ls7 .right.svelte-1po4ls7{max-width:800px}@media(min-width: 800px){header.svelte-1po4ls7 .left.svelte-1po4ls7,header.svelte-1po4ls7 .right.svelte-1po4ls7{flex:1}}header.svelte-1po4ls7 .screenshot.svelte-1po4ls7{width:100%;height:fit-content;max-height:650px;border-radius:4px;box-shadow:0 0 10px rgba(0, 0, 0, 0.5)}",
  map: null
};
const ProjectHero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { meta = {} } = $$props;
  const get2 = (key) => {
    const value = meta?.[key];
    return typeof value === "string" && value.trim() ? value : void 0;
  };
  const putCommasInBigNumber = (num) => {
    if (typeof num !== "number" || isNaN(num)) {
      return "";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const repo = get2("name") || project?.name;
  const name = get2("title") || (get2("name") || project?.name || "Untitled").replaceAll("-", " ");
  const description = get2("description") ?? project?.description;
  const homepage = get2("homepage") ?? project?.homepage;
  const githubUrl = repo ? `https://github.com/lissy93/${repo}` : project?.url;
  const docsUrl = get2("docs");
  const dockerUrl = get2("docker");
  const mirrorUrl = get2("mirror");
  const crate = get2("crate");
  const icon = get2("icon");
  const screenshot = get2("screenshot");
  const color = get2("color");
  const license = get2("license") || project?.license || "MIT";
  const stars = putCommasInBigNumber(get2("stars") || project?.stars || 0);
  const author = get2("author") || project?.user || "Lissy93";
  const language = get2("language") || project?.language || "";
  const isArchived = get2("archived") || project?.archived || false;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  $$result.css.add(css);
  return `<header${add_attribute("style", color ? `--primary: ${color}` : "", 0)} class="svelte-1po4ls7"><div class="middle svelte-1po4ls7"><div class="left svelte-1po4ls7">${name ? `<h1 class="svelte-1po4ls7">${escape(name)}</h1>` : ``} ${description ? `<p class="subtitle svelte-1po4ls7">${escape(description)}</p>` : ``} ${icon ? `<img width="128"${add_attribute("src", icon, 0)} alt="Project icon">` : ``} <div class="main-links svelte-1po4ls7">${githubUrl ? `<a class="btn-link svelte-1po4ls7"${add_attribute("href", githubUrl, 0)} target="_blank" rel="noopener">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "github",
      width: "20",
      height: "20"
    },
    {},
    {}
  )}
            View on GitHub</a>` : ``} ${homepage ? `<a class="btn-link svelte-1po4ls7"${add_attribute("href", homepage, 0)} target="_blank" rel="noopener">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "website",
      width: "20",
      height: "20"
    },
    {},
    {}
  )}
            View Website</a>` : ``}</div> <div class="links svelte-1po4ls7">${docsUrl ? `<a${add_attribute("href", docsUrl, 0)} target="_blank" rel="noopener" class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render($$result, { name: "docs", width: "20", height: "20" }, {}, {})} <span class="svelte-1po4ls7" data-svelte-h="svelte-pytag5">Docs</span></a>` : ``} ${dockerUrl ? `<a${add_attribute("href", dockerUrl, 0)} target="_blank" rel="noopener" class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "docker",
      width: "20",
      height: "20"
    },
    {},
    {}
  )} <span class="svelte-1po4ls7" data-svelte-h="svelte-10l0njj">DockerHub</span></a>` : ``} ${mirrorUrl ? `<a${add_attribute("href", mirrorUrl, 0)} target="_blank" rel="noopener" class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "codeberg",
      width: "20",
      height: "20"
    },
    {},
    {}
  )} <span class="svelte-1po4ls7" data-svelte-h="svelte-h0814">CodeBerg Mirror</span></a>` : ``} ${crate ? `<a${add_attribute("href", crate, 0)} target="_blank" rel="noopener" class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render($$result, { name: "rust", width: "20", height: "20" }, {}, {})} <span class="svelte-1po4ls7" data-svelte-h="svelte-12vdzq4">Crates.io</span></a>` : ``}</div></div> ${screenshot ? `<div class="right svelte-1po4ls7"><img class="screenshot svelte-1po4ls7"${add_attribute("src", screenshot, 0)} alt="Screenshot"></div>` : ``}</div> <div class="bottom svelte-1po4ls7">${language || stars && stars !== "0" || isArchived ? `<div class="chips"><ul class="svelte-1po4ls7">${license ? `<li class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "license",
      width: "14",
      height: "14"
    },
    {},
    {}
  )}
            License: ${escape(license)}</li>` : ``} ${stars && stars !== "0" ? `<li class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render($$result, { name: "star", width: "14", height: "14" }, {}, {})}
            Stars: ${escape(stars)}</li>` : ``} ${author ? `<li class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render($$result, { name: "user", width: "14", height: "14" }, {}, {})}
            Author: ${escape(author)}</li>` : ``} ${language ? `<li class="svelte-1po4ls7">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "language",
      width: "18",
      height: "14"
    },
    {},
    {}
  )}
            Language: ${escape(language)}</li>` : ``} ${isArchived ? `<li class="warn svelte-1po4ls7" data-svelte-h="svelte-1hrmmor">Archived</li>` : ``}</ul></div>` : ``} <p class="license svelte-1po4ls7">Free &amp; open source, forever.
      <a${add_attribute("href", githubUrl, 0)} target="_blank" rel="noopener" class="svelte-1po4ls7">${escape(name)}</a>
      is licensed under 
      ${escape(license)}
      © 2025 <a href="https://aliciasykes.com" target="_blank" rel="noopener" class="svelte-1po4ls7" data-svelte-h="svelte-1unjwz">Alicia Sykes</a></p></div> </header>`;
});
export {
  ProjectHero as P,
  page as p
};
