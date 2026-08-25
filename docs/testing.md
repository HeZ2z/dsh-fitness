# Testing

Tests should prove behavior at the narrowest layer that can prove it.

## Domain tests

- Epley 1RM and other estimators use known examples.
- Training volume is deterministic.
- Progression handles completion, failure, and declining performance.
- Invalid weights, repetitions, and sets are rejected.

## Tool contract tests

- Required arguments are enforced by the Tool schema.
- Cross-field and positive-number constraints are enforced by the domain layer.
- Successful results are canonical JSON values.
- Business rejections are structured results, not prose parsing.
- Infrastructure failures are surfaced as tool errors.

## Integration tests

- The plugin loads through a Cordis patch.
- The Bundle manifest references the published package name.
- A persisted workout survives process restart.
- Plugin disposal removes registrations and closes owned resources.
- Invalid plugin configuration fails during load.

## Current smoke test

The initial scaffold includes only manifest tests. They are a bootstrap check,
not evidence that fitness behavior is implemented.
