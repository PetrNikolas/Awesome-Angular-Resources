# Agent Configuration Baseline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add shared repository guidance and safe project configuration for Codex, Claude Code, and Gemini CLI.

**Architecture:** `AGENTS.md` is the canonical repository guidance. `CLAUDE.md` and `GEMINI.md` import it using their native import syntax, while each CLI retains a minimal native runtime configuration. No file pins a model, provider, authentication method, MCP server, or personal preference.

**Tech Stack:** Markdown, TOML, JSON Schema, Codex CLI, Claude Code, Gemini CLI, Angular 22, TypeScript 6, Yarn 1

---

### Task 1: Maintain canonical repository guidance

**Files:**
- Create: `AGENTS.md`

- [x] **Step 1: Document the repository**

Create `AGENTS.md` with the current Angular architecture, Yarn commands, repository
map, change guidelines, catalog rules, verified infrastructure limitations, and Git
safety rules.

- [x] **Step 2: Verify Codex instruction loading**

Run a read-only ephemeral Codex session and ask it to report the first sentence of
the already-loaded repository guidance.

Expected: it reports the `Repository Guidelines` heading and the Awesome Angular
Resources project description without reading files through a tool.

### Task 2: Configure Codex

**Files:**
- Create: `.codex/config.toml`

- [x] **Step 1: Add the safety boundary**

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = false
```

- [x] **Step 2: Validate strict loading**

Run:

```bash
TERM=xterm-256color codex --strict-config --cd . doctor --summary --ascii
```

Expected: configuration loaded, restricted filesystem and network, approval
`OnRequest`, and no configuration failures.

### Task 3: Configure Claude Code

**Files:**
- Create: `CLAUDE.md`
- Create: `.claude/settings.json`

- [x] **Step 1: Import shared guidance**

```markdown
@AGENTS.md
```

- [x] **Step 2: Add project settings**

Use the official Claude Code settings schema, default interactive permissions,
read denials for common secret-bearing files, and a fail-closed sandbox that does
not auto-approve Bash or allow unsandboxed commands.

- [x] **Step 3: Validate settings**

Validate `.claude/settings.json` against its declared schema and confirm that
Claude Code accepts the project settings without a configuration error.

- [x] **Step 4: Validate loading and record the live-context limitation**

Confirm that Claude Code loads the project deny and sandbox settings before reaching
the API, and verify the `@AGENTS.md` import against the official Claude Code
documentation. A live model response is unavailable because the configured Anthropic
account reports an insufficient credit balance; this external billing limitation is
not a configuration failure.

### Task 4: Configure Gemini CLI

**Files:**
- Create: `GEMINI.md`
- Create: `.gemini/settings.json`

- [x] **Step 1: Import shared guidance**

```markdown
@./AGENTS.md
```

- [x] **Step 2: Add project settings**

Use the official Gemini CLI settings schema, default interactive approval,
`GEMINI.md` context discovery, sandboxing, and no sandbox network access.

- [x] **Step 3: Validate settings**

Validate `.gemini/settings.json` against its declared schema and confirm that
Gemini CLI accepts the project settings without a configuration error.

- [x] **Step 4: Validate loading and record the live-context limitation**

Confirm that Gemini CLI accepts the project settings before reaching authentication,
and verify the `@./AGENTS.md` import against the official Gemini CLI documentation. A
live model response is unavailable because no Gemini authentication method is
configured; this external account limitation is not a configuration failure.

### Task 5: Protect local files and verify the complete change

**Files:**
- Modify: `.gitignore`
- Modify: `docs/superpowers/specs/2026-06-29-agent-configuration-design.md`

- [x] **Step 1: Ignore local and secret files**

Ignore `CLAUDE.local.md`, `.claude/settings.local.json`, `.gemini/.env`, and
`.codex/*.local.toml`.

- [x] **Step 2: Run repository verification**

Run `git diff --check`, `yarn lint`, and `yarn build`. Confirm that known
production-build, unit-test, and E2E failures still match the documented
pre-existing Angular upgrade drift.

- [x] **Step 3: Review final scope**

Confirm all six instruction/runtime files exist, both JSON files match their
schemas, Codex strict configuration and `AGENTS.md` load, Claude and Gemini accept
their project configuration, imports use their documented syntax, external
live-context limitations are recorded, and the final diff contains no application
source or dependency changes.
