# Repository Guidelines

## Project Structure & Module Organization
`pages/` contains the Next.js routes (`index.js`, `about.js`, `map.js`) plus app-level files like `_app.js` and `_document.js`. Reusable UI lives in `components/`, with CSS Modules colocated beside components. Shared client and server utilities live in `src/`, including hooks in `src/hooks/`, shared region logic in `src/shared/`, and Architect HTTP handlers in `src/http/get-recent` and `src/http/post-analytics`. Static images and icons live in `public/`. Tape tests are in `test/`, currently focused on the `get-recent` endpoint and date parsing.

## Build, Test, and Development Commands
Run `npm install`, then install function dependencies in `src/http/get-recent` and `src/http/post-analytics`.

- `npm run dev`: starts Next.js on `:3000` and the local API proxy on `:3333` via `dev.js`.
- `npm run start`: runs the Architect sandbox and app server together.
- `npm run lint` / `npm run lint:fix`: checks or fixes ESLint issues across the repo.
- `npm test`: runs Tape tests against the Architect sandbox on port `6666`.
- `npm run build`: builds and exports the static site to `out/`.
- `npm run size`: checks repo footprint; keep the full dev environment under roughly 500 MB.

## Coding Style & Naming Conventions
Use 2-space indentation, single quotes, trailing commas where valid in ES5, and a 100-character print width; these come from `.prettierrc`. ESLint extends `eslint:recommended` and `plugin:react/recommended`. Prefer functional React components, keep CSS Module filenames aligned with components (`Map.module.css`, `ProjectInfo.module.css`), and use lowercase route filenames in `pages/`. Follow the existing utility naming style in `src/` (`use-region.js`, `snowy-owl.js`).

## Testing Guidelines
Tests use `tape` with `tap-spec`. Name files `*.test.js` under `test/`, mirroring the feature or module under test. For HTTP coverage, start and stop `@architect/sandbox` inside the test file, as in `test/http-get-recent/index.test.js`. Add focused unit tests for parsing and transformation helpers in `src/http/get-recent/` when behavior changes.

## Commit & Pull Request Guidelines
Recent commits use short, imperative subjects such as `Update intro for README` and `Add charset meta tag to _document`. Keep commit titles concise, sentence case, and behavior-focused. PRs should explain user-visible changes, note any API or config updates (`.arc-env`, `app.arc`, `dev.js` rewrites), link the relevant issue, and include screenshots for UI changes affecting pages or maps.

## Configuration Notes
Create `.arc-env` with an `@testing` `API_KEY` value from eBird before running tests or local API flows. If you add a new `src/http/*` function, update `dev.js` proxy rewrites so local development matches deployed routes.
