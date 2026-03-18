export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner.png","favicon.ico","favicon.png","profile.jpg","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Bp_ol7Dq.js",app:"_app/immutable/entry/app.Cnpvu2iG.js",imports:["_app/immutable/entry/start.Bp_ol7Dq.js","_app/immutable/chunks/BBiY4jFQ.js","_app/immutable/chunks/CqdjneIq.js","_app/immutable/chunks/CrcsG0Pp.js","_app/immutable/entry/app.Cnpvu2iG.js","_app/immutable/chunks/CqdjneIq.js","_app/immutable/chunks/CQuDvdyi.js","_app/immutable/chunks/CrcsG0Pp.js","_app/immutable/chunks/PwzTo8u7.js","_app/immutable/chunks/Dm-TDKiM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/[repo]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"repo","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
