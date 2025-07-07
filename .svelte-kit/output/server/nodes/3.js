import * as server from '../entries/pages/_repo_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_repo_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[repo]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.F5Qnxcsb.js","_app/immutable/chunks/0HuHagjb.js","_app/immutable/chunks/la_CRTz7.js","_app/immutable/chunks/eNs8k2zD.js","_app/immutable/chunks/Z8M-NQeD.js","_app/immutable/chunks/Cv9Nws20.js","_app/immutable/chunks/Qbt5g8OB.js","_app/immutable/chunks/VgMM-qxi.js","_app/immutable/chunks/b4KII8c3.js"];
export const stylesheets = ["_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/ProjectHero.EUyf_c_c.css","_app/immutable/assets/3.giYQxvlo.css"];
export const fonts = [];
