# Repository Guidelines

## Project Overview

Awesome Angular Resources is a documentation-only repository. Its primary artifact
is the curated catalog in `README.md`; do not add application code, package managers,
build tooling, generated sites, or dependency lockfiles.

## Repository Map

- `README.md`: public catalog with Resources, Courses, and Starter Kits sections.
- `.github/`: GitHub automation and Copilot guidance.
- `.codex/`, `.claude/`, `.gemini/`: AI assistant runtime configuration.
- `AGENTS.md`, `CLAUDE.md`, `GEMINI.md`: shared AI maintenance instructions.

## Catalog Changes

- Edit only the relevant section of `README.md`.
- Keep each entry as `- [Name](URL) — concise description`.
- Resource entries also end with their existing type as `_(type)_`.
- Preserve existing entries and their order unless removal or reordering is explicitly
  requested.
- Keep duplicate entries when they intentionally belong to different top-level
  categories.
- Reuse existing Resource types instead of inventing near-duplicates.
- Include only current, actively maintained projects. Remove an entry when its
  canonical source is archived, explicitly deprecated or unmaintained, or tied to
  an unsupported Angular version without a maintained release.
- Do not classify a stable project as unmaintained solely because it has infrequent
  commits. Confirm maintenance status from official sources and package metadata.
- Prefer an official active successor when a resource has moved or merged.
- Verify new or changed external URLs and maintenance status when network access
  is available.
- Keep descriptions factual and concise; do not invent missing details.

## Change Guidelines

- Inspect `git status` before editing and preserve unrelated user changes.
- Make the smallest change that satisfies the task.
- Keep Markdown readable and use one blank line around headings and lists.
- Update these instructions and `.github/copilot-instructions.md` if the repository
  format changes.

## Verification

- Inspect the complete diff.
- Run `git diff --check`.
- Count entries in each affected README section and confirm no existing entry was
  accidentally lost or duplicated.
- For maintenance audits, record the official archive, deprecation, migration, or
  supported-version evidence used for each removal or replacement.
- For catalog-wide conversions, compare titles, URLs, descriptions, categories, and
  Resource types against the source evidence.

## Git Safety

- Do not run destructive cleanup or history-rewriting commands.
- Do not discard, overwrite, stage, commit, push, merge, or rebase unrelated work.
- Do not commit, push, or open a pull request unless the user explicitly requests
  it.
- Do not pull, rebase, or merge merely to complete an unrelated task.
