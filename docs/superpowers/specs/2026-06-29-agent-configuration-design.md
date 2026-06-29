# Agent Configuration Design

## Goal

Add a shared, repository-owned configuration baseline for Codex, Claude Code, and Gemini CLI. Each tool should receive the same project facts and engineering rules while retaining a small, safe native runtime configuration.

## Repository Context

This repository is a Yarn 1 Angular application currently using Angular 22 and TypeScript 6. It combines a legacy NgModule-era structure with standalone components and pipes introduced during later upgrades.

Important paths:

- `src/app/shared/data/` contains the resource, course, and starter-kit catalogs.
- `src/app/shared/models/` defines the catalog item shapes.
- `src/app/features/` contains routed feature modules and standalone components.
- `src/app/core/` contains application shell components.
- `src/styles/` contains the global Sass architecture.
- `eslint.config.js`, `.prettierrc`, and `tsconfig.json` define the current lint, format, and TypeScript conventions.

The repository has no existing agent instructions, MCP servers, hooks, or tool-specific project configuration.

## Architecture

`AGENTS.md` will be the canonical source of repository instructions. It will document the project structure, supported commands, coding conventions, safe change practices, and proportional verification requirements.

`CLAUDE.md` and `GEMINI.md` will import `AGENTS.md` using each tool's supported import syntax. They may contain a short tool-specific section, but they will not duplicate shared project guidance.

Each CLI will also receive a minimal project runtime configuration:

- `.codex/config.toml` will use workspace-scoped writes and interactive approval when Codex needs to cross the sandbox boundary. It will not pin a model, provider, profile, or personal preference.
- `.claude/settings.json` will enable a project sandbox and deny reads of common secret-bearing files. It will not auto-approve broad shell command patterns.
- `.gemini/settings.json` will retain interactive approval, enable sandboxing, and explicitly select `GEMINI.md` as project context. It will not pin a model or authentication method.

Local overrides and secret-bearing agent files will be excluded through `.gitignore`.

## Canonical Instructions

`AGENTS.md` will include:

1. A concise description of the Angular application and its mixed legacy/modern architecture.
2. The Yarn-based setup and package scripts taken directly from `package.json`.
3. A map of the directories most commonly changed.
4. Rules to follow existing local patterns instead of performing broad framework migrations during unrelated work.
5. Catalog editing requirements:
   - preserve existing entries unless removal is explicitly requested;
   - keep IDs unique;
   - use model-compatible fields and existing category values;
   - make narrowly scoped edits in the relevant `*.data.ts` file.
6. TypeScript, Angular template, and Sass conventions derived from the checked-in configuration and nearby source files.
7. A verification matrix that starts with targeted checks and requires lint/build for broad source changes.
8. Git safety rules: inspect the working tree, preserve unrelated work, avoid destructive cleanup, and do not commit unless requested.

Commands that are currently broken by repository drift will be documented as known limitations rather than described as passing checks.

## Tool-Specific Files

### Codex

`AGENTS.md` is loaded natively by Codex. `.codex/config.toml` will define only the repository safety boundary:

- `approval_policy = "on-request"`
- `sandbox_mode = "workspace-write"`
- outbound network disabled inside the workspace-write sandbox

### Claude Code

`CLAUDE.md` will import `AGENTS.md`. `.claude/settings.json` will:

- reference the official Claude Code settings schema;
- enable sandboxing;
- retain default interactive permissions;
- deny reads of `.env`, `.env.*`, and conventional secrets directories or credential files.

### Gemini CLI

`GEMINI.md` will import `AGENTS.md`. `.gemini/settings.json` will:

- reference the official Gemini CLI settings schema;
- use the default interactive approval mode;
- enable sandboxing;
- load `GEMINI.md` as the context filename.

## Local and Secret Files

The following files will remain untracked:

- `CLAUDE.local.md`
- `.claude/settings.local.json`
- `.gemini/.env`
- `.gemini/settings.local.json`
- `.codex/*.local.toml`

No API keys, authentication configuration, machine-specific paths, user preferences, or model choices will be committed.

## Validation

Implementation validation will include:

1. Parse both JSON settings files.
2. Parse the TOML configuration with an available TOML parser or Codex strict configuration loading.
3. Run tool-native diagnostics or non-interactive configuration loading where this can be done without authentication side effects.
4. Run the repository's lint and production build commands and record any pre-existing failures separately from configuration failures.
5. Inspect `git diff --check`, the final diff, and repository status.

## Non-Goals

- Adding MCP servers, lifecycle hooks, skills, agents, commands, or plugins.
- Pinning models or providers.
- Changing application source code or dependencies.
- Repairing unrelated Angular upgrade regressions.
- Pulling or merging the remote commit that is ahead of the local branch.
