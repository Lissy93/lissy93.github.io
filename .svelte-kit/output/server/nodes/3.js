import * as server from '../entries/pages/_repo_/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_repo_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[repo]/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CazaCOMU.js","_app/immutable/chunks/CQuDvdyi.js","_app/immutable/chunks/CqdjneIq.js","_app/immutable/chunks/lbIQNWie.js","_app/immutable/chunks/CrcsG0Pp.js","_app/immutable/chunks/PwzTo8u7.js","_app/immutable/chunks/DT2gXJdK.js","_app/immutable/chunks/Bu1ZIWnk.js","_app/immutable/chunks/BBiY4jFQ.js"];
export const stylesheets = ["_app/immutable/assets/Icon.Bx8-zec2.css","_app/immutable/assets/ProjectReadme.Bpsy3-AB.css","_app/immutable/assets/ProjectHero.DeC-YfdG.css","_app/immutable/assets/3.B7UFhV0Q.css"];
export const fonts = [];
