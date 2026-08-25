# Domain Model

This document is the contract target for the first fitness vertical slice. It
is intentionally not implemented yet.

## Canonical rules

- Weight is stored in kilograms as a number.
- Dates are stored as ISO 8601 timestamps with an explicit offset or UTC.
- Exercise ids are stable machine identifiers; display names are separate.
- A workout record is validated before persistence.
- Natural-language notes are optional context, never the source of numeric data.

## Initial records

```text
WorkoutSession
  id
  performedAt
  durationMinutes?
  sets[]
  notes?

WorkoutSet
  exerciseId
  weightKg
  reps
  rir?
```

## Versioning

The initial domain version will be `1`. A schema change must update the domain
version deliberately and include a compatibility decision in `docs/adr/`.
The Harness storage domain currently fails loudly on version mismatch rather
than performing implicit migrations.
