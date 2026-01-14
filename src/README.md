# HI Labs Website - Source Code Structure

This document explains the organization of the HI Labs website codebase.

## Folder Structure

```
src/
├── features/          # Feature-based modules (one per page)
│   ├── about/
│   │   ├── AboutPage.tsx
│   │   ├── index.ts
│   │   └── components/    # About-specific components
│   ├── admissions/
│   │   ├── AdmissionsPage.tsx
│   │   └── index.ts
│   ├── courses/
│   │   ├── CoursesPage.tsx
│   │   ├── index.ts
│   │   └── components/
│   ├── employers/
│   │   ├── EmployersPage.tsx
│   │   ├── index.ts
│   │   └── components/
│   ├── flagship-program/
│   │   ├── FlagshipProgramPage.tsx
│   │   ├── index.ts
│   │   └── components/
│   ├── home/
│   │   ├── HomePage.tsx
│   │   └── index.ts
│   ├── lucknow-lab/
│   │   ├── LucknowLabPage.tsx
│   │   ├── index.ts
│   │   └── components/
│   └── outcomes/
│       ├── OutcomesPage.tsx
│       ├── index.ts
│       └── components/
│
└── shared/            # Shared/reusable code
    ├── components/    # Shared UI components
    │   ├── content/   # Content structure components
    │   ├── layout/    # Layout components (Nav, Footer)
    │   └── typography/# Typography components
    └── types/         # TypeScript type definitions
```

## Architecture Principles

### Feature-Based Organization
Each page/feature has its own folder containing:
- **Page Component**: Main component for the feature (e.g., `AboutPage.tsx`)
- **index.ts**: Exports for the feature
- **components/**: Feature-specific components (only if needed)

### Shared Code
Code used across multiple features lives in `src/shared/`:
- **components/content/**: Reusable content components (CTAButton, SectionDivider, InfoBox, etc.)
- **components/layout/**: Layout components (Navigation, Footer)
- **components/typography/**: Typography components (Heading, BodyText)
- **types/**: Shared TypeScript interfaces

## Component Organization

### Feature Components
Components specific to a single feature stay in that feature's `components/` folder:
- `about/components/` - 6 components (PrincipleItem, DomainSpecification, etc.)
- `courses/components/` - ProgramCategory
- `employers/components/` - DeploymentModel
- `flagship-program/components/` - TermSection
- `lucknow-lab/components/` - FacilitySection
- `outcomes/components/` - EvidenceCategory

### Shared Components
Components used across multiple features (11 components):
- **Content**: CTAButton, SectionDivider, ProcessDiagram, TwoColumnSection, InfoBox, NumberedItem, DetailSection
- **Layout**: Navigation, Footer
- **Typography**: Heading (H1, H2, H3), BodyText

## Design System

All design tokens (colors, typography, spacing) are defined in `tailwind.config.ts`:
- **Colors**: background, primary, secondary, accent, warning
- **Typography**: IBM Plex Sans, IBM Plex Mono
- **Spacing**: section, subsection, element, tight, loose
- **Constraints**: No rounded corners, shadows, or gradients

Components use Tailwind classes directly - no separate design system files needed.

## Import Patterns

### Importing from Features
```typescript
// From app pages
import HomePage from '@/src/features/home/HomePage';

// Within a feature
import { ProgramCategory } from './components';
```

### Importing Shared Code
```typescript
// Shared components
import { H1, H2 } from '@/src/shared/components/typography';
import { CTAButton, SectionDivider } from '@/src/shared/components/content';

// Shared types
import { NavigationItem } from '@/src/shared/types';
```

## Benefits of This Structure

1. **Minimal**: Only essential files, no empty folders or unused code
2. **Scalable**: Easy to add new features without affecting existing code
3. **Maintainable**: Related code is co-located
4. **Clear**: Feature-specific vs shared code is obvious
5. **Clean**: No redundant design system files - Tailwind handles everything

## Adding New Features

To add a new feature:

1. Create folder: `src/features/new-feature/`
2. Add page component: `NewFeaturePage.tsx`
3. Add exports: `index.ts`
4. Add feature-specific components only if needed: `components/`
5. Import shared components from `src/shared/`

## Moving Components

**When to move a component to shared:**
- Used in 2+ features
- Generic and reusable
- No feature-specific logic

**When to keep in feature:**
- Only used in one feature
- Contains feature-specific logic
- Tightly coupled to feature data

**When to skip components folder:**
- Feature uses only shared components (like `home` and `admissions`)
