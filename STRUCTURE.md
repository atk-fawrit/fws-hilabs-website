# Project Structure

Clean, standard Next.js project structure with feature-based architecture.

## Final Structure

```
src/
├── shared/                    # Shared code across all features
│   ├── components/           # Reusable UI components
│   │   ├── content/         # CTAButton, SectionDivider, ProcessDiagram, TwoColumnSection
│   │   ├── layout/          # Navigation, Footer
│   │   └── typography/      # Heading, BodyText
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Design system & utilities
│   │   ├── design-system.ts    # Design tokens implementation
│   │   ├── design-tokens.ts    # Design system type definitions
│   │   └── utils.ts            # Utility functions
│   ├── types/               # TypeScript types
│   │   ├── components.ts       # Component prop types
│   │   ├── content.ts          # Content & domain types
│   │   └── index.ts            # Type exports
│   ├── utils/               # Utility functions
│   └── constants/           # App-wide constants
│
└── features/                 # Feature-specific code
    ├── about/
    ├── admissions/
    ├── courses/
    ├── employers/
    ├── flagship-program/
    ├── home/
    ├── lucknow-lab/
    └── outcomes/
```

## Import Conventions

All imports use the `@/src/` prefix for consistency:

```typescript
// Components
import { Heading } from '@/src/shared/components/typography/Heading';
import { CTAButton } from '@/src/shared/components/content/CTAButton';

// Types
import { HeadingProps } from '@/src/shared/types/components';
import { NavigationItem } from '@/src/shared/types/content';
import { ColorPalette } from '@/src/shared/lib/design-tokens';

// Design system
import { colors, typography } from '@/src/shared/lib/design-system';

// Features
import HomePage from '@/src/features/home/HomePage';
```

## Key Principles

1. **No backward compatibility** - Clean imports, no legacy files
2. **Clear separation** - Shared vs feature-specific code
3. **Type organization** - Types grouped by purpose (components, content, design)
4. **Consistent imports** - Always use `@/src/` prefix
5. **Scalable** - Each feature can have its own components/hooks/types

## Type Organization

- **`shared/types/components.ts`** - Component prop interfaces
- **`shared/types/content.ts`** - Content structure & domain types  
- **`shared/lib/design-tokens.ts`** - Design system types

## Adding New Code

### Shared component:
```
src/shared/components/[category]/ComponentName.tsx
```

### Feature-specific component:
```
src/features/[feature]/components/ComponentName.tsx
```

### Shared type:
```
src/shared/types/components.ts or content.ts
```

### Feature-specific type:
```
src/features/[feature]/types.ts
```
