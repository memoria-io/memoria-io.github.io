## Overview

**Jobandtalent** is a leading workforce-as-a-service platform operating across multiple countries, connecting companies with temporary workers in logistics, warehousing, and transportation. It leverages advanced matching algorithms, mobile-first experiences, and scalable infrastructure to streamline hiring, onboarding, and workforce management.

## Ruby to Kotlin Migration

Migrating from a dynamic scripting ecosystem (Ruby) to a statically typed JVM-based stack (Kotlin) involved more than syntax—it required a shift in architectural thinking, from domain modeling to service scaffolding.

To ease the transition while teams maintained legacy systems, I delivered a structured reference approach:

1. **Kotlin Library** – Reusable modules (e.g., auth, API clients, Kafka ingestion).
2. **Gradle Plugins** – Shared best practices and code quality tools (linters, formatters, static analyzers).
3. **Service Scaffold** – A Kotlin Spring Boot foundation based on Hexagonal Architecture and DDD patterns.

With onboarding sessions, documentation, and Q\&As, teams were able to immediately develop new services by following the examples—accelerating delivery and unifying architectural direction.
