---
name: "Ayodeji — The Possibility Engine"
description: "An explorable portfolio of AI products and working mechanisms."
colors:
  engine-yellow: "#def749"
  engine-blue: "#3853ff"
  engine-paper: "#eef0e7"
  bg: "#f7f4ed"
  surface: "#eeeae1"
  wash: "#e8edda"
  sink: "#2d43ee"
  ink: "#20241f"
  ink-2: "#4b5148"
  ink-3: "#62685c"
  line: "#d6d4c9"
  line-2: "#999e90"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(50px, 6.8vw, 106px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(32px, 4vw, 60px)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.035em"
rounded:
  control: "3px"
spacing:
  section-desktop: "120px"
  section-tablet: "90px"
  section-mobile: "72px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 26px"
    height: "50px"
  filter-selected:
    backgroundColor: "{colors.engine-yellow}"
    textColor: "#182014"
    rounded: "{rounded.control}"
    padding: "10px 16px"
---

# Design System: Ayodeji — The Possibility Engine

## Overview

**Creative North Star: "The Possibility Engine"**

The Possibility Engine turns product mechanisms into an explorable structure. Architectural lettering and intersecting ribbons establish the surreal world; direct links and stable evidence passages let a hiring team inspect the work without completing a tour.

This is the implemented, user-pinned, code-led direction. There is no approved image comp. The display is expressive, while project contributions and synthetic demonstrations remain readable and explicitly scoped.

**Key Characteristics:**

- Ink-black ground with acid-yellow emphasis and electric-blue structural passages.
- Oversized geometric display type paired with precise, readable body text.
- One signature procedural sculpture, followed by distinct inspectable mechanisms.
- Flat evidence panels, direct navigation, and visible state controls.

## Colors

The palette moves between ink-black reading space, acid-yellow emphasis and committed electric-blue mechanism scenes.

### Primary

- **Acid yellow** (`engine-yellow`): hero emphasis, selected filters, action links, output panels and global keyboard focus. The existing `accent` alias has the same value.

### Secondary

- **Electric blue** (`engine-blue`): procedural ribbon and project geometry. `sink` is the existing supporting blue surface token; individual commerce and contact scenes retain their implemented blue variants rather than pretending every blue is one token.

### Neutral

- **Ink black** (`bg`) and **charcoal surface** (`surface`): ground and quiet containers.
- **Olive wash** (`wash`): supporting accent treatment.
- **Chalk** (`ink`), **soft text** (`ink-2`) and **muted text** (`ink-3`): reading hierarchy.
- **Paper** (`engine-paper`): the light Onboarding mechanism and contrast inside the commerce diagram.
- **Quiet rule** (`line`) and **strong rule** (`line-2`): dividers and selected boundaries.

**The Evidence Contrast Rule.** Choose text and focus colors for the actual scene background; the paper walkthrough uses blue focus instead of yellow.

## Typography

Unbounded supplies the broad, architectural display voice. Manrope carries body copy, controls, metadata and navigation. JetBrains Mono is loaded as a supporting legacy utility, not the defining display or label voice.

The CSS variables `--font-dm-sans` and `--font-instrument-serif` are legacy aliases for **Manrope** and **Unbounded**, respectively. `--font-sans` and `--font-serif` inherit those mappings. The names do not identify the fonts rendered by this build.

The frontmatter records the homepage display, section headline, default body and uppercase label roles. Case-study prose increases to 17px with 1.9 line-height and a 73ch maximum; About prose is capped at 65ch. Mobile prose generally drops to 14–15px. Titles balance their wrapping; longer mobile case-study headings can wrap anywhere to preserve the viewport.

## Layout

The main shell and shared chrome use a 1600px maximum with 5% horizontal padding. Section spacing steps through the frontmatter desktop, tablet and mobile values. At 1000px, multi-column headings simplify and the sculpture moves beneath the headline silhouette. At 700px, gutters become 6%, navigation becomes an inline Menu/Close disclosure, most evidence grids stack, and case-study contents navigation loses its sticky position.

The desktop hero combines left-aligned type with a right-hand sculpture, introductory text below, and three project selectors. Its composition uses a viewport-derived height bounded by a 560px minimum and 780px maximum. The tablet composition has a 580px minimum. Mobile uses a 660px minimum, full-width sculpture and lower introductory text. Keep the headline silhouette clear at intermediate widths, particularly 768px and 1000px.

Route-specific strategy is in [SURFACE-BRIEF.md](SURFACE-BRIEF.md). A case study, project index and contact page use different compositions inside the same world.

## Elevation & Depth

The interface is predominantly flat: color fields, one-pixel rules, typography and deliberate whitespace separate content. Do not infer a general card-shadow system from the legacy `--shadow` variable. The sculpture creates depth through projected geometry, face ordering, lighting and bounded pointer response; content panels do not imitate physical floating objects.

## Shapes

Controls, screenshots and small containers have nearly square corners, typically the frontmatter control radius. The signature silhouette is a set of intersecting ribbon loops around a faceted centre. The graphics fallback uses three thin ellipses. Directional arrows connect actions and workflow stages; circular dots mark selected projects or status. Avoid replacing these with a generic rounded-card grid.

## Components

### Shared navigation and footer

The Unbounded wordmark anchors the header. Work, About, Skills and Contact links sit beside a CV download; active desktop routes turn yellow. Mobile Menu/Close exposes ordinary links in document flow, closes on route changes and supports Escape with focus restoration. The skip link and no-JavaScript navigation preserve direct access. The footer repeats the name, social links, Privacy and year with a top rule.

### Actions and filters

Primary legacy buttons use chalk on ink-black inverse text; ghost buttons use a visible rule and surface fill on hover. The signature action is a yellow underlined text link whose arrow moves 6px over 0.45 seconds using the engine easing. Global link/button focus uses a 2px yellow outline with 6px offset. The work filters are All work, Built and Product leadership; their selected state uses yellow fill and `aria-pressed`, with a live explanatory sentence. They filter the wider collection, not the featured work above it.

### Project surfaces

Featured work uses large colored regions and authored mechanism fragments. The wider collection uses ruled rows with name, contribution, description and action, collapsing into one column on mobile. Evidence labels remain visible at every breakpoint. Case-study pages pair a clear introduction and role metadata with readable sections, optional product captures and a next-project link.

### Procedural sculpture

The sculpture is a Canvas 2D parametric ribbon renderer, not a generated image, video, WebGL scene or external texture. Project selectors alter its orientation and update a semantic description and direct project link. Pointer movement produces bounded rotation. Pause/Resume stops continuous animation; reduced motion renders a static state while keeping selection operable. IntersectionObserver and document visibility suspend offscreen/hidden work. ResizeObserver adapts the drawing, pixel ratio is capped at 1.75, and narrow canvas widths use fewer segments. CSS ellipses and semantic HTML remain when the canvas is unavailable. The canvas is hidden from assistive technology because its meaning is supplied by adjacent text and controls.

### Mechanism walkthroughs

Skilladder exposes context, grading, review and delivery with step controls and a next-stage action; its adjacent label is “Illustrative walkthrough · synthetic example”. Commerce switches food orders, tickets and utilities, plus a delayed-payment state, in a blue input/core/output diagram; explanatory copy makes clear that this is an illustration and sends no real payment. Onboarding uses a paper scene with Explorer, Synthesizer and Writer buttons, an intermediate artifact and native source disclosure; its label is “Authored synthetic example · not a recorded agent run”. Source imports and planned connectors remain distinct.

No editable text-field component is shipped by these walkthroughs; do not invent one in the component catalog. Global reveal classes are overridden to remain visible without transition. Reduced-motion styles remove smooth scrolling and nonessential CSS animation/transition.

## Do's and Don'ts

- Keep project names, contribution, evidence status and contact directly accessible.
- Use semantic controls with visible keyboard focus and explicit selected states.
- Preserve the complete static experience when motion or JavaScript is unavailable.
- Keep synthetic walkthrough labels adjacent to the demonstration.
- Retain provenance sidecars with every shipping raster, in `provenance/` (mirroring `public/` paths) so they are not publicly served.
- Do not reintroduce realistic hero imagery, generic robots, decorative terminals or arbitrary particle fields.
- Do not imply that an authored walkthrough is a recorded execution or a live payment.
- Do not use the legacy font variable names as a reason to restore DM Sans or Instrument Serif.
- Do not hide experiment evidence labels on smaller screens.
- Do not add forced tours, scroll hijacking or navigation that depends on the sculpture.

## Warm paper update

The site canvas is now warm off-white (#f7f4ed), with dark primary text (#20241f), muted olive-gray secondary text, and blue text accents. Yellow and blue project panels remain. The assessment walkthrough retains its dark background with explicitly scoped light text. Product logos use original dark variants on paper and white variants on blue.
