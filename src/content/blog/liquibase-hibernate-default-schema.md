---
title: liquibase-hibernate5 returns "HIBERNATE" as default schema and catalog
description: "An issue I raised against liquibase-hibernate5 3.6 in 2017 (issue #160)."
date: 2017-08-29
---
In August 2017 I reported that `liquibase-hibernate5` 3.6 returns `HIBERNATE` as both the default catalog and the default schema name. `HibernateDatabase.java` overrides `getDefaultSchemaName()` and `getDefaultCatalogName()` to return that value instead of the database's real defaults.

I asked whether the two overrides could be removed so the standard behaviour is restored. The issue is [liquibase/liquibase-hibernate#160](https://github.com/liquibase/liquibase-hibernate/issues/160); it is tracked internally as LB-465 and was still open when I last checked.

It is the same family of problem as [HHH-11954](https://hibernate.atlassian.net/browse/HHH-11954), where Hibernate ignores the `schema` of `@SequenceGenerator` on PostgreSQL: both come up when an application uses a non-default schema.
