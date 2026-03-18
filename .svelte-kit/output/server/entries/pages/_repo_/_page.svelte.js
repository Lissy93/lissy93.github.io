import { b as store_get, h as head, u as unsubscribe_stores, c as bind_props, e as escape_html, g as attr } from "../../../chunks/index.js";
import { P as ProjectReadme } from "../../../chunks/ProjectReadme.js";
import { P as ProjectHero, p as page } from "../../../chunks/ProjectHero.js";
import { h as html } from "../../../chunks/Icon.js";
import { c as config } from "../../../chunks/config.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let jsonLdHtml, projectName, projectDescription, projectImage, canonicalUrl, pageTitle;
    let data = $$props["data"];
    function generateJsonLd(project, meta) {
      const name = meta?.title || project?.name?.replaceAll("-", " ") || "Project";
      const description = meta?.description || project?.description || "";
      const image = meta?.icon || project?.icon || "https://as93.net/favicon.png";
      const url = `https://as93.net/${project?.name || ""}`;
      const repoUrl = `https://github.com/${config.githubUser}/${project?.name || ""}`;
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        name,
        description,
        image,
        url,
        codeRepository: repoUrl,
        author: {
          "@type": "Person",
          name: config.fullName,
          url: "https://aliciasykes.com"
        }
      };
      if (project?.createdAt) jsonLd.dateCreated = project.createdAt;
      if (project?.updatedAt) jsonLd.dateModified = project.updatedAt;
      if (project?.language) jsonLd.programmingLanguage = project.language;
      if (project?.license) jsonLd.license = project.license;
      return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
    }
    jsonLdHtml = '<script type="application/ld+json">' + generateJsonLd(data.repoDetails, data.meta) + "<\/script>";
    projectName = data.meta?.title || data.repoDetails?.name?.replaceAll("-", " ") || "Project";
    projectDescription = data.meta?.description || data.repoDetails?.description || "";
    projectImage = data.meta?.icon || data.repoDetails?.icon || "https://as93.net/banner.png";
    canonicalUrl = `https://as93.net/${data.repoDetails?.name || store_get($$store_subs ??= {}, "$page", page).params.repo}`;
    pageTitle = `${projectName} | AS93`;
    head("lrlt4l", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(pageTitle)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", projectDescription)}/> <link rel="canonical"${attr("href", canonicalUrl)}/> <meta property="og:type" content="website"/> <meta property="og:title"${attr("content", pageTitle)}/> <meta property="og:description"${attr("content", projectDescription)}/> <meta property="og:image"${attr("content", projectImage)}/> <meta property="og:url"${attr("content", canonicalUrl)}/> <meta property="og:site_name" content="AS93"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title"${attr("content", pageTitle)}/> <meta name="twitter:description"${attr("content", projectDescription)}/> <meta name="twitter:image"${attr("content", projectImage)}/> ${html(jsonLdHtml)}`);
    });
    {
      $$renderer2.push("<!--[-1-->");
      ProjectHero($$renderer2, { project: data.repoDetails, meta: data.meta });
      $$renderer2.push(`<!----> `);
      if (data.readme) {
        $$renderer2.push("<!--[0-->");
        ProjectReadme($$renderer2, { project: data.repoDetails, readme: data.readme });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
