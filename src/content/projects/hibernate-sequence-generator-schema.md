---
title: Hibernate HHH-11954, SequenceGenerator schema ignored on PostgreSQL
summary: Reported a Hibernate bug where the schema attribute of @SequenceGenerator is ignored for PostgreSQL sequences.
stack: [Hibernate 5.0.12, PostgreSQL 9.6, Spring Boot 1.5.4]
role: Reporter
featured: true
status: open
links:
  - label: HHH-11954 on Hibernate Jira
    url: https://hibernate.atlassian.net/browse/HHH-11954
---
## Problem
With Hibernate 5.0.12 on PostgreSQL 9.6 (Spring Boot 1.5.4), the `schema` attribute of `@SequenceGenerator` was ignored, so sequences were looked up outside the intended schema.

## Role
I found and reported the bug in the Hibernate issue tracker.

## Outcome
The issue was still open when I last checked.
