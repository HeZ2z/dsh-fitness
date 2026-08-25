# dsh-fitness Engineering Rules

This repository is an installable DeepSeek Harness bundle. Keep the integration
layer small and keep fitness rules in deterministic domain modules.

## Non-negotiable rules

- Tools MUST return canonical JSON values and MUST keep human-readable rendering
  in the tool renderer.
- Skills MUST describe workflow and decision criteria. They MUST NOT own numeric
  calculations or persistence.
- Domain calculations MUST be deterministic, side-effect free, and unit-tested.
- Durable workout data MUST use the Harness domain storage capability. Do not
  store product data in session history or Markdown files.
- Plugin dependencies MUST be declared through Cordis injection.
- Tunable deployment values MUST be validated through a Schemastery Config.
- Plugin-owned resources MUST be released through Cordis effects.
- External names MUST use the dsh-fitness namespace to avoid registry collisions.
- Do not split Service Definition, Provider, and Consumer packages until they
  need independent replacement or release lifecycles.

## Required verification

Before claiming a change is complete, run:

```text
pnpm typecheck
pnpm test
pnpm build
```

Changes that affect the Harness composition must also be tested through a local
Cordis patch and recorded in `docs/compatibility.md`.

## Commit message format

Commit messages MUST use this structure:

```text
<type>(<scope>): <subject>

<body>

- 变更点 1
- 变更点 2
```

Use a lowercase `type` such as `feat`, `fix`, `docs`, `test`, `refactor`,
`build`, or `chore`. Use a short lowercase `scope` that identifies the affected
area, such as `plugin`, `storage`, `tool`, `skill`, `docs`, or `config`.
Keep the subject concise and place implementation context and a flat list of
important changes in the body.

## Documentation

- `docs/architecture.md` defines package boundaries.
- `docs/domain-model.md` defines fitness data contracts.
- `docs/testing.md` defines behavior-level acceptance tests.
- `docs/safety.md` defines health-data and recommendation boundaries.
- `docs/adr/` records durable architecture decisions.
