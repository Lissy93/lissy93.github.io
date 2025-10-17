import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.ySX-syMv.js","_app/immutable/chunks/ERshZsAb.js","_app/immutable/chunks/zJWW4RqO.js","_app/immutable/chunks/tVs-4zWj.js","_app/immutable/chunks/dtH_s4qS.js"];
export const stylesheets = ["_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/2.quqm-cM5.css"];
export const fonts = [];
