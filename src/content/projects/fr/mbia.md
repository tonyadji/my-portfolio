---
title: Mbia
tagline: Une application web privée et collaborative de patrimoine familial — construisez votre arbre, ajoutez photos et histoires, et invitez vos proches à contribuer.
repo: https://github.com/tonyadji/mbia
status: wip
order: 2
stack: [Java 25, Spring Boot, PostgreSQL, Keycloak, S3 (RustFS), React, TypeScript, Docker]
---

## L’idée

Mbia permet aux familles de construire leur arbre ensemble, d’associer photos et histoires à leurs proches, et de s’inviter mutuellement à contribuer — en privé.

## Comment c’est construit

- **Spécifications d’abord** — règles produit, règles métier (personnes, liens de parenté, collaboration), UX, ADR et contrat OpenAPI sont rédigés avant le code et font foi.
- **Monolithe modulaire** — un backend Spring Boot sur Java 25, organisé en modules autour du domaine.
- **Identité** — Keycloak (OIDC) pour l’authentification.
- **Stockage des médias** — bucket privé compatible S3 (RustFS en local, choix documenté dans un ADR).
- **Frontend** — SPA React + TypeScript construite avec Vite.
- **Expérience développeur** — toutes les dépendances locales (PostgreSQL, RustFS, Keycloak, Mailpit) démarrent avec health checks via Docker Compose ; la livraison est planifiée en une série ordonnée de pull requests.
