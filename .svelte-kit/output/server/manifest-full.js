export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["banner.png","favicon.ico","favicon.png","profile.jpg","robots.txt","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.7TSGtKgI.js",app:"_app/immutable/entry/app.FLPrmreo.js",imports:["_app/immutable/entry/start.7TSGtKgI.js","_app/immutable/chunks/B6-J02fQ.js","_app/immutable/chunks/ERshZsAb.js","_app/immutable/entry/app.FLPrmreo.js","_app/immutable/chunks/ERshZsAb.js","_app/immutable/chunks/zJWW4RqO.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
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
