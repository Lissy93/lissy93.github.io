
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GITHUB_TOKEN: string;
	export const GITHUB_STATE: string;
	export const npm_package_devDependencies__types_node: string;
	export const DOTNET_NOLOGO: string;
	export const USER: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_config_user_agent: string;
	export const IS_STATIC: string;
	export const CI: string;
	export const npm_config_bin_links: string;
	export const RUNNER_ENVIRONMENT: string;
	export const GITHUB_ENV: string;
	export const PIPX_HOME: string;
	export const npm_node_execpath: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_config_init_version: string;
	export const JAVA_HOME_8_X64: string;
	export const SHLVL: string;
	export const npm_package_packageManager: string;
	export const HOME: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_devDependencies__typescript_eslint_parser: string;
	export const RUNNER_TEMP: string;
	export const GITHUB_EVENT_PATH: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const JAVA_HOME_11_X64: string;
	export const PIPX_BIN_DIR: string;
	export const GITHUB_REPOSITORY_OWNER: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const npm_config_init_license: string;
	export const GRADLE_HOME: string;
	export const ANDROID_NDK_LATEST_HOME: string;
	export const JAVA_HOME_21_X64: string;
	export const GITHUB_RETENTION_DAYS: string;
	export const YARN_WRAP_OUTPUT: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_config_version_tag_prefix: string;
	export const GITHUB_REPOSITORY_OWNER_ID: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const AZURE_EXTENSION_DIR: string;
	export const GITHUB_HEAD_REF: string;
	export const npm_package_devDependencies__fontsource_fira_mono: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const npm_config_engine_strict: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const npm_package_devDependencies_typescript: string;
	export const JAVA_HOME_25_X64: string;
	export const NVM_DIR: string;
	export const DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
	export const JAVA_HOME_17_X64: string;
	export const ImageVersion: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const RUNNER_OS: string;
	export const GITHUB_API_URL: string;
	export const GOROOT_1_22_X64: string;
	export const SWIFT_PATH: string;
	export const npm_package_type: string;
	export const CHROMEWEBDRIVER: string;
	export const GOROOT_1_23_X64: string;
	export const JOURNAL_STREAM: string;
	export const GITHUB_WORKFLOW: string;
	export const _: string;
	export const npm_package_scripts_check_watch: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const GOROOT_1_24_X64: string;
	export const npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: string;
	export const GOROOT_1_25_X64: string;
	export const GITHUB_RUN_ID: string;
	export const GITHUB_REF_TYPE: string;
	export const BOOTSTRAP_HASKELL_NONINTERACTIVE: string;
	export const GITHUB_WORKFLOW_SHA: string;
	export const GITHUB_BASE_REF: string;
	export const ImageOS: string;
	export const npm_config_ignore_scripts: string;
	export const GITHUB_WORKFLOW_REF: string;
	export const GITHUB_ACTION_REPOSITORY: string;
	export const ENABLE_RUNNER_TRACING: string;
	export const npm_package_devDependencies__fontsource_kanit: string;
	export const PATH: string;
	export const NODE: string;
	export const ANT_HOME: string;
	export const DOTNET_MULTILEVEL_LOOKUP: string;
	export const RUNNER_TRACKING_ID: string;
	export const INVOCATION_ID: string;
	export const RUNNER_TOOL_CACHE: string;
	export const npm_package_name: string;
	export const GITHUB_ACTION: string;
	export const GITHUB_RUN_NUMBER: string;
	export const GITHUB_TRIGGERING_ACTOR: string;
	export const RUNNER_ARCH: string;
	export const XDG_RUNTIME_DIR: string;
	export const AGENT_TOOLSDIRECTORY: string;
	export const LANG: string;
	export const VCPKG_INSTALLATION_ROOT: string;
	export const npm_package_devDependencies_eslint: string;
	export const CONDA: string;
	export const RUNNER_NAME: string;
	export const XDG_CONFIG_HOME: string;
	export const GITHUB_REF_NAME: string;
	export const GITHUB_REPOSITORY: string;
	export const npm_lifecycle_script: string;
	export const ANDROID_NDK_ROOT: string;
	export const GITHUB_ACTION_REF: string;
	export const DEBIAN_FRONTEND: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_config_version_git_message: string;
	export const SHELL: string;
	export const GITHUB_REPOSITORY_ID: string;
	export const GITHUB_ACTIONS: string;
	export const npm_lifecycle_event: string;
	export const npm_package_version: string;
	export const GITHUB_REF_PROTECTED: string;
	export const npm_config_argv: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies__fontsource_poppins: string;
	export const npm_package_scripts_build: string;
	export const GITHUB_WORKSPACE: string;
	export const ACCEPT_EULA: string;
	export const GITHUB_JOB: string;
	export const GITHUB_SHA: string;
	export const GITHUB_RUN_ATTEMPT: string;
	export const npm_config_version_git_tag: string;
	export const npm_config_version_git_sign: string;
	export const GITHUB_REF: string;
	export const GITHUB_ACTOR: string;
	export const ANDROID_SDK_ROOT: string;
	export const npm_package_license: string;
	export const npm_config_strict_ssl: string;
	export const npm_package_scripts_format: string;
	export const GITHUB_PATH: string;
	export const JAVA_HOME: string;
	export const PWD: string;
	export const GITHUB_ACTOR_ID: string;
	export const RUNNER_WORKSPACE: string;
	export const npm_execpath: string;
	export const HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: string;
	export const GITHUB_EVENT_NAME: string;
	export const HOMEBREW_NO_AUTO_UPDATE: string;
	export const ANDROID_HOME: string;
	export const GITHUB_SERVER_URL: string;
	export const GECKOWEBDRIVER: string;
	export const GHCUP_INSTALL_BASE_PREFIX: string;
	export const GITHUB_OUTPUT: string;
	export const EDGEWEBDRIVER: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies__neoconfetti_svelte: string;
	export const npm_config_save_prefix: string;
	export const npm_config_ignore_optional: string;
	export const ANDROID_NDK: string;
	export const SGX_AESM_ADDR: string;
	export const CHROME_BIN: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const npm_package_devDependencies_marked: string;
	export const npm_package_scripts_preview: string;
	export const SELENIUM_JAR_PATH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const INIT_CWD: string;
	export const ANDROID_NDK_HOME: string;
	export const GITHUB_STEP_SUMMARY: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GITHUB_TOKEN: string;
		GITHUB_STATE: string;
		npm_package_devDependencies__types_node: string;
		DOTNET_NOLOGO: string;
		USER: string;
		npm_config_version_commit_hooks: string;
		npm_config_user_agent: string;
		IS_STATIC: string;
		CI: string;
		npm_config_bin_links: string;
		RUNNER_ENVIRONMENT: string;
		GITHUB_ENV: string;
		PIPX_HOME: string;
		npm_node_execpath: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_config_init_version: string;
		JAVA_HOME_8_X64: string;
		SHLVL: string;
		npm_package_packageManager: string;
		HOME: string;
		npm_package_devDependencies_sass: string;
		npm_package_devDependencies__typescript_eslint_parser: string;
		RUNNER_TEMP: string;
		GITHUB_EVENT_PATH: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		JAVA_HOME_11_X64: string;
		PIPX_BIN_DIR: string;
		GITHUB_REPOSITORY_OWNER: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		npm_config_init_license: string;
		GRADLE_HOME: string;
		ANDROID_NDK_LATEST_HOME: string;
		JAVA_HOME_21_X64: string;
		GITHUB_RETENTION_DAYS: string;
		YARN_WRAP_OUTPUT: string;
		npm_package_devDependencies_svelte_check: string;
		npm_config_version_tag_prefix: string;
		GITHUB_REPOSITORY_OWNER_ID: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		AZURE_EXTENSION_DIR: string;
		GITHUB_HEAD_REF: string;
		npm_package_devDependencies__fontsource_fira_mono: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		npm_config_engine_strict: string;
		GITHUB_GRAPHQL_URL: string;
		npm_package_devDependencies_typescript: string;
		JAVA_HOME_25_X64: string;
		NVM_DIR: string;
		DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
		JAVA_HOME_17_X64: string;
		ImageVersion: string;
		npm_package_devDependencies_prettier: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		RUNNER_OS: string;
		GITHUB_API_URL: string;
		GOROOT_1_22_X64: string;
		SWIFT_PATH: string;
		npm_package_type: string;
		CHROMEWEBDRIVER: string;
		GOROOT_1_23_X64: string;
		JOURNAL_STREAM: string;
		GITHUB_WORKFLOW: string;
		_: string;
		npm_package_scripts_check_watch: string;
		MEMORY_PRESSURE_WATCH: string;
		GOROOT_1_24_X64: string;
		npm_package_devDependencies__typescript_eslint_eslint_plugin: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: string;
		GOROOT_1_25_X64: string;
		GITHUB_RUN_ID: string;
		GITHUB_REF_TYPE: string;
		BOOTSTRAP_HASKELL_NONINTERACTIVE: string;
		GITHUB_WORKFLOW_SHA: string;
		GITHUB_BASE_REF: string;
		ImageOS: string;
		npm_config_ignore_scripts: string;
		GITHUB_WORKFLOW_REF: string;
		GITHUB_ACTION_REPOSITORY: string;
		ENABLE_RUNNER_TRACING: string;
		npm_package_devDependencies__fontsource_kanit: string;
		PATH: string;
		NODE: string;
		ANT_HOME: string;
		DOTNET_MULTILEVEL_LOOKUP: string;
		RUNNER_TRACKING_ID: string;
		INVOCATION_ID: string;
		RUNNER_TOOL_CACHE: string;
		npm_package_name: string;
		GITHUB_ACTION: string;
		GITHUB_RUN_NUMBER: string;
		GITHUB_TRIGGERING_ACTOR: string;
		RUNNER_ARCH: string;
		XDG_RUNTIME_DIR: string;
		AGENT_TOOLSDIRECTORY: string;
		LANG: string;
		VCPKG_INSTALLATION_ROOT: string;
		npm_package_devDependencies_eslint: string;
		CONDA: string;
		RUNNER_NAME: string;
		XDG_CONFIG_HOME: string;
		GITHUB_REF_NAME: string;
		GITHUB_REPOSITORY: string;
		npm_lifecycle_script: string;
		ANDROID_NDK_ROOT: string;
		GITHUB_ACTION_REF: string;
		DEBIAN_FRONTEND: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_config_version_git_message: string;
		SHELL: string;
		GITHUB_REPOSITORY_ID: string;
		GITHUB_ACTIONS: string;
		npm_lifecycle_event: string;
		npm_package_version: string;
		GITHUB_REF_PROTECTED: string;
		npm_config_argv: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies__fontsource_poppins: string;
		npm_package_scripts_build: string;
		GITHUB_WORKSPACE: string;
		ACCEPT_EULA: string;
		GITHUB_JOB: string;
		GITHUB_SHA: string;
		GITHUB_RUN_ATTEMPT: string;
		npm_config_version_git_tag: string;
		npm_config_version_git_sign: string;
		GITHUB_REF: string;
		GITHUB_ACTOR: string;
		ANDROID_SDK_ROOT: string;
		npm_package_license: string;
		npm_config_strict_ssl: string;
		npm_package_scripts_format: string;
		GITHUB_PATH: string;
		JAVA_HOME: string;
		PWD: string;
		GITHUB_ACTOR_ID: string;
		RUNNER_WORKSPACE: string;
		npm_execpath: string;
		HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: string;
		GITHUB_EVENT_NAME: string;
		HOMEBREW_NO_AUTO_UPDATE: string;
		ANDROID_HOME: string;
		GITHUB_SERVER_URL: string;
		GECKOWEBDRIVER: string;
		GHCUP_INSTALL_BASE_PREFIX: string;
		GITHUB_OUTPUT: string;
		EDGEWEBDRIVER: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies__neoconfetti_svelte: string;
		npm_config_save_prefix: string;
		npm_config_ignore_optional: string;
		ANDROID_NDK: string;
		SGX_AESM_ADDR: string;
		CHROME_BIN: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		npm_package_devDependencies_marked: string;
		npm_package_scripts_preview: string;
		SELENIUM_JAR_PATH: string;
		MEMORY_PRESSURE_WRITE: string;
		INIT_CWD: string;
		ANDROID_NDK_HOME: string;
		GITHUB_STEP_SUMMARY: string;
		npm_package_devDependencies__types_eslint: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
