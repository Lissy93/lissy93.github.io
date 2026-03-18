
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/sitemap.xml" | "/[repo]";
		RouteParams(): {
			"/[repo]": { repo: string }
		};
		LayoutParams(): {
			"/": { repo?: string };
			"/sitemap.xml": Record<string, never>;
			"/[repo]": { repo: string }
		};
		Pathname(): "/" | "/sitemap.xml" | `/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/banner.png" | "/favicon.ico" | "/favicon.png" | "/profile.jpg" | "/robots.txt" | string & {};
	}
}