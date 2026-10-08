---
title: Hibernate ignores the schema of @SequenceGenerator on PostgreSQL
description: A bug I reported against Hibernate 5.0.12 (HHH-11954) and how to work around it.
date: 2026-10-08
---
While running Spring Boot 1.5.4 with Hibernate 5.0.12 on PostgreSQL 9.6, Hibernate ignored the `schema` attribute of `@SequenceGenerator`. I reported it as [HHH-11954](https://hibernate.atlassian.net/browse/HHH-11954).

_Draft: expand with reproduction steps and workaround._
