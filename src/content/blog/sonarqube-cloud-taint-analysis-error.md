---
title: SonarQube Cloud taint analysis failing with "not a valid line offset"
description: A SonarQube Cloud bug I reported in July 2025, fixed by SonarSource in August 2025.
date: 2025-07-23
---
In July 2025 a Maven scan of a Java 17 project against SonarQube Cloud failed during taint analysis. The Maven Sonar plugin (0.8.12) reported an `IllegalArgumentException`: "63 is not a valid line offset for pointer", for a line with only 11 characters. The stack trace pointed at `DefaultInputFile.newPointer` and `newRange` in the scanner's file handling.

I posted it on the SonarSource community forum: [Taint analysis was interrupted because of an unexpected error](https://community.sonarsource.com/t/taint-analysis-was-interrupted-because-of-an-unexpected-error/144917).

A SonarSource engineer identified the cause and opened a ticket on 21 August 2025. On 29 August 2025 they confirmed a fix had been deployed to SonarQube Cloud, and scans stopped failing with this error.
