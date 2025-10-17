import { c as create_ssr_component, v as validate_component, d as add_attribute, e as escape, f as null_to_empty, g as add_styles, h as each } from "../../chunks/ssr.js";
import { I as Icon } from "../../chunks/Icon.js";
import { f as formatTitle, a as formatDescription, b as formatStarCount } from "../../chunks/attributes.js";
import { P as ProjectReadme } from "../../chunks/ProjectReadme.js";
import { c as config } from "../../chunks/config.js";
const css$6 = {
  code: "header.svelte-whf226.svelte-whf226{display:flex;flex-direction:column;align-items:center;padding:2rem}header.svelte-whf226 h1.svelte-whf226{margin:0;font-size:4rem}header.svelte-whf226 h2.svelte-whf226{margin:0;font-size:1.5rem;font-weight:400;text-align:center;font-family:var(--font-body)}header.svelte-whf226 h3.svelte-whf226{margin:0;opacity:0.75;font-weight:400;color:var(--primary);display:flex;gap:0.3rem;align-items:center}@media(max-width: 768px){header.svelte-whf226 h3.svelte-whf226{display:inline;text-align:center}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<header class="svelte-whf226"><h1 class="svelte-whf226" data-svelte-h="svelte-uttp9u">App Catalog</h1> <h2 class="svelte-whf226" data-svelte-h="svelte-psdpxo">I build free &amp; open source apps which respect your privacy</h2> <h3 class="svelte-whf226">Coded with
    ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      name: "heart",
      width: "1rem",
      height: "1rem",
      color: "var(--primary)"
    },
    {},
    {}
  )}
    by <a href="https://github.com/lissy93" target="_blank" rel="nofollow" data-svelte-h="svelte-313qoj">Alicia Sykes</a></h3> </header>`;
});
const css$5 = {
  code: "img.svelte-6i6os5.svelte-6i6os5{filter:grayscale(20%);transition:all 0.1s ease-in-out}img.svelte-6i6os5.svelte-6i6os5:hover{filter:grayscale(0%);transform:scale(1.05)}.language.svelte-6i6os5.svelte-6i6os5{color:#fff;font-size:0.85rem;font-weight:bold;width:fit-content;padding:0.1rem 0.2rem;border-radius:var(--curve-factor, 4px);display:flex;gap:0.25rem}.language.svelte-6i6os5 img.svelte-6i6os5{width:1rem;height:1rem}",
  map: null
};
const LangBadge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let langAttributes;
  let badgeUrl;
  let { language = "" } = $$props;
  let { size = null } = $$props;
  let { iconOnly = false } = $$props;
  let { useShields = false } = $$props;
  const badgeConfigs = {
    // Programming Languages
    android: {
      name: "Android",
      color: "3DDC84",
      icon: "android"
    },
    astro: {
      name: "Astro",
      color: "E83CB9",
      icon: "astro"
    },
    alpine: {
      name: "Alpine.js",
      color: "8BC0D0",
      icon: "alpinedotjs"
    },
    angular: {
      name: "Angular",
      color: "DD0031",
      icon: "angular"
    },
    babel: {
      name: "Babel",
      color: "F9DC3E",
      icon: "babel"
    },
    bash: {
      name: "Bash",
      color: "4EAA25",
      icon: "gnubash"
    },
    c: { name: "C", color: "A8B9CC", icon: "c" },
    "c++": {
      name: "C++",
      color: "00599C",
      icon: "cplusplus"
    },
    "c#": {
      name: "C#",
      color: "239120",
      icon: "csharp"
    },
    coffeescript: {
      name: "CoffeeScript",
      color: "2F2625",
      icon: "coffeescript"
    },
    crystal: {
      name: "crystal",
      color: "000000",
      icon: "crystal"
    },
    css: {
      name: "CSS",
      color: "563D7C",
      icon: "css"
    },
    config: {
      name: "Config",
      color: "EF1970",
      icon: "haveibeenpwned"
    },
    d3: {
      name: "D3.js",
      color: "F9A03C",
      icon: "d3dotjs"
    },
    dart: {
      name: "Dart",
      color: "0175C2",
      icon: "dart"
    },
    dockerfile: {
      name: "Docker",
      color: "2496ED",
      icon: "docker"
    },
    docker: {
      name: "Docker",
      color: "2496ED",
      icon: "docker"
    },
    elixir: {
      name: "Elixir",
      color: "4B275F",
      icon: "Elixir"
    },
    elm: {
      name: "Elm",
      color: "60B5CC",
      icon: "elm"
    },
    erlang: {
      name: " Erlang",
      color: "A90533",
      icon: " erlang"
    },
    fsharp: {
      name: "F#",
      color: "B845FC",
      icon: "fsharp"
    },
    flutter: {
      name: "Flutter",
      color: "02569B",
      icon: "flutter"
    },
    go: { name: "Go", color: "00ADD8", icon: "go" },
    html: {
      name: "HTML",
      color: "E34F26",
      icon: "html5"
    },
    hono: {
      name: "Hono",
      color: "E36002",
      icon: "hono"
    },
    haskell: {
      name: " Haskell",
      color: "5D4F85",
      icon: " haskell"
    },
    java: {
      name: "Java",
      color: "007396",
      icon: "mocha"
    },
    javascript: {
      name: "JavaScript",
      color: "F7DF1E",
      icon: "javascript"
    },
    julia: {
      name: "Julia",
      color: "9558B2",
      icon: "julia"
    },
    kotlin: {
      name: "Kotlin",
      color: "F18E33",
      icon: "kotlin"
    },
    lit: {
      name: "Lit",
      color: "00ffff",
      icon: "lit"
    },
    livescript: {
      name: "LiveScript",
      color: "65ADF1",
      icon: "nativescript"
    },
    node: {
      name: "Node.js",
      color: "339933",
      icon: "nodedotjs"
    },
    nim: {
      name: "Nim",
      color: "FFE953",
      icon: "nim"
    },
    markdown: {
      name: "Markdown",
      color: "000000",
      icon: "markdown"
    },
    makefile: {
      name: "Makefile",
      color: "006600",
      icon: "cmake"
    },
    marko: {
      name: "Marko",
      color: "2596BE",
      icon: "marko"
    },
    ocaml: {
      name: " OCaml",
      color: "EC6813",
      icon: " ocaml"
    },
    perl: {
      name: "Perl",
      color: "39457E",
      icon: "perl"
    },
    php: {
      name: "PHP",
      color: "777BB4",
      icon: "php"
    },
    powershell: {
      name: "PowerShell",
      color: "5391FE",
      icon: "powershell"
    },
    pug: {
      name: "Pug",
      color: "A86454",
      icon: "pug"
    },
    python: {
      name: "Python",
      color: "3C78A9",
      icon: "python"
    },
    r: { name: "R", color: "198CE7", icon: "r" },
    react: {
      name: "React",
      color: "61DAFB",
      icon: "react"
    },
    reactnative: {
      name: "React Native",
      color: "09D3AC",
      icon: "react"
    },
    red: {
      name: "Red",
      color: "B32629",
      icon: "red"
    },
    ruby: {
      name: "Ruby",
      color: "CC342D",
      icon: "ruby"
    },
    rust: {
      name: "Rust",
      color: "e86243",
      icon: "rust"
    },
    scala: {
      name: "Scala",
      color: "DC322F",
      icon: "scala"
    },
    shell: {
      name: "Shell",
      color: "4EAA25",
      icon: "gnubash"
    },
    svelte: {
      name: "Svelte",
      color: "ff3e00",
      icon: "svelte"
    },
    solid: {
      name: "Solid",
      color: "2C4F7C",
      icon: "solid"
    },
    swift: {
      name: "Swift",
      color: "F05138",
      icon: "swift"
    },
    typescript: {
      name: "TypeScript",
      color: "3178C6",
      icon: "typescript"
    },
    qwik: {
      name: "Qwik",
      color: "ac7ef4",
      icon: "qwik"
    },
    vue: {
      name: "Vue.js",
      color: "4FC08D",
      icon: "vuedotjs"
    },
    van: {
      name: "Van.js",
      color: "F44336",
      icon: "vitess"
    },
    webassembly: {
      name: "WebAssembly",
      color: "654FF0",
      icon: "webassembly"
    },
    // DevOps
    ansible: {
      name: "Ansible",
      color: "EE0000",
      icon: "ansible"
    },
    kubernetes: {
      name: "Kubernetes",
      color: "326CE5",
      icon: "kubernetes"
    },
    githubactions: {
      name: "GitHub Actions",
      color: "2088FF",
      icon: "githubactions"
    },
    prometheus: {
      name: "Prometheus",
      color: "E6522C",
      icon: "prometheus"
    },
    grafana: {
      name: "Grafana",
      color: "F46800",
      icon: "grafana"
    },
    // Cloud
    netlify: {
      name: "Netlify",
      color: "00C7B7",
      icon: "netlify"
    },
    vercel: {
      name: "Vercel",
      color: "000000",
      icon: "vercel"
    },
    cloudflare: {
      name: "CloudFlare",
      color: "F38020",
      icon: "cloudflare"
    },
    aws: {
      name: "AWS",
      color: "232F3E",
      icon: "amazonaws"
    },
    azure: {
      name: "Azure",
      color: "0089D6",
      icon: "azuredevops"
    },
    gcp: {
      name: "GCP",
      color: "4285F4",
      icon: "googlecloud"
    },
    ibmcloud: {
      name: "IBM Cloud",
      color: "1261FE",
      icon: "ibmcloud"
    },
    // Databases
    mysql: {
      name: "MySQL",
      color: "4479A1",
      icon: "mysql"
    },
    mongodb: {
      name: "MongoDB",
      color: "47A248",
      icon: "mongodb"
    },
    redis: {
      name: "Redis",
      color: "DC382D",
      icon: "redis"
    },
    sqlite: {
      name: "SQLite",
      color: "003B57",
      icon: "sqlite"
    },
    postgresql: {
      name: "PostgreSQL",
      color: "336791",
      icon: "postgresql"
    },
    // Testing
    jest: {
      name: "Jest",
      color: "C21325",
      icon: "jest"
    },
    puppeteer: {
      name: "Puppeteer",
      color: "40B5A4",
      icon: "puppeteer"
    },
    enzyme: {
      name: "Testing Library",
      color: "E33332",
      icon: "testinglibrary"
    },
    cypress: {
      name: "Cypress",
      color: "17202C",
      icon: "cypress"
    },
    storybook: {
      name: "Storybook",
      color: "FF4785",
      icon: "storybook"
    },
    junit: {
      name: "JUnit",
      color: "25A162",
      icon: "junit5"
    },
    // Security
    nmap: {
      name: "Nmap",
      color: "4F5D95",
      icon: "nmap"
    },
    owaspzap: {
      name: "OWASP ZAP",
      color: "4B8BBE",
      icon: "owasp"
    },
    burpsuite: {
      name: "Burp Suite",
      color: "FAC748",
      icon: "burpsuite"
    },
    wireshark: {
      name: "Wireshark",
      color: "1679A7",
      icon: "wireshark"
    },
    hackthebox: {
      name: "Hack The Box",
      color: "9FEF00",
      icon: "hackthebox"
    },
    // Servers
    apachetomcat: {
      name: "Apache Tomcat",
      color: "F8DC75",
      icon: "apachetomcat"
    },
    nginx: {
      name: "Nginx",
      color: "269539",
      icon: "nginx"
    },
    apache: {
      name: "Apache",
      color: "D22128",
      icon: "apache"
    },
    caddy: {
      name: "Caddy",
      color: "0D597F",
      icon: "caddy"
    },
    lighttpd: {
      name: "Lighttpd",
      color: "FFB500",
      icon: "lighttpd"
    },
    // APIs
    graphql: {
      name: "GraphQL",
      color: "E10098",
      icon: "graphql"
    },
    // Servers
    debian: {
      name: "Debian",
      color: "A81D33",
      icon: "debian"
    },
    gitlab: {
      name: "GitLab",
      color: "FC6D26",
      icon: "gitlab"
    },
    // Tools
    gradle: {
      name: "Gradle",
      color: "02303A",
      icon: "gradle"
    },
    // DevOps
    rabbitMq: {
      name: "RabbitMQ",
      color: "FF6600",
      icon: "rabbitmq"
    },
    nixos: {
      name: "NixOS",
      color: "41439B",
      icon: "nixos"
    },
    rancher: {
      name: "Rancher",
      color: "0075A8",
      icon: "rancher"
    },
    raspberrypi: {
      name: "Raspberry Pi",
      color: "A22846",
      icon: "raspberrypi"
    },
    // Web3
    ethereum: {
      name: "Ethereum",
      color: "3C3C3D",
      icon: "ethereum"
    },
    solana: {
      name: "Solana",
      color: "3C3C3D",
      icon: "solana"
    },
    polkadot: {
      name: "Polkadot",
      color: "E6007A",
      icon: "polkadot"
    },
    substrate: {
      name: "Substrate",
      color: "E6007A",
      icon: "substrate"
    },
    near: {
      name: "NEAR",
      color: "222222",
      icon: "near"
    },
    avalanche: {
      name: "Avalanche",
      color: "62B0D9",
      icon: "avalanche"
    },
    harmony: {
      name: "Harmony",
      color: "FFC300",
      icon: "harmony"
    },
    opensea: {
      name: "OpenSea",
      color: "2081E2",
      icon: "opensea"
    },
    web3js: {
      name: "Web3.js",
      color: "F16822",
      icon: "web3dotjs"
    }
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
    if (!attributes)
      return null;
    const { name, color, icon } = attributes;
    const badgeEndpoint = "https://img.shields.io/static/v1";
    return `${badgeEndpoint}?` + (!iconOnly ? `label=&message=${encodeURIComponent(name)}` : "label=&message= ") + `&color=${color}&logo=${icon}&logoColor=${getIconColor(color)}`;
  };
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.iconOnly === void 0 && $$bindings.iconOnly && iconOnly !== void 0)
    $$bindings.iconOnly(iconOnly);
  if ($$props.useShields === void 0 && $$bindings.useShields && useShields !== void 0)
    $$bindings.useShields(useShields);
  $$result.css.add(css$5);
  langAttributes = getLangAttributes(language);
  badgeUrl = langAttributes ? getBadgeUrl(langAttributes) : null;
  return `<div>${badgeUrl && useShields ? `<img${add_attribute("src", badgeUrl, 0)} class="${escape(null_to_empty($$props.class), true) + " svelte-6i6os5"}"${add_attribute("height", size || null, 0)}${add_attribute("alt", langAttributes?.name, 0)}${add_attribute("title", `Language: ${langAttributes?.name}`, 0)}>` : `${langAttributes ? `<div class="language svelte-6i6os5"${add_styles({
    "background": `#${langAttributes?.color}`,
    "color": `#${getIconColor(langAttributes?.color)}`
  })}><img height="16" width="16" alt="l" src="${"https://cdn.simpleicons.org/" + escape(langAttributes.icon, true) + "/" + escape(getIconColor(langAttributes?.color), true)}" class="svelte-6i6os5"> ${escape(langAttributes.name)}</div>` : ``}`} </div>`;
});
const css$4 = {
  code: "dialog.svelte-1p4t7ge{max-width:60em;height:85vh;max-height:60em;border-radius:8px;border:none;padding:0;color:var(--foreground);background:var(--background)}dialog.svelte-1p4t7ge::backdrop{background:rgba(0, 0, 0, 0.5)}dialog[open].svelte-1p4t7ge{animation:svelte-1p4t7ge-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-1p4t7ge-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].svelte-1p4t7ge::backdrop{animation:svelte-1p4t7ge-fade 0.2s ease-out}@keyframes svelte-1p4t7ge-fade{from{opacity:0}to{opacity:1}}button.svelte-1p4t7ge{position:absolute;top:0.25rem;right:0.25rem;background:var(--background-lighter);border:none;color:var(--foreground);border-radius:5px;cursor:pointer;font-size:0.75rem}button.svelte-1p4t7ge:hover{color:var(--primary)}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal = false } = $$props;
  let { project } = $$props;
  let { readme: readme2 = "" } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  if ($$props.readme === void 0 && $$bindings.readme && readme2 !== void 0)
    $$bindings.readme(readme2);
  $$result.css.add(css$4);
  return ` <dialog class="svelte-1p4t7ge"${add_attribute("this", dialog, 0)}> <div>${slots.default ? slots.default({}) : ``} ${validate_component(ProjectReadme, "ProjectReadme").$$render($$result, { project, readme: readme2 }, {}, {})} <button autofocus class="svelte-1p4t7ge" data-svelte-h="svelte-1v4e8ao">Close</button></div> </dialog>`;
});
const css$3 = {
  code: ".project.svelte-1k31fd9.svelte-1k31fd9{display:flex;gap:1rem;background:var(--secondary);transition:all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;border-radius:0.5rem;border:1px solid rgba(30, 41, 59, 0.8);padding:1rem;box-shadow:0 20px 20px -20px rgba(99, 102, 241, 0.2)}.project.svelte-1k31fd9.svelte-1k31fd9:hover{box-shadow:0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 8px 10px -6px rgba(99, 102, 241, 0.2);border-color:#1e293b;text-decoration:none}.project.svelte-1k31fd9:hover .left .emoji.svelte-1k31fd9,.project.svelte-1k31fd9:hover .left img.svelte-1k31fd9{transform:scale(1.1)}.project.svelte-1k31fd9.svelte-1k31fd9:focus{outline:none;border:2px solid var(--primary)}.project.svelte-1k31fd9 .left.svelte-1k31fd9{display:flex;align-items:center}.project.svelte-1k31fd9 .left .emoji.svelte-1k31fd9,.project.svelte-1k31fd9 .left img.svelte-1k31fd9{font-size:3rem;width:3.8rem;border-radius:6px;padding:0.25rem;background:var(--background-lighter);transition:all cubic-bezier(0.4, 0, 0.2, 1) 0.25s}.project.svelte-1k31fd9 .right.svelte-1k31fd9{display:flex;flex-direction:column;gap:0.5rem}.project.svelte-1k31fd9 .right h3.svelte-1k31fd9{font-size:1.8rem;line-height:2.25rem;font-weight:700;color:#fff;margin:0;text-transform:capitalize}.project.svelte-1k31fd9 .right .description.svelte-1k31fd9{margin:0}.project.svelte-1k31fd9 .right .tags.svelte-1k31fd9{display:flex;gap:1rem}.project.svelte-1k31fd9 .right .tags .tag.svelte-1k31fd9{margin:0;padding:0 0.5rem;border-radius:var(--curve-factor, 4px);border:1px solid #1e293b}",
  map: null
};
let readme = "Loading...";
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  let showModal = false;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Modal, "Modal").$$render(
      $$result,
      { project, readme, showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {}
    )} <a class="project svelte-1k31fd9"${add_attribute("href", `/${project.name}`, 0)}><div class="left svelte-1k31fd9">${project.icon ? `<img${add_attribute("src", project.icon, 0)}${add_attribute("alt", project.emoji, 0)} class="svelte-1k31fd9">` : `<span class="emoji svelte-1k31fd9">${escape(project.emoji)}</span>`}</div> <div class="right svelte-1k31fd9"><h3 class="svelte-1k31fd9">${escape(formatTitle(project.title || project.name))}</h3> <p class="description svelte-1k31fd9">${escape(formatDescription(project.description))}</p> <div class="tags svelte-1k31fd9">${project.language ? `${validate_component(LangBadge, "LangBadge").$$render($$result, { language: project.language }, {}, {})}` : ``} ${project.stars && project.stars > 10 ? `<p class="tag svelte-1k31fd9"${add_attribute("title", `${project.stars} stars on GitHub`, 0)}>★ ${escape(formatStarCount(project.stars))}</p>` : ``} ${project.license && project.license !== "NOASSERTION" ? `<p class="tag svelte-1k31fd9"${add_attribute("title", `Licensed under ${project.license}`, 0)}>${escape(project.license)}</p>` : ``}</div></div> </a>`;
  } while (!$$settled);
  return $$rendered;
});
const css$2 = {
  code: ".project-list.svelte-1u68a33{display:grid;gap:1.8rem;grid-template-columns:repeat(auto-fit, minmax(350px, 1fr))}",
  map: null
};
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects = [] } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$2);
  return `<div class="project-list svelte-1u68a33">${each(projects, (project) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render($$result, { project }, {}, {})}`;
  })} </div>`;
});
const css$1 = {
  code: "section.svelte-17jg0wu.svelte-17jg0wu{padding:1rem;border-radius:0.5rem;background:var(--secondary);border:1px solid rgba(30, 41, 59, 0.8);transition:all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;margin:2rem auto;display:flex;justify-content:center;gap:1rem;box-shadow:0 20px 20px -20px rgba(99, 102, 241, 0.2)}@media(max-width: 600px){section.svelte-17jg0wu.svelte-17jg0wu{flex-wrap:wrap}}section.svelte-17jg0wu h3.svelte-17jg0wu{font-size:1.5rem;margin:0}section.svelte-17jg0wu p.svelte-17jg0wu{font-size:1.2rem}section.svelte-17jg0wu .pic.svelte-17jg0wu{border-radius:8px;width:15rem}section.svelte-17jg0wu .socials.svelte-17jg0wu,section.svelte-17jg0wu .links.svelte-17jg0wu{display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center}section.svelte-17jg0wu .socials a.svelte-17jg0wu,section.svelte-17jg0wu .links a.svelte-17jg0wu{text-decoration:none}section.svelte-17jg0wu .links a.svelte-17jg0wu:hover{color:var(--primary)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="svelte-17jg0wu"><div class="left"><h3 class="svelte-17jg0wu" data-svelte-h="svelte-14qvxnh">About</h3> <p class="svelte-17jg0wu" data-svelte-h="svelte-9yjofu">I&#39;m <a href="https://aliciasykes.com" class="svelte-17jg0wu">Alicia Sykes</a> 
      (<a href="https://github.com/lissy93" class="svelte-17jg0wu">Lissy93</a> on GitHub), a developer from London 🇬🇧</p> <p class="svelte-17jg0wu" data-svelte-h="svelte-4zo93u">I build free and open source software for the developers, and sometimes humans.</p> <p class="svelte-17jg0wu" data-svelte-h="svelte-ey1eof">My objective is to build tools that respect a user&#39;s privacy and are accessible to everyone.
      I have a particular interest in security, Linux and self-hosting.
      But also just love to build things that are fun and (sometimes, maybe) useful.</p> <p class="svelte-17jg0wu" data-svelte-h="svelte-v1fw68">I&#39;m always up for learning new things and collaborating on projects,
      so feel free to reach out if you&#39;ve got an idea you want to jam on!</p> <div class="socials svelte-17jg0wu">${each(config.socials, (social) => {
    return `<a${add_attribute("href", social.link + social.user, 0)} class="social-link svelte-17jg0wu"${add_attribute("title", social.name, 0)} target="_blank" rel="noreferrer">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        name: social.icon,
        color: "var(--foreground)",
        width: "1.8rem",
        height: "1.8rem",
        hoverColor: social.tone
      },
      {},
      {}
    )} </a>`;
  })}</div></div> <div class="right"><img class="pic svelte-17jg0wu" width="300" src="/profile.jpg" alt="Alicia Sykes"> <div class="links svelte-17jg0wu">${each(config.links, (link) => {
    return `<a${add_attribute("href", link.href, 0)} class="svelte-17jg0wu">${escape(link.text)}</a>`;
  })}</div></div> </section>`;
});
const css = {
  code: "main.svelte-1vz9aaq{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:70rem;margin:0 auto;box-sizing:border-box;@media (min-width: 1670px) {\n		max-width: 85rem;\n	}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const repos = data.repos || [];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-c497a7_START -->${$$result.title = `<title>AS93 | Home</title>`, ""}<meta name="description" content="AS93 - Free & Open Source apps by Alicia Sykes"><!-- HEAD_svelte-c497a7_END -->`, ""} <main class="svelte-1vz9aaq">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(ProjectList, "ProjectList").$$render($$result, { projects: repos }, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
