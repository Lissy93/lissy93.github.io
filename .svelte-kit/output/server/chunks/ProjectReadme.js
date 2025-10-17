import { c as create_ssr_component, v as validate_component, e as escape, j as is_promise, n as noop } from "./ssr.js";
import { marked } from "marked";
import { e as formatLargeNumber, g as formatSize, h as formatDate, i as formatTimeAgo } from "./attributes.js";
import { I as Icon } from "./Icon.js";
const css = {
  code: "section.svelte-1v8jmth.svelte-1v8jmth{max-width:70rem;margin:0 auto;display:flex;flex-direction:column;gap:1rem;background:var(--secondary);transition:all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;border-radius:0.5rem;border:1px solid rgba(30, 41, 59, 0.8)}section.svelte-1v8jmth .top-stats.svelte-1v8jmth{display:flex;flex-wrap:wrap;border-bottom:1px solid rgba(30, 41, 59, 0.8)}section.svelte-1v8jmth .top-stats div.svelte-1v8jmth{padding:0.5rem 1rem;display:flex;gap:0.5rem;align-items:center}section.svelte-1v8jmth .top-stats div.svelte-1v8jmth:not(:last-child){border-right:1px solid rgba(30, 41, 59, 0.8)}section.svelte-1v8jmth .plain-text.svelte-1v8jmth{padding:0 2rem;overflow-x:auto;margin:0}section.svelte-1v8jmth .markdown.svelte-1v8jmth{padding:1rem 2rem}section.svelte-1v8jmth .markdown.svelte-1v8jmth td{border:1px solid rgba(30, 41, 59, 0.8)}section.svelte-1v8jmth .markdown.svelte-1v8jmth img{max-width:100%;border-radius:5px}section.svelte-1v8jmth .markdown.svelte-1v8jmth blockquote{border-left:3px solid var(--primary);margin-left:0.5rem;padding-left:1rem;background:var(--background-lighter);border-radius:0 5px 5px 0}section.svelte-1v8jmth .markdown.svelte-1v8jmth pre{background:var(--background-lighter);padding:1rem 0.5rem;border-radius:5px;overflow-x:auto}section.svelte-1v8jmth .markdown.svelte-1v8jmth a{color:var(--primary);text-decoration:none}section.svelte-1v8jmth .markdown.svelte-1v8jmth a:hover{text-decoration:underline}",
  map: null
};
const ProjectReadme = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let { readme } = $$props;
  const convertReadme = async (readme2, owner = project.user, repo = project.name) => {
    const renderer = new marked.Renderer();
    const originalLinkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
      if (!href.startsWith("http://") && !href.startsWith("https://") && !href.startsWith("#")) {
        href = `https://github.com/${owner}/${repo}/blob/HEAD/${href}`;
      }
      return originalLinkRenderer.call(renderer, href, title, text);
    };
    const originalImageRenderer = renderer.image;
    renderer.image = (href, title, text) => {
      if (!href.startsWith("http://") && !href.startsWith("https://") && !href.startsWith("#")) {
        href = `https://github.com/${owner}/${repo}/blob/HEAD/${href}`;
      }
      return originalImageRenderer.call(renderer, href, title, text);
    };
    renderer.heading = (text, level) => {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
      return `<h${level} id="${escapedText}">${text}</h${level}>`;
    };
    marked.setOptions({ renderer });
    marked.use({
      walkTokens(tok) {
        if ((tok.type === "link" || tok.type === "image") && typeof tok.href === "string" && !/^https?:\/\//.test(tok.href)) {
          const path = tok.href.replace(/^\/|^\.\//, "");
          tok.href = `https://github.com/${owner}/${repo}/blob/master/${path}`;
        }
      }
    });
    const html = await marked(readme2);
    const sanitizedHtml = html.replace(/<img\s+[^>]*src="(?!https?:\/\/)[^"]*"[^>]*>/gi, "");
    return sanitizedHtml;
  };
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.readme === void 0 && $$bindings.readme && readme !== void 0)
    $$bindings.readme(readme);
  $$result.css.add(css);
  return `<section class="svelte-1v8jmth"><div class="top-stats svelte-1v8jmth">${project.stars ? `<div title="Stargazer count" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "star" }, {}, {})} <span>${escape(formatLargeNumber(project.stars))}</span></div>` : ``} ${project.forks ? `<div title="Fork count" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "fork" }, {}, {})} <span>${escape(project.forks)}</span></div>` : ``} ${project.license && project.license !== "NOASSERTION" ? `<div title="License" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "license" }, {}, {})} <span>${escape(project.license)}</span></div>` : ``} ${project.size ? `<div title="Repository size" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "size" }, {}, {})} <span>${escape(formatSize(project.size))}</span></div>` : ``} ${project.createdAt ? `<div title="Date created" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "date" }, {}, {})} <span>${escape(formatDate(project.createdAt))}</span></div>` : ``} ${project.updatedAt ? `<div title="Last updated" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { name: "time" }, {}, {})} <span>${escape(formatTimeAgo(project.updatedAt))}</span></div>` : ``} ${project.language ? `<div title="Programming language" class="svelte-1v8jmth">${validate_component(Icon, "Icon").$$render($$result, { width: "22", name: "language" }, {}, {})} <span>${escape(project.language)}</span></div>` : ``}</div>  ${`<div class="markdown svelte-1v8jmth">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ``;
    }
    return function(renderedReadme) {
      return ` <!-- HTML_TAG_START -->${renderedReadme}<!-- HTML_TAG_END --> `;
    }(__value);
  }(convertReadme(readme || ""))}</div>`} </section>`;
});
export {
  ProjectReadme as P
};
