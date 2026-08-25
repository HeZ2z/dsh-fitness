# ADR 0001: Start With One Bundle

## Decision

The first release is one installable `dsh-fitness` Bundle containing the plugin
entry, Tools, domain logic, storage integration, and packaged Skills.

## Rationale

The Harness capability-layering guidance recommends separate Service Definition,
Provider, and Consumer packages only when those roles evolve or are replaced
independently. The fitness project has no second storage provider or alternate
consumer yet, so splitting now would add release and composition overhead without
creating a useful seam.

## Consequence

Internal module boundaries must remain explicit so a later package split is
possible. The domain layer must not depend on Cordis or Tool presentation types.

Confidence: high
Scope-risk: narrow
Directive: Revisit this decision when cloud storage, an alternate progression provider, or a non-Harness consumer is required.
