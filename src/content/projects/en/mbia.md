---
title: Mbia
tagline: A private, collaborative family-heritage web app — build your family tree, attach photos and stories, and invite relatives to contribute.
repo: https://github.com/tonyadji/mbia
status: wip
order: 2
stack: [Java 25, Spring Boot, PostgreSQL, Keycloak, S3 (RustFS), React, TypeScript, Docker]
---

## The idea

Mbia lets families build their tree together, attach photos and stories to relatives, and invite each other to contribute — privately.

## How it is built

- **Specification-first** — product rules, domain rules (people, relationships, collaboration), UX, architecture decision records (ADRs) and an OpenAPI contract are written before the code and act as the source of truth.
- **Modular monolith** — a Spring Boot backend on Java 25, organized in modules around the domain.
- **Identity** — Keycloak (OIDC) for authentication.
- **Media storage** — private S3-compatible bucket (RustFS locally, documented in an ADR).
- **Frontend** — React + TypeScript single-page app built with Vite.
- **Developer experience** — every local dependency (PostgreSQL, RustFS, Keycloak, Mailpit) starts with health checks via Docker Compose; delivery is planned as an ordered series of pull requests.
