import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.yUKIw8S5.js","_app/immutable/chunks/CQuDvdyi.js","_app/immutable/chunks/CqdjneIq.js","_app/immutable/chunks/lbIQNWie.js","_app/immutable/chunks/PwzTo8u7.js","_app/immutable/chunks/DT2gXJdK.js","_app/immutable/chunks/CrcsG0Pp.js","_app/immutable/chunks/t8q2pQ2_.js","_app/immutable/chunks/Dm-TDKiM.js"];
export const stylesheets = ["_app/immutable/assets/Icon.Bx8-zec2.css","_app/immutable/assets/ProjectReadme.Bpsy3-AB.css","_app/immutable/assets/2.DXaf3rY5.css"];
export const fonts = [];
