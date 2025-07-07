import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { p as page, P as ProjectHero } from "../../chunks/ProjectHero.js";
const css = {
  code: "h1.svelte-ux8mvq.svelte-ux8mvq{font-size:6rem;margin:0;padding:1rem;text-align:center;opacity:0.6}.emoji.svelte-ux8mvq.svelte-ux8mvq{font-size:5rem;margin:0}p.svelte-ux8mvq.svelte-ux8mvq{font-size:2rem;margin:0;text-align:center}.has-github-pages.svelte-ux8mvq.svelte-ux8mvq{position:fixed;top:0;left:0;right:0;width:100%;background-color:var(--primary);padding:0.25rem;text-align:center;font-size:1.2rem}.has-github-pages.svelte-ux8mvq h3.svelte-ux8mvq{margin:0;font-size:1rem}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1o0evpc_START -->${$$result.title = `<title>Error | AS93</title>`, ""}<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes"><!-- HEAD_svelte-1o0evpc_END -->`, ""} ${``} ${data.repoDetails && data.repoDetails.id ? `${validate_component(ProjectHero, "ProjectHero").$$render(
    $$result,
    {
      project: data.repoDetails,
      meta: data.meta
    },
    {},
    {}
  )}` : ``} <p class="svelte-ux8mvq" data-svelte-h="svelte-mjc7pz">Oops, something&#39;s gone a bit wrong here</p> <h1 class="svelte-ux8mvq">${escape($page.status)}</h1> <p class="emoji svelte-ux8mvq" data-svelte-h="svelte-14uudq">😢</p> ${$page?.error?.message ? `<p class="svelte-ux8mvq">${escape($page.error.message)}</p>` : ``}`;
});
export {
  Error as default
};
