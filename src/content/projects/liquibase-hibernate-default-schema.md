---
title: "liquibase-hibernate5 #160, wrong default schema and catalog"
summary: Reported that liquibase-hibernate5 3.6 returns "HIBERNATE" as the default schema and catalog name.
stack: [Liquibase, Hibernate 5, Java]
role: Reporter
featured: true
status: open
links:
  - label: "Issue #160 on GitHub"
    url: https://github.com/liquibase/liquibase-hibernate/issues/160
---
## Problem
`HibernateDatabase.java` overrides `getDefaultSchemaName()` and `getDefaultCatalogName()` to return `HIBERNATE` instead of the database's real defaults.

## Role
I raised the issue in August 2017 and asked for the two overrides to be removed so the standard behaviour is restored.

## Outcome
The issue was still open when I last checked. See the [blog post](/me/blog/liquibase-hibernate-default-schema) for details.
