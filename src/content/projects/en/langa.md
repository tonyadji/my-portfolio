---
title: Langa
tagline: Lightweight log & metrics monitoring for Java applications — drop in an agent, see your logs and method timings in a dashboard.
repo: https://github.com/tonyadji/langa
status: wip
order: 1
stack: [Java 17/21, Spring Boot 3.5, MongoDB, Kafka, React 19, OAuth2 / OIDC, Docker, GitHub Actions]
---

## What it does

1. **Collect** — a Java agent (published on Maven Central) is added to an application as a `-javaagent` or a dependency. It captures Logback / Log4j2 logs and the execution time of `@Monitored` methods, batches them and ships them over HTTP (GZIP, HMAC-signed) or Kafka.
2. **Ingest & store** — the Spring Boot backend authenticates each batch, enforces payload and rate limits, and stores entries in MongoDB with a per-application retention policy.
3. **Explore** — a React dashboard to browse and filter logs, chart metrics, follow storage usage and share applications with users or teams.

## Engineering highlights

- **Hexagonal architecture / DDD** — domain, use cases and ports independent of Spring and MongoDB; adapters live in the infrastructure layer.
- **Domain events + outbox** — aggregates register events, stored in an outbox and dispatched by a poller.
- **Secure ingestion** — per-application HMAC signature, timestamp window and nonce store against replay, payload size and per-key rate limits (`413` / `429` + `Retry-After`).
- **Provider-agnostic OIDC** — Microsoft Entra today, Cognito or Keycloak by configuration.
- **Data retention** — MongoDB TTL indexes driven by a per-application policy.
- **Resilient agent** — bounded buffers, retry with exponential backoff, circuit breaker, runtime control via JMX / Actuator.
- **Quality gates** — unit tests on every layer, JaCoCo coverage, PIT mutation testing, Qodana, CI on every push.

## Try it

The whole stack (MongoDB, backend, dashboard, an instrumented sample app and Mailpit) starts locally with a single `docker compose up --build`, with seeded demo data and a local sign-in mode.

## Roadmap

Next milestones: correctness at scale (transactional outbox, distributed locks and rate limiting), a full test pyramid with Testcontainers and Playwright, then product features such as full-text search, live tail, p50/p95 metrics and alerting.
