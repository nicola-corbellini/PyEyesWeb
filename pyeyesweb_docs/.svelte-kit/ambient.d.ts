
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
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ALLUSERSPROFILE: string;
	export const APPDATA: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const CONDA_DEFAULT_ENV: string;
	export const CONDA_EXE: string;
	export const CONDA_PREFIX: string;
	export const CONDA_PREFIX_1: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const CONDA_PYTHON_EXE: string;
	export const CONDA_SHLVL: string;
	export const CUDA_PATH: string;
	export const CUDA_PATH_V12_8: string;
	export const DriverData: string;
	export const EFC_16372_1592913036: string;
	export const FIG_TERM: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: string;
	export const JETBRAINS_INTELLIJ_COMMAND_END_MARKER: string;
	export const KINECTSDK20_DIR: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_PATH: string;
	export const npm_command: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_config_globalconfig: string;
	export const npm_config_node_gyp: string;
	export const npm_config_npm_globalconfig: string;
	export const npm_config_registry: string;
	export const npm_config_user_agent: string;
	export const npm_config_verify_deps_before_run: string;
	export const npm_config__jsr_registry: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVM_HOME: string;
	export const NVM_SYMLINK: string;
	export const NVTOOLSEXT_PATH: string;
	export const OculusBase: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const OnlineServices: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const platformcode: string;
	export const pnpm_config_verify_deps_before_run: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const PROCESS_LAUNCHED_BY_CW: string;
	export const PROCESS_LAUNCHED_BY_Q: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSExecutionPolicyPreference: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const RegionCode: string;
	export const SESSIONNAME: string;
	export const SSL_CERT_FILE: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TEMP: string;
	export const TERMINAL_EMULATOR: string;
	export const TERM_SESSION_ID: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const windir: string;
	export const ZES_ENABLE_SYSMAN: string;
	export const _CONDA_EXE: string;
	export const _CONDA_ROOT: string;
	export const __CONDA_OPENSLL_CERT_FILE_SET: string;
	export const __PSLockDownPolicy: string;
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
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ALLUSERSPROFILE: string;
		APPDATA: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		CONDA_DEFAULT_ENV: string;
		CONDA_EXE: string;
		CONDA_PREFIX: string;
		CONDA_PREFIX_1: string;
		CONDA_PROMPT_MODIFIER: string;
		CONDA_PYTHON_EXE: string;
		CONDA_SHLVL: string;
		CUDA_PATH: string;
		CUDA_PATH_V12_8: string;
		DriverData: string;
		EFC_16372_1592913036: string;
		FIG_TERM: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		INTELLIJ_TERMINAL_COMMAND_BLOCKS_REWORKED: string;
		JETBRAINS_INTELLIJ_COMMAND_END_MARKER: string;
		KINECTSDK20_DIR: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		NODE_PATH: string;
		npm_command: string;
		npm_config_frozen_lockfile: string;
		npm_config_globalconfig: string;
		npm_config_node_gyp: string;
		npm_config_npm_globalconfig: string;
		npm_config_registry: string;
		npm_config_user_agent: string;
		npm_config_verify_deps_before_run: string;
		npm_config__jsr_registry: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NUMBER_OF_PROCESSORS: string;
		NVM_HOME: string;
		NVM_SYMLINK: string;
		NVTOOLSEXT_PATH: string;
		OculusBase: string;
		OneDrive: string;
		OneDriveConsumer: string;
		OnlineServices: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		platformcode: string;
		pnpm_config_verify_deps_before_run: string;
		PNPM_SCRIPT_SRC_DIR: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		PROCESS_LAUNCHED_BY_CW: string;
		PROCESS_LAUNCHED_BY_Q: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSExecutionPolicyPreference: string;
		PSModulePath: string;
		PUBLIC: string;
		RegionCode: string;
		SESSIONNAME: string;
		SSL_CERT_FILE: string;
		SystemDrive: string;
		SystemRoot: string;
		TEMP: string;
		TERMINAL_EMULATOR: string;
		TERM_SESSION_ID: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		windir: string;
		ZES_ENABLE_SYSMAN: string;
		_CONDA_EXE: string;
		_CONDA_ROOT: string;
		__CONDA_OPENSLL_CERT_FILE_SET: string;
		__PSLockDownPolicy: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
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
