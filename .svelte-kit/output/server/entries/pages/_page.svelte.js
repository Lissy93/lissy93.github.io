import { d as sanitize_props, f as fallback, g as attr, i as attr_class, j as clsx, k as attr_style, l as stringify, e as escape_html, c as bind_props, a as slot, m as ensure_array_like, h as head } from "../../chunks/index.js";
import "clsx";
import { I as Icon } from "../../chunks/Icon.js";
import { f as formatTitle, a as formatDescription, b as formatStarCount } from "../../chunks/attributes.js";
import { P as ProjectReadme } from "../../chunks/ProjectReadme.js";
import { c as config } from "../../chunks/config.js";
function Hero($$renderer) {
  $$renderer.push(`<header class="svelte-juboms"><h1 class="svelte-juboms">App Catalog</h1> <h2 class="svelte-juboms">I build free &amp; open source apps which respect your privacy</h2> <h3 class="svelte-juboms">Coded with `);
  Icon($$renderer, {
    name: "heart",
    width: "1rem",
    height: "1rem",
    color: "var(--primary)"
  });
  $$renderer.push(`<!----> by <a href="https://github.com/lissy93" target="_blank" rel="nofollow">Alicia Sykes</a></h3></header>`);
}
function LangBadge($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  $$renderer.component(($$renderer2) => {
    let langAttributes, badgeUrl;
    let language = fallback($$props["language"], "");
    let size = fallback($$props["size"], null);
    let iconOnly = fallback($$props["iconOnly"], false);
    let useShields = fallback($$props["useShields"], false);
    const badgeConfigs = {
      android: { name: "Android", color: "3DDC84", icon: "android" },
      astro: { name: "Astro", color: "E83CB9", icon: "astro" },
      alpine: { name: "Alpine.js", color: "8BC0D0", icon: "alpinedotjs" },
      angular: { name: "Angular", color: "DD0031", icon: "angular" },
      babel: { name: "Babel", color: "F9DC3E", icon: "babel" },
      bash: { name: "Bash", color: "4EAA25", icon: "gnubash" },
      c: { name: "C", color: "A8B9CC", icon: "c" },
      "c++": { name: "C++", color: "00599C", icon: "cplusplus" },
      "c#": { name: "C#", color: "239120", icon: "csharp" },
      coffeescript: { name: "CoffeeScript", color: "2F2625", icon: "coffeescript" },
      crystal: { name: "crystal", color: "000000", icon: "crystal" },
      css: { name: "CSS", color: "563D7C", icon: "css" },
      config: { name: "Config", color: "EF1970", icon: "haveibeenpwned" },
      d3: { name: "D3.js", color: "F9A03C", icon: "d3dotjs" },
      dart: { name: "Dart", color: "0175C2", icon: "dart" },
      dockerfile: { name: "Docker", color: "2496ED", icon: "docker" },
      docker: { name: "Docker", color: "2496ED", icon: "docker" },
      elixir: { name: "Elixir", color: "4B275F", icon: "Elixir" },
      elm: { name: "Elm", color: "60B5CC", icon: "elm" },
      erlang: { name: " Erlang", color: "A90533", icon: " erlang" },
      fsharp: { name: "F#", color: "B845FC", icon: "fsharp" },
      flutter: { name: "Flutter", color: "02569B", icon: "flutter" },
      go: { name: "Go", color: "00ADD8", icon: "go" },
      html: { name: "HTML", color: "E34F26", icon: "html5" },
      hono: { name: "Hono", color: "E36002", icon: "hono" },
      haskell: { name: " Haskell", color: "5D4F85", icon: " haskell" },
      java: { name: "Java", color: "007396", icon: "mocha" },
      javascript: { name: "JavaScript", color: "F7DF1E", icon: "javascript" },
      julia: { name: "Julia", color: "9558B2", icon: "julia" },
      kotlin: { name: "Kotlin", color: "F18E33", icon: "kotlin" },
      lit: { name: "Lit", color: "00ffff", icon: "lit" },
      livescript: { name: "LiveScript", color: "65ADF1", icon: "nativescript" },
      node: { name: "Node.js", color: "339933", icon: "nodedotjs" },
      nim: { name: "Nim", color: "FFE953", icon: "nim" },
      markdown: { name: "Markdown", color: "000000", icon: "markdown" },
      makefile: { name: "Makefile", color: "006600", icon: "cmake" },
      marko: { name: "Marko", color: "2596BE", icon: "marko" },
      ocaml: { name: " OCaml", color: "EC6813", icon: " ocaml" },
      perl: { name: "Perl", color: "39457E", icon: "perl" },
      php: { name: "PHP", color: "777BB4", icon: "php" },
      powershell: { name: "PowerShell", color: "5391FE", icon: "powershell" },
      pug: { name: "Pug", color: "A86454", icon: "pug" },
      python: { name: "Python", color: "3C78A9", icon: "python" },
      r: { name: "R", color: "198CE7", icon: "r" },
      react: { name: "React", color: "61DAFB", icon: "react" },
      reactnative: { name: "React Native", color: "09D3AC", icon: "react" },
      red: { name: "Red", color: "B32629", icon: "red" },
      ruby: { name: "Ruby", color: "CC342D", icon: "ruby" },
      rust: { name: "Rust", color: "e86243", icon: "rust" },
      scala: { name: "Scala", color: "DC322F", icon: "scala" },
      shell: { name: "Shell", color: "4EAA25", icon: "gnubash" },
      svelte: { name: "Svelte", color: "ff3e00", icon: "svelte" },
      solid: { name: "Solid", color: "2C4F7C", icon: "solid" },
      swift: { name: "Swift", color: "F05138", icon: "swift" },
      typescript: { name: "TypeScript", color: "3178C6", icon: "typescript" },
      qwik: { name: "Qwik", color: "ac7ef4", icon: "qwik" },
      vue: { name: "Vue.js", color: "4FC08D", icon: "vuedotjs" },
      van: { name: "Van.js", color: "F44336", icon: "vitess" },
      webassembly: { name: "WebAssembly", color: "654FF0", icon: "webassembly" },
      ansible: { name: "Ansible", color: "EE0000", icon: "ansible" },
      kubernetes: { name: "Kubernetes", color: "326CE5", icon: "kubernetes" },
      githubactions: {
        name: "GitHub Actions",
        color: "2088FF",
        icon: "githubactions"
      },
      prometheus: { name: "Prometheus", color: "E6522C", icon: "prometheus" },
      grafana: { name: "Grafana", color: "F46800", icon: "grafana" },
      netlify: { name: "Netlify", color: "00C7B7", icon: "netlify" },
      vercel: { name: "Vercel", color: "000000", icon: "vercel" },
      cloudflare: { name: "CloudFlare", color: "F38020", icon: "cloudflare" },
      aws: { name: "AWS", color: "232F3E", icon: "amazonaws" },
      azure: { name: "Azure", color: "0089D6", icon: "azuredevops" },
      gcp: { name: "GCP", color: "4285F4", icon: "googlecloud" },
      ibmcloud: { name: "IBM Cloud", color: "1261FE", icon: "ibmcloud" },
      mysql: { name: "MySQL", color: "4479A1", icon: "mysql" },
      mongodb: { name: "MongoDB", color: "47A248", icon: "mongodb" },
      redis: { name: "Redis", color: "DC382D", icon: "redis" },
      sqlite: { name: "SQLite", color: "003B57", icon: "sqlite" },
      postgresql: { name: "PostgreSQL", color: "336791", icon: "postgresql" },
      jest: { name: "Jest", color: "C21325", icon: "jest" },
      puppeteer: { name: "Puppeteer", color: "40B5A4", icon: "puppeteer" },
      enzyme: {
        name: "Testing Library",
        color: "E33332",
        icon: "testinglibrary"
      },
      cypress: { name: "Cypress", color: "17202C", icon: "cypress" },
      storybook: { name: "Storybook", color: "FF4785", icon: "storybook" },
      junit: { name: "JUnit", color: "25A162", icon: "junit5" },
      nmap: { name: "Nmap", color: "4F5D95", icon: "nmap" },
      owaspzap: { name: "OWASP ZAP", color: "4B8BBE", icon: "owasp" },
      burpsuite: { name: "Burp Suite", color: "FAC748", icon: "burpsuite" },
      wireshark: { name: "Wireshark", color: "1679A7", icon: "wireshark" },
      hackthebox: { name: "Hack The Box", color: "9FEF00", icon: "hackthebox" },
      apachetomcat: { name: "Apache Tomcat", color: "F8DC75", icon: "apachetomcat" },
      nginx: { name: "Nginx", color: "269539", icon: "nginx" },
      apache: { name: "Apache", color: "D22128", icon: "apache" },
      caddy: { name: "Caddy", color: "0D597F", icon: "caddy" },
      lighttpd: { name: "Lighttpd", color: "FFB500", icon: "lighttpd" },
      graphql: { name: "GraphQL", color: "E10098", icon: "graphql" },
      debian: { name: "Debian", color: "A81D33", icon: "debian" },
      gitlab: { name: "GitLab", color: "FC6D26", icon: "gitlab" },
      gradle: { name: "Gradle", color: "02303A", icon: "gradle" },
      rabbitMq: { name: "RabbitMQ", color: "FF6600", icon: "rabbitmq" },
      nixos: { name: "NixOS", color: "41439B", icon: "nixos" },
      rancher: { name: "Rancher", color: "0075A8", icon: "rancher" },
      raspberrypi: { name: "Raspberry Pi", color: "A22846", icon: "raspberrypi" },
      ethereum: { name: "Ethereum", color: "3C3C3D", icon: "ethereum" },
      solana: { name: "Solana", color: "3C3C3D", icon: "solana" },
      polkadot: { name: "Polkadot", color: "E6007A", icon: "polkadot" },
      substrate: { name: "Substrate", color: "E6007A", icon: "substrate" },
      near: { name: "NEAR", color: "222222", icon: "near" },
      avalanche: { name: "Avalanche", color: "62B0D9", icon: "avalanche" },
      harmony: { name: "Harmony", color: "FFC300", icon: "harmony" },
      opensea: { name: "OpenSea", color: "2081E2", icon: "opensea" },
      web3js: { name: "Web3.js", color: "F16822", icon: "web3dotjs" }
    };
    const getIconColor = (badgeColor) => {
      const hex = badgeColor.replace("#", "") || "000000";
      const [r, g, b] = hex.match(/.{2}/g)?.map((x) => parseInt(x, 16)) || [255, 255, 255];
      const brightness = (r * 299 + g * 587 + b * 114) / 1e3;
      return brightness > 170 ? "000000" : "FFFFFF";
    };
    const getLangAttributes = (lang) => {
      const defaultConfig = { name: lang, color: "000000", icon: "" };
      return badgeConfigs[lang?.toLocaleLowerCase().replaceAll(" ", "")] || defaultConfig;
    };
    const getBadgeUrl = (attributes) => {
      if (!attributes) return null;
      const { name, color, icon } = attributes;
      const badgeEndpoint = "https://img.shields.io/static/v1";
      return `${badgeEndpoint}?` + (!iconOnly ? `label=&message=${encodeURIComponent(name)}` : "label=&message= ") + `&color=${color}&logo=${icon}&logoColor=${getIconColor(color)}`;
    };
    langAttributes = getLangAttributes(language);
    badgeUrl = langAttributes ? getBadgeUrl(langAttributes) : null;
    $$renderer2.push(`<div>`);
    if (badgeUrl && useShields) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<img${attr("src", badgeUrl)}${attr_class(clsx($$sanitized_props.class), "svelte-dc02gv")}${attr("height", size || null)}${attr("alt", langAttributes?.name)}${attr("title", `Language: ${langAttributes?.name}`)}/>`);
    } else if (langAttributes) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<div class="language svelte-dc02gv"${attr_style("", {
        background: `#${stringify(langAttributes?.color)}`,
        color: `#${stringify(getIconColor(langAttributes?.color))}`
      })}><img height="16" width="16" alt="l"${attr("src", `https://cdn.simpleicons.org/${stringify(langAttributes.icon)}/${stringify(getIconColor(langAttributes?.color))}`)} class="svelte-dc02gv"/> ${escape_html(langAttributes.name)}</div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { language, size, iconOnly, useShields });
  });
}
function Modal($$renderer, $$props) {
  let showModal = fallback($$props["showModal"], false);
  let project = $$props["project"];
  let readme = fallback($$props["readme"], "");
  $$renderer.push(`<dialog class="svelte-1bxxaoh"><div><!--[-->`);
  slot($$renderer, $$props, "default", {});
  $$renderer.push(`<!--]--> `);
  ProjectReadme($$renderer, { project, readme });
  $$renderer.push(`<!----> <button autofocus="" class="svelte-1bxxaoh">Close</button></div></dialog>`);
  bind_props($$props, { showModal, project, readme });
}
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let project = $$props["project"];
    let readme = "Loading...";
    let showModal = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Modal($$renderer3, {
        project,
        readme,
        get showModal() {
          return showModal;
        },
        set showModal($$value) {
          showModal = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <a class="project svelte-1ntrexv"${attr("href", `/${project.name}`)}><div class="left svelte-1ntrexv">`);
      if (project.icon) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<img${attr("src", project.icon)}${attr("alt", project.emoji)} loading="lazy" class="svelte-1ntrexv"/>`);
      } else {
        $$renderer3.push("<!--[-1-->");
        $$renderer3.push(`<span class="emoji svelte-1ntrexv">${escape_html(project.emoji)}</span>`);
      }
      $$renderer3.push(`<!--]--></div> <div class="right svelte-1ntrexv"><h3 class="svelte-1ntrexv">${escape_html(formatTitle(project.title || project.name))}</h3> <p class="description svelte-1ntrexv">${escape_html(formatDescription(project.description))}</p> <div class="tags svelte-1ntrexv">`);
      if (project.language) {
        $$renderer3.push("<!--[0-->");
        LangBadge($$renderer3, { language: project.language });
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (project.stars && project.stars > 10) {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<p class="tag svelte-1ntrexv"${attr("title", `${project.stars} stars on GitHub`)}>★ ${escape_html(formatStarCount(project.stars))}</p>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (project.license && project.license !== "NOASSERTION") {
        $$renderer3.push("<!--[0-->");
        $$renderer3.push(`<p class="tag svelte-1ntrexv"${attr("title", `Licensed under ${project.license}`)}>${escape_html(project.license)}</p>`);
      } else {
        $$renderer3.push("<!--[-1-->");
      }
      $$renderer3.push(`<!--]--></div></div></a>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { project });
  });
}
function ProjectList($$renderer, $$props) {
  let projects = fallback($$props["projects"], () => [], true);
  $$renderer.push(`<div class="project-list svelte-1ln3r19"><!--[-->`);
  const each_array = ensure_array_like(projects);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let project = each_array[$$index];
    ProjectCard($$renderer, { project });
  }
  $$renderer.push(`<!--]--></div>`);
  bind_props($$props, { projects });
}
function About($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="svelte-1pch8ix"><div class="left"><h3 class="svelte-1pch8ix">About</h3> <p class="svelte-1pch8ix">I'm <a href="https://aliciasykes.com">Alicia Sykes</a> (<a href="https://github.com/lissy93">Lissy93</a> on GitHub), a developer from London 🇬🇧</p> <p class="svelte-1pch8ix">I build free and open source software for the developers, and sometimes humans.</p> <p class="svelte-1pch8ix">My objective is to build tools that respect a user's privacy and are accessible to everyone. I
			have a particular interest in security, Linux and self-hosting. But also just love to build
			things that are fun and (sometimes, maybe) useful.</p> <p class="svelte-1pch8ix">I'm always up for learning new things and collaborating on projects, so feel free to reach out
			if you've got an idea you want to jam on!</p> <div class="socials svelte-1pch8ix"><!--[-->`);
    const each_array = ensure_array_like(config.socials);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let social = each_array[$$index];
      $$renderer2.push(`<a${attr("href", social.link + social.user)} class="social-link svelte-1pch8ix"${attr("title", social.name)} target="_blank" rel="noreferrer">`);
      Icon($$renderer2, {
        name: social.icon,
        color: "var(--foreground)",
        width: "1.8rem",
        height: "1.8rem",
        hoverColor: social.tone
      });
      $$renderer2.push(`<!----></a>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="right"><img class="pic svelte-1pch8ix" width="300" src="/profile.jpg" alt="Alicia Sykes"/> <div class="links svelte-1pch8ix"><!--[-->`);
    const each_array_1 = ensure_array_like(config.links);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let link = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", link.href)} class="svelte-1pch8ix">${escape_html(link.text)}</a>`);
    }
    $$renderer2.push(`<!--]--></div></div></section>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let data = $$props["data"];
    const repos = data.repos || [];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AS93 | Home</title>`);
      });
      $$renderer3.push(`<meta name="description" content="AS93 - Free &amp; Open Source apps by Alicia Sykes"/> <link rel="canonical" href="https://as93.net"/> <meta property="og:type" content="website"/> <meta property="og:title" content="AS93 | Project Catalog"/> <meta property="og:description" content="Free &amp; Open Source apps by Alicia Sykes"/> <meta property="og:image" content="https://as93.net/banner.png"/> <meta property="og:url" content="https://as93.net"/> <meta property="og:site_name" content="AS93"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:title" content="AS93 | Project Catalog"/> <meta name="twitter:description" content="Free &amp; Open Source apps by Alicia Sykes"/> <meta name="twitter:image" content="https://as93.net/banner.png"/>`);
    });
    $$renderer2.push(`<main class="svelte-1uha8ag">`);
    Hero($$renderer2);
    $$renderer2.push(`<!----> `);
    ProjectList($$renderer2, { projects: repos });
    $$renderer2.push(`<!----> `);
    About($$renderer2);
    $$renderer2.push(`<!----></main>`);
    bind_props($$props, { data });
  });
}
export {
  _page as default
};
