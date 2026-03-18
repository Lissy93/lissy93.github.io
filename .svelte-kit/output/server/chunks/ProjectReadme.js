import { e as escape_html, aj as await_block, c as bind_props } from "./index.js";
import { Marked } from "marked";
import { e as formatLargeNumber, g as formatSize, h as formatDate, i as formatTimeAgo } from "./attributes.js";
import { I as Icon, h as html } from "./Icon.js";
function ProjectReadme($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    let readme = $$props["readme"];
    const convertReadme = async (readme2, owner = project.user, repo = project.name) => {
      const renderer = {
        heading({ text, depth }) {
          const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
          return `<h${depth} id="${escapedText}">${text}</h${depth}>`;
        }
      };
      const instance = new Marked();
      instance.use({ renderer });
      instance.use({
        walkTokens(tok) {
          if ((tok.type === "link" || tok.type === "image") && typeof tok.href === "string" && !/^https?:\/\//.test(tok.href)) {
            const path = tok.href.replace(/^\/|^\.\//, "");
            tok.href = `https://github.com/${owner}/${repo}/blob/HEAD/${path}`;
          }
        }
      });
      const html2 = await instance.parse(readme2);
      const sanitizedHtml = html2.replace(/<img\s+[^>]*src="(?!https?:\/\/)[^"]*"[^>]*>/gi, "");
      return sanitizedHtml;
    };
    $$renderer2.push(`<section class="svelte-9kflzj"><div class="top-stats svelte-9kflzj">`);
    if (project.stars) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Stargazer count" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "star" });
      $$renderer2.push(`<!----> <span>${escape_html(formatLargeNumber(project.stars))}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.forks) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Fork count" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "fork" });
      $$renderer2.push(`<!----> <span>${escape_html(project.forks)}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.license && project.license !== "NOASSERTION") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="License" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "license" });
      $$renderer2.push(`<!----> <span>${escape_html(project.license)}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.size) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Repository size" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "size" });
      $$renderer2.push(`<!----> <span>${escape_html(formatSize(project.size))}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.createdAt) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Date created" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "date" });
      $$renderer2.push(`<!----> <span>${escape_html(formatDate(project.createdAt))}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.updatedAt) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Last updated" class="svelte-9kflzj">`);
      Icon($$renderer2, { name: "time" });
      $$renderer2.push(`<!----> <span>${escape_html(formatTimeAgo(project.updatedAt))}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (project.language) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div title="Programming language" class="svelte-9kflzj">`);
      Icon($$renderer2, { width: "22", name: "language" });
      $$renderer2.push(`<!----> <span>${escape_html(project.language)}</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="markdown svelte-9kflzj">`);
      await_block($$renderer2, convertReadme(readme || ""), () => {
      }, (renderedReadme) => {
        $$renderer2.push(`${html(renderedReadme)}`);
      });
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></section>`);
    bind_props($$props, { project, readme });
  });
}
export {
  ProjectReadme as P
};
