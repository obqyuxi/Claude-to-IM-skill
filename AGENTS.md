# Repository Guidelines

## Project Structure & Module Organization
This repository is a TypeScript skill package that bridges IM platforms to Claude Code or Codex sessions. Keep runtime code in `src/`. The daemon entry point is `src/main.ts`; supporting modules include `config.ts`, `store.ts`, `llm-provider.ts`, `codex-provider.ts`, `permission-gateway.ts`, `logger.ts`, and `sse-utils.ts`. Place tests in `src/__tests__/` using the `*.test.ts` suffix. Keep operational scripts in `scripts/` (for example `scripts/daemon.sh`, `scripts/doctor.sh`, `scripts/build.js`). User-facing docs live in `README.md` and `README_CN.md`.

## Build, Test, and Development Commands
- `npm install` — install Node.js dependencies (`Node >= 20`).
- `npm run dev` — run the bridge directly with `tsx src/main.ts`.
- `npm run typecheck` — run strict TypeScript checks with `tsc --noEmit`.
- `npm test` — run the Node test runner against `src/__tests__/*.test.ts` with an isolated temporary `CTI_HOME`.
- `npm run build` — build the distributable bundle through `scripts/build.js`.
- `bash scripts/doctor.sh` — run local diagnostics for config, runtime, and environment issues.

## Coding Style & Naming Conventions
Use ESM TypeScript and follow the existing two-space indentation style. Prefer explicit types, narrow interfaces, and direct error handling over implicit behavior. Use `camelCase` for variables and functions, `PascalCase` for classes, and `UPPER_SNAKE_CASE` for exported constants. Keep source filenames in kebab-case such as `permission-gateway.ts`. Match the current import style, including explicit `.js` extensions in local imports. No formatter is configured, so keep diffs small and consistent with surrounding code.

## Testing Guidelines
Tests use the built-in Node test runner plus `tsx`. Add or update tests whenever behavior changes in config loading, persistence, permission handling, or provider selection. Name files `*.test.ts` and colocate them under `src/__tests__/`. Run `npm test` before opening a PR, and run `npm run typecheck` for type-sensitive changes.

## Commit & Pull Request Guidelines
Follow the existing Conventional Commit pattern from history: `fix: ...`, `feat: ...`, `improve: ...`. Keep subjects short, imperative, and specific; include issue references when relevant, for example `fix: resolve Claude CLI path on Windows (#1)`. PRs should summarize the behavior change, list commands run, and call out affected platforms or runtimes (`Telegram`, `Discord`, `Feishu/Lark`, `QQ`, `claude`, `codex`). Include screenshots or log snippets only when setup flow or daemon UX changes.

## Security & Configuration Tips
Never commit tokens, private IDs, or `config.env` contents. Runtime secrets belong in `~/.claude-to-im/config.env` with restrictive permissions. Preserve log redaction behavior, and avoid adding new network calls or telemetry unless explicitly requested.
