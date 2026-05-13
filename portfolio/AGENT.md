# Portfolio Build Agent Instructions
**Reference: AGENT.md**

## System Rules (MANDATORY)
1. **ALWAYS delegate ALL coding tasks to `consult_secondary_agent` with `allow_tools: true`
2. **Run `bun run format|lint` after EVERY file edit**
3. **Use `bun` instead of `npm`
4. **Never write code directly - use the secondary agent for all implementation**
5. **Consult me before any destructive actions (delete/move files)**
6. **Build in phases: barebones first, then apply DESIGN.md styling**
7. **Use `/ui-ux-pro-max` skill when delegating complex tasks**

## Build Blueprint

### Phase 1: Barebones Structure
- Create basic React components from resume.md content
- Establish component hierarchy (Header, Hero, Experience, Skills, Education, Footer)
- Implement simple Tailwind styling without DESIGN.md tokens yet
- Test navigation and routing work correctly

### Phase 2: Design System Integration
- Apply DESIGN.md color palette and typography tokens
- Replace basic styles with Notion-inspired components
- Add pastel feature cards, hero band, signature buttons
- Integrate workspace mockup elements where appropriate

## Resume Content Mapping

| Section | Component | Key Elements |
|---|---|---|
| Header | `<Header>` | Name, title, contact info, LinkedIn |
| Hero | `<Hero>` | Professional summary, CTA to view projects |
| Experience | `<ExperienceList>` | Job cards with company, dates, responsibilities, clients |
| Skills | `<SkillsGrid>` | Frontend, Backend, Cloud/DevOps categories |
| Education | `<EducationCard>` | Bulacan State University degree |
| Footer | `<Footer>` | Social links, simple copyright |

## Component Hierarchy
```
App
├── Header (sticky nav)
│   ├── Logo (text)
│   └── Navigation Links (Home, About, Experience, Skills, Education, Contact)
├── Hero Section
│   ├── Name Display
│   ├── Role Title
│   ├── Summary Text
│   └── CTA Button
├── Main Content
│   ├── ExperienceSection
│   │   └── JobCard (each position)
│   ├── SkillsSection
│   │   └── SkillCategory
│   ├── EducationSection
│   └── ContactSection
└── Footer
```

## Tailwind Config Setup Needed

```ts
// tailwind.config.ts - Add DESIGN.md color tokens here later
e.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#5645d4',
        brand_navy: '#0a1530',
        // ... all other DESIGN.md tokens
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    }
  }
}
```

## Immediate Next Steps (Plan Mode Active)

1. **EXPLORE**: Check src/ directory structure, existing components if any
2. **PROPOSE**: Present clear step-by-step plan for barebones build
3. **WAIT**: Do NOT start implementing until user approves the plan
4. **IMPLEMENT** (via secondary agent): Create basic component files
5. **VALIDATE**: Run `bun run dev` to test everything works
6. **STYLE** (Phase 2): Apply DESIGN.md tokens and Notion-inspired components

## Delegation Pattern for All Coding Tasks

```bash
# For EVERY file creation/edit, use:
consult_secondary_agent(task="create component files", agent_role="coder", allow_tools=true)
```

## Checkpoint Files to Create
- src/components/ - Base component directory
- src/types/ - TypeScript types for components
- src/data/ - Resume data extracted from resume.md
- public/images/ - Placeholder assets
- tailwind.config.ts - DESIGN.md color integration (Phase 2)
