# Architecture

## Boundary

DeepSeek Harness owns natural-language interpretation, skill discovery, tool
registration, and plugin lifecycle. dsh-fitness owns fitness domain rules and
validated workout data.

```text
user language
    -> Skill workflow
    -> Harness Tool
    -> deterministic domain function
    -> Harness domain storage
```

## Package shape

The first release is one Bundle. It may contain multiple internal modules:

- `src/index.ts`: Cordis plugin entry and configuration.
- `src/tools/`: model-facing Tool adapters.
- `src/domain/`: pure fitness calculations and domain validation.
- `src/storage/`: typed domain declaration and repository operations.
- `skills/`: model-facing workflows and decision criteria.

Only split into Service Definition, Provider, and Consumer packages when a
capability needs independent replacement or release lifecycles.

## Naming

- Package and plugin: `dsh-fitness`.
- Tool names: `fitness_<verb>_<noun>` in lowercase snake case.
- Skill names: `fitness-<verb>-<noun>` in kebab case.
- Domain name: `fitness`.

## Composition

`cordis.patch.yml` is a Bundle manifest. It must insert stable row ids and avoid
overriding unrelated rows. A profile owns backend routing and user-specific
composition. Patch configuration replaces a row's complete config value rather
than deep-merging it.
