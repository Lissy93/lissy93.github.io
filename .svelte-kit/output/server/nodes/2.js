import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.V6CpKQSl.js","_app/immutable/chunks/la_CRTz7.js","_app/immutable/chunks/eNs8k2zD.js","_app/immutable/chunks/Cv9Nws20.js","_app/immutable/chunks/b4KII8c3.js","_app/immutable/chunks/yJfril8K.js","_app/immutable/chunks/Z8M-NQeD.js"];
export const stylesheets = ["_app/immutable/assets/Icon.fCVDIlbE.css","_app/immutable/assets/ProjectReadme.e7ebC1QG.css","_app/immutable/assets/2.quqm-cM5.css"];
export const fonts = [];
