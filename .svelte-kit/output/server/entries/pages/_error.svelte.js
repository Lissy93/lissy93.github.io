import { h as head, e as escape_html, b as store_get, u as unsubscribe_stores, c as bind_props } from "../../chunks/index.js";
import { P as ProjectHero, p as page } from "../../chunks/ProjectHero.js";
import { P as ProjectReadme } from "../../chunks/ProjectReadme.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let data = $$props["data"];
    head("1j96wlh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Error | AS93</title>`);
      });
      $$renderer3.push(`<meta name="description" content="AS93 - Free &amp; Open Source apps by Alicia Sykes"/>`);
    });
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.repoDetails && data.repoDetails.id) {
      $$renderer2.push("<!--[0-->");
      ProjectHero($$renderer2, { project: data.repoDetails, meta: data.meta });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (data.repoDetails && data.repoDetails.id && data.readme) {
      $$renderer2.push("<!--[0-->");
      ProjectReadme($$renderer2, { project: data.repoDetails, readme: data.readme });
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (!data || !data.repoDetails || !data.repoDetails.id) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="svelte-1j96wlh">Oops, something's gone a bit wrong here</p> <h1 class="svelte-1j96wlh">${escape_html(store_get($$store_subs ??= {}, "$page", page).status)}</h1> <p class="emoji svelte-1j96wlh">😢</p> `);
      if (store_get($$store_subs ??= {}, "$page", page)?.error?.message) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<p class="svelte-1j96wlh">${escape_html(store_get($$store_subs ??= {}, "$page", page).error.message)}</p>`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _error as default
};
