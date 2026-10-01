---
title: Langa
tagline: Monitoring léger de logs et de métriques pour applications Java — ajoutez un agent, visualisez logs et temps d’exécution dans un dashboard.
repo: https://github.com/tonyadji/langa
status: wip
order: 1
stack: [Java 17/21, Spring Boot 3.5, MongoDB, Kafka, React 19, OAuth2 / OIDC, Docker, GitHub Actions]
---

## Ce que fait Langa

1. **Collecter** — un agent Java (publié sur Maven Central) s’ajoute à une application en `-javaagent` ou en dépendance. Il capture les logs Logback / Log4j2 et le temps d’exécution des méthodes `@Monitored`, les regroupe en lots et les envoie en HTTP (GZIP, signé HMAC) ou via Kafka.
2. **Ingérer & stocker** — le backend Spring Boot authentifie chaque lot, applique des limites de taille et de débit, et stocke les entrées dans MongoDB avec une politique de rétention par application.
3. **Explorer** — un dashboard React pour parcourir et filtrer les logs, tracer les métriques, suivre l’usage du stockage et partager des applications avec des utilisateurs ou des équipes.

## Points d’ingénierie

- **Architecture hexagonale / DDD** — domaine, cas d’usage et ports indépendants de Spring et MongoDB ; les adaptateurs vivent dans la couche infrastructure.
- **Événements de domaine + outbox** — les agrégats enregistrent des événements, stockés dans une outbox et publiés par un poller.
- **Ingestion sécurisée** — signature HMAC par application, fenêtre temporelle et nonces contre le rejeu, limites de taille et de débit par clé (`413` / `429` + `Retry-After`).
- **OIDC agnostique du fournisseur** — Microsoft Entra aujourd’hui, Cognito ou Keycloak par configuration.
- **Rétention des données** — index TTL MongoDB pilotés par une politique par application.
- **Agent résilient** — buffers bornés, retry avec backoff exponentiel, circuit breaker, pilotage à chaud via JMX / Actuator.
- **Qualité** — tests unitaires sur chaque couche, couverture JaCoCo, mutation testing PIT, Qodana, CI à chaque push.

## L’essayer

Toute la stack (MongoDB, backend, dashboard, application d’exemple instrumentée et Mailpit) démarre en local avec un simple `docker compose up --build`, avec des données de démo et un mode d’authentification local.

## Roadmap

Prochaines étapes : robustesse à l’échelle (outbox transactionnelle, verrous et rate limiting distribués), une vraie pyramide de tests avec Testcontainers et Playwright, puis des fonctionnalités produit comme la recherche plein texte, le live tail, les métriques p50/p95 et l’alerting.
