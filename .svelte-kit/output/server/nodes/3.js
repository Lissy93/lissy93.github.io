import * as server from '../entries/pages/_repo_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_repo_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[repo]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.QGvZb9cj.js","_app/immutable/chunks/ERshZsAb.js","_app/immutable/chunks/zJWW4RqO.js","_app/immutable/chunks/dtH_s4qS.js","_app/immutable/chunks/tVs-4zWj.js","_app/immutable/chunks/Ny8HH8Dq.js","_app/immutable/chunks/B6-J02fQ.js"];
export const stylesheets = ["_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/ProjectHero.EUyf_c_c.css","_app/immutable/assets/3.giYQxvlo.css"];
export const fonts = [];
