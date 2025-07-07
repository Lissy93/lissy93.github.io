import { c as create_ssr_component, b as subscribe, v as validate_component, i as is_promise, n as noop, m as missing_component } from "../../../chunks/ssr.js";
import "marked";
import "../../../chunks/Icon.js";
/* empty css                                                          */
import { p as page, P as ProjectHero } from "../../../chunks/ProjectHero.js";
import { c as config } from "../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let jsonLdScript;
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  function generateJsonLd(project) {
    const jsonLd = {
      "@context": "http://schema.org",
      "@type": "SoftwareSourceCode",
      "headline": project.name,
      "image": project.icon || "https://as93.net/favicon.png",
      "datePublished": project.createdAt,
      "dateModified": project.updatedAt,
      "author": {
        "@type": "Person",
        "name": config.fullName
      },
      "description": project.description
    };
    return JSON.stringify(jsonLd);
  }
  let readmeComponent;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  jsonLdScript = generateJsonLd(data.repoDetails);
  $$unsubscribe_page();
  return `${`${validate_component(ProjectHero, "ProjectHero").$$render(
    $$result,
    {
      project: data.repoDetails,
      meta: data.meta
    },
    {},
    {}
  )} ${data.readme ? `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(resolvedComponent) {
      return ` ${validate_component(resolvedComponent?.default || missing_component, "svelte:component").$$render(
        $$result,
        {
          project: data.repoDetails,
          readme: data.readme
        },
        {},
        {}
      )} `;
    }(__value);
  }(readmeComponent)}` : ``}`} <script type="application/ld+json"><!-- HTML_TAG_START -->${jsonLdScript}<!-- HTML_TAG_END --><\/script>`;
});
export {
  Page as default
};
