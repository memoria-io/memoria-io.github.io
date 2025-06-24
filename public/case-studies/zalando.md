## Overview

Zalando is Europe’s leading online fashion and lifestyle platform, serving over 45 million customers in 20+ markets. Renowned for its engineering culture and scale, Zalando operates thousands of microservices supported by an advanced internal developer platform and modern cloud-native infrastructure.

## Taking Over a Tier-1 Service

As part of a broader organizational restructure, our team inherited **Bankroll**—a Tier-1 service responsible for over 10,000 requests per second. It provided critical item-level data such as price, availability, and sizing across both internal APIs and public-facing endpoints. Despite its importance, the service had become an orphaned system with minimal recent activity and growing risk.

One immediate issue: a manual change in AWS had bypassed infrastructure-as-code (IaC), meaning any new deployment would reset to an outdated configuration and cause failure. We:

* Documented and communicated the risk
* Codified the missing infrastructure into the IaC repo
* Performed a safe deployment with traffic shadowing and live switch-over

The process restored confidence and stability in Bankroll operations.

## Rethinking the Architecture

The service relied heavily on **Elasticsearch** as its primary data store—a costly decision for a mostly key/value access pattern. After profiling usage, I proposed replacing it with a more cost-efficient store, estimating **up to 10x reduction** in AWS costs.

## Insights

Working on Bankroll was a lesson in technical ownership and risk management at scale. Despite its size, the service had become critical due to organizational shifts and growing interdependencies. The biggest challenge wasn’t just code—it was navigating **invisible risks**, cost inefficiencies, and institutional inertia. A working system is often left untouched, even when it no longer fits its domain.
