---
title: SonarQube Cloud taint analysis error
summary: Reported a SonarQube Cloud failure during taint analysis; SonarSource deployed a fix within about five weeks.
stack: [SonarQube Cloud, Maven, Java 17]
role: Reporter
featured: true
status: fixed
links:
  - label: Thread on the SonarSource community forum
    url: https://community.sonarsource.com/t/taint-analysis-was-interrupted-because-of-an-unexpected-error/144917
---
## Problem
A Maven scan failed during taint analysis with an `IllegalArgumentException`, "63 is not a valid line offset for pointer", for a line of only 11 characters.

## Role
I reported it on the SonarSource community forum on 23 July 2025.

## Outcome
SonarSource identified the cause and, on 29 August 2025, confirmed a fix deployed to SonarQube Cloud. See the [blog post](/me/blog/sonarqube-cloud-taint-analysis-error) for details.
