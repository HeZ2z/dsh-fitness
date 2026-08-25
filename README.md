# dsh-fitness

An agent-first fitness capability bundle for DeepSeek Harness.

The first release will validate one narrow loop:

```text
record a workout -> persist validated data -> read history -> recommend the next session
```

The repository currently contains only the Harness plugin shell. Tools, domain
storage, and fitness skills will be added one vertical slice at a time.

## Development

```bash
pnpm install
pnpm check
```

The committed `cordis.patch.yml` is the bundle patch and references the package
by name. For local source loading, copy
`cordis.local.patch.yml.example` to `cordis.local.patch.yml`, replace the
placeholder with the absolute path to `lib/index.js`, and run the Harness Web UI
with that patch from a DeepSeek Harness source checkout:

```bash
pnpm build
pnpm dsh web --patch /absolute/path/to/dsh-fitness/cordis.local.patch.yml
```

The local patch is ignored because it contains a machine-specific path.

## Project rules

See `AGENTS.md` and the documents under `docs/` before adding a Tool, Skill, or
storage domain.

DeepSeek Harness is currently a developer preview. The compatible package
versions are pinned in `package.json` until the first working vertical slice is
complete.
