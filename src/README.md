# Source Structure

This project follows a feature-based architecture with shared components.

## Directory Structure

```
src/
├── shared/              # Shared code used across features
│   ├── components/      # Reusable UI components
│   │   ├── content/     # Content components (CTAButton, SectionDivider, etc.)
│   │   ├── layout/      # Layout components (Navigation, Footer)
│   │   └── typography/  # Typography components (Heading, BodyText)
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Third-party integrations & design system
│   │   ├── design-system.ts    # Design tokens implementation
│   │   ├── design-tokens.ts    # Design system types
│   │   └── utils.ts            # Utility functions
│   ├── types/          # Shared TypeScript types
│   │   ├── components.ts       # Component prop types
│   │   ├── content.ts          # Content & domain types
│   │   └── index.ts            # Type exports
│   ├── utils/          # Utility functions
│   └── constants/      # App-wide constants
│
└── features/           # Feature-specific code
    ├── about/
    ├── admissions/
    ├── courses/
    ├── employers/
    ├── flagship-program/
    ├── home/
    ├── lucknow-lab/
    └── outcomes/
```

## Import Patterns

### Importing shared components:
```typescript
import { Heading } from '@/src/shared/components/typography/Heading';
import { CTAButton } from '@/src/shared/components/content/CTAButton';
```

### Importing types:
```typescript
// Component prop types
import { HeadingProps, CTAButtonProps } from '@/src/shared/types/components';

// Content types
import { NavigationItem, PageContent } from '@/src/shared/types/content';

// Design system types
import { ColorPalette, TypographyScale } from '@/src/shared/lib/design-tokens';
```

### Importing from shared lib:
```typescript
import { colors, typography } from '@/src/shared/lib/design-system';
```

### Importing features:
```typescript
import HomePage from '@/src/features/home/HomePage';
```

## Type Organization

Types are organized by purpose:

- **`shared/types/components.ts`**: Component prop interfaces (HeadingProps, CTAButtonProps, etc.)
- **`shared/types/content.ts`**: Content structure and domain types (NavigationItem, PageContent, etc.)
- **`shared/lib/design-tokens.ts`**: Design system type definitions (ColorPalette, TypographyScale, etc.)

## Guidelines

- **shared/**: Code that's used by multiple features
- **features/**: Feature-specific code that can have its own components, hooks, types, etc.
- Each feature can have its own `components/`, `hooks/`, `types/` folders for feature-specific code
- Keep shared code minimal and well-organized
- Import types from specific files (`types/components`, `types/content`, `lib/design-tokens`)
