# Repository Guidelines

## Project Overview

Awesome Angular Resources is a Yarn 1 Angular 22 application that publishes curated
Angular resources, courses, and starter kits. The codebase combines a legacy
NgModule-era shell with standalone components and pipes added during later upgrades.
Preserve that mixed architecture unless a task explicitly requests a migration.

## Setup and Commands

- Install dependencies with `yarn install --frozen-lockfile`.
- Run the development server with `yarn start`.
- Run lint with `yarn lint`.
- Run the Karma unit suite with `yarn test --watch=false --browsers=ChromeHeadless`.
- The legacy `yarn e2e` script is currently unavailable because Angular cannot find
  the removed `@angular-devkit/build-angular:protractor` builder.
- Create a development build with `yarn build`.
- Create a production build with `yarn build-prod`.
- `yarn ci` is mutating: it runs Prettier with `--write` before lint and tests. Do not
  use it as a read-only verification command.

Use Yarn, not npm, because `yarn.lock` is the checked-in dependency lockfile. Do not
edit the generated lockfile by hand.

## Repository Map

- `src/app/core/`: application shell, header, and footer.
- `src/app/features/`: routed feature modules and their standalone components.
- `src/app/shared/components/`: reusable standalone UI components.
- `src/app/shared/data/`: resource, course, and starter-kit catalogs.
- `src/app/shared/models/`: catalog item interfaces.
- `src/styles/`: global Sass architecture.
- `src/environments/`: build-time environment replacements.
- `e2e/`: legacy Protractor end-to-end tests.
- `angular.json`: Angular builders, assets, styles, and build configurations.
- `eslint.config.js`, `.prettierrc`, and `tsconfig.json`: lint, formatting, and
  TypeScript rules.

## Change Guidelines

- Inspect `git status` before editing and preserve unrelated user changes.
- Make the smallest change that satisfies the task. Do not combine catalog updates or
  bug fixes with broad Angular, dependency, testing, or styling migrations.
- Follow the pattern in the nearest file. Some areas still use NgModules while many
  leaf components and pipes are standalone.
- Use the configured `@core`, `@data`, `@features`, `@models`, and `@shared` aliases
  for cross-area imports. Keep short same-area imports relative.
- Keep components focused, use `ChangeDetectionStrategy.OnPush` where the surrounding
  feature does, and retain Angular component class suffixes and `app-` selectors.
- Use 2-space indentation, single quotes, semicolons, trailing ES5 commas, and a
  120-column print width.
- Keep component-specific Sass next to its component and shared Sass under
  `src/styles/`. Reuse existing variables, mixins, and layout partials.
- Avoid `any`; existing lint permits it only as a warning, not as a preferred style.
- Do not add console logging except intentional `console.warn` or `console.error`.

## Catalog Changes

- Edit only the relevant file under `src/app/shared/data/`.
- Preserve existing entries unless removal is explicitly requested.
- Keep numeric IDs unique within the edited catalog.
- Use fields declared by the matching model in `src/app/shared/models/`.
- Reuse existing category values rather than inventing near-duplicates.
- Keep entry descriptions concise and verify external URLs when network access is
  available.

## Verification

- Documentation or catalog-only change: inspect the diff, run `git diff --check`, and
  run the narrowest relevant lint/build check.
- TypeScript, template, or Sass change: run `yarn lint` and `yarn build`.
- Build, routing, dependency, or production configuration change: run `yarn lint` and
  `yarn build-prod`; run targeted tests when the affected test infrastructure works.
- Test-related change: run the narrowest relevant test first, then the broader suite
  if practical.

The repository contains legacy Karma, Protractor, and dependency configuration that
has drifted during the Angular 22 upgrade. In particular, `yarn build-prod` currently
fails schema validation because `angular.json` still contains the removed `extractCss`
production option, while `yarn build` succeeds with a deprecation warning for the
Webpack `browser` builder. The headless unit command also currently fails because
`src/test.ts` imports the no-longer-exported `zone.js/dist/zone-testing` path.
`yarn e2e` currently fails because its Protractor builder is no longer available.
Treat these as known infrastructure limitations unless the task changes build or test
configuration. If another command fails, distinguish a pre-existing failure from a
regression caused by the current change.

## Git Safety

- Do not run destructive cleanup or history-rewriting commands.
- Do not discard, overwrite, stage, commit, push, or merge unrelated work.
- Do not commit, push, or open a pull request unless the user explicitly requests it.
- The local `master` branch can diverge from `origin/master`; do not pull, rebase, or
  merge merely to complete an unrelated task.
