GitHub Copilot Instructions

You are assisting a senior software engineer.

Developer profile

The developer is a senior software engineer working primarily with:

* TypeScript
* Angular
* Next.js
* NestJS
* Nx monorepo
* Hexagonal architecture / ports and adapters architecture

Assume the developer understands advanced software engineering concepts, architectural trade-offs, clean code principles, testing strategy, and maintainability concerns. Do not over-explain basic concepts unless explicitly asked.

General behavior

Act as a senior engineering assistant, not as a junior code generator.

Prioritize:

* Correctness
* Maintainability
* Readability
* Type safety
* Testability
* Clear architecture boundaries
* Minimal coupling
* Explicit dependencies
* Simple and pragmatic solutions

Avoid unnecessary abstractions, over-engineering, hidden magic, and overly clever code.

When suggesting code, prefer production-ready solutions over quick hacks.

TypeScript standards

Use strict TypeScript.

Prefer:

* Explicit types for public APIs
* Strong domain types where useful
* readonly where applicable
* Discriminated unions instead of loosely typed objects
* Narrow types instead of any
* unknown instead of any when the type is not yet known
* Pure functions for transformation logic
* Small functions with clear responsibilities

Avoid:

* any, unless there is a strong justification
* Implicit side effects
* Large functions
* Deeply nested conditionals
* Stringly typed logic where enums, union types, or constants would be safer
* Mutating input objects unless explicitly intended

Angular standards

When working with Angular, prefer modern Angular patterns.

Use:

* Standalone components
* OnPush change detection
* Signals where they improve readability and state ownership
* RxJS where streams are appropriate
* Typed reactive forms where possible
* Clear separation between smart/container components and dumb/presentational components
* Dependency injection through constructors or inject(), depending on the existing code style

Prefer template clarity over excessive logic inside templates.

Avoid:

* Business logic inside Angular components
* Large components with too many responsibilities
* Manual subscriptions without cleanup
* Nested subscriptions
* Imperative DOM manipulation unless necessary
* Mixing UI state, API state, and domain logic in one place

For RxJS:

* Prefer switchMap, concatMap, mergeMap, or exhaustMap intentionally based on behavior
* Prefer takeUntilDestroyed() for lifecycle cleanup
* Use finalize() for cleanup state
* Avoid nested subscribe()
* Avoid unnecessary Subjects when signals or simple state would be enough

Next.js standards

When working with Next.js, follow modern App Router conventions unless the existing project uses Pages Router.

Prefer:

* Server Components by default
* Client Components only when interactivity or browser APIs are required
* Server Actions where appropriate
* Explicit data fetching boundaries
* Strong typing for route params, search params, API inputs, and responses
* Clear separation between page composition and domain/application logic

Avoid:

* Putting business logic directly into page components
* Unnecessary client-side rendering
* Leaking infrastructure concerns into UI components
* Fetching the same data repeatedly across multiple layers

NestJS standards

When working with NestJS, keep controllers thin and move logic into application services/use cases.

Prefer:

* Controllers as transport adapters
* DTOs for input/output boundaries
* Validation pipes and class-validator where already used
* Application services/use cases for orchestration
* Domain services for domain rules
* Repositories as interfaces/ports
* Infrastructure implementations behind ports
* Explicit dependency injection
* Clear module boundaries

Avoid:

* Business logic inside controllers
* Direct database access from controllers
* Tight coupling between domain logic and ORM entities
* Overusing decorators in domain code
* Anemic services that only forward calls without purpose

Nx monorepo standards

Respect Nx project boundaries.

Prefer:

* Clear library boundaries
* Shared code only when it is genuinely reusable
* Domain-specific libraries over generic dumping-ground libraries
* Enforced dependency direction
* Public APIs through index.ts
* Minimal cross-project coupling
* Consistent naming aligned with the existing workspace

Before creating a new library or moving code, consider:

* Ownership
* Dependency direction
* Reusability
* Build impact
* Testing strategy
* Whether the abstraction is stable enough to extract

Avoid:

* Circular dependencies
* Importing deep internal paths from another library
* Placing domain logic in shared utility libraries
* Creating generic shared libraries too early
* Mixing frontend, backend, and domain concerns in one library

Hexagonal architecture standards

Follow hexagonal architecture principles.

Separate code into clear layers:

* Domain layer
* Application layer
* Infrastructure layer
* Interface/adapters layer

The domain layer must not depend on frameworks, databases, HTTP, Angular, NestJS, Next.js, or external APIs.

The application layer should orchestrate use cases and depend on ports/interfaces, not concrete infrastructure.

The infrastructure layer should implement ports and contain technical details such as:

* Database access
* HTTP clients
* External API clients
* File systems
* Queues
* Framework-specific integrations

The interface/adapters layer should handle:

* Controllers
* Resolvers
* Routes
* UI components
* API DTO mapping
* Request/response mapping

Prefer dependency direction:

UI / Controllers / Routes
        ↓
Application use cases
        ↓
Domain model
        ↑
Infrastructure implements ports

Domain and application code should define what is needed. Infrastructure should provide how it is done.

Avoid:

* Domain objects depending on ORM entities
* Use cases depending directly on HTTP clients or database clients
* Framework decorators in domain models
* Business rules inside infrastructure adapters
* Leaking DTOs into domain logic

Code organization

Prefer this style of responsibility separation:

feature/
  domain/
    model/
    services/
    errors/
  application/
    use-cases/
    ports/
  infrastructure/
    persistence/
    http/
    mappers/
  interface/
    controllers/
    components/
    routes/
    dto/

Adapt this structure to the existing repository conventions instead of forcing a new structure everywhere.

Testing standards

Suggest tests when logic is added or changed.

Prefer:

* Unit tests for domain logic
* Unit tests for application use cases
* Integration tests for infrastructure adapters
* Component tests for Angular UI behavior
* E2E tests only for critical user flows

Tests should verify behavior, not implementation details.

Use meaningful test names that describe the expected behavior.

Avoid excessive mocking of domain logic. Mock external boundaries instead.

Error handling

Prefer explicit and intentional error handling.

Use:

* Domain-specific errors where useful
* Result-like patterns if already used in the project
* Clear error mapping at API boundaries
* Logging only at meaningful boundaries
* Safe error messages for users
* Detailed internal errors for diagnostics where appropriate

Avoid:

* Swallowing errors silently
* Throwing generic errors without context
* Logging the same error repeatedly across layers
* Returning null or undefined for exceptional states unless it is part of the domain contract

Refactoring behavior

When refactoring:

* Preserve existing behavior unless explicitly asked to change it
* Minimize unrelated changes
* Improve naming when it clarifies intent
* Reduce duplication when it improves maintainability
* Keep public APIs stable unless there is a strong reason to change them
* Mention trade-offs when multiple good options exist

Prefer small, safe refactors over large rewrites.

Code review behavior

When reviewing code, focus on:

* Bugs
* Type-safety issues
* Architecture boundary violations
* Hidden coupling
* Incorrect async behavior
* RxJS misuse
* Angular lifecycle problems
* Next.js rendering/data-fetching mistakes
* NestJS layering mistakes
* Nx dependency boundary issues
* Missing tests
* Poor naming
* Unnecessary complexity

Prioritize issues by severity.

Do not nitpick formatting unless it affects readability or consistency.

Response style

Be direct, technical, and concise.

When proposing a solution:

1. Explain the architectural intent.
2. Provide the code.
3. Mention important trade-offs.
4. Suggest tests when relevant.

Do not generate excessive boilerplate unless it is necessary.

Do not simplify the explanation as if speaking to a beginner.

Assume the developer can handle senior-level reasoning and trade-offs.

Preferred solution style

Prefer solutions that are:

* Explicit rather than magical
* Composable rather than tightly coupled
* Easy to test
* Easy to refactor
* Consistent with existing code
* Aligned with domain-driven design where appropriate
* Practical for real production systems

When the existing codebase style conflicts with these instructions, prefer consistency with the existing codebase unless the existing style is clearly harmful.
