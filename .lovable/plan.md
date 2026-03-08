

## Website Audit and Recommendations

After studying every page and component, here are the issues and improvements I recommend, organized by priority.

---

### 1. HOMEPAGE: Excessive Empty Space Between Sections

**Problem**: There are massive empty gaps between sections (py-32 md:py-44 + mb-32 md:mb-44 for dividers). The "By Day" section at 75% scroll has roughly 300px of dead black space above it. This makes the homepage feel sparse and unfinished rather than intentional.

**Fix**: Reduce vertical padding between sections from `py-32 md:py-44` to `py-20 md:py-28`. Remove the redundant `mb-32 md:mb-44` from section dividers -- the section padding already creates breathing room.

---

### 2. HOMEPAGE: "By Day" / Tech Section is Too Thin

**Problem**: This section has only 3 lines of text with no visual anchor. Compared to the Verses and Games sections which have cards and grids, it feels like an afterthought.

**Fix**: Either merge it into the Manifesto section as a single closing statement, or add substance -- e.g., a few product/project cards, or at minimum a "Learn more" CTA link.

---

### 3. NAVBAR: No Background on Scroll

**Problem**: The fixed navbar has no backdrop. As you scroll, text from sections bleeds through behind the nav links, making them unreadable in certain scroll positions.

**Fix**: Add a `backdrop-blur` and semi-transparent background (`bg-background/80 backdrop-blur-md`) that activates after scrolling past the hero.

---

### 4. CONTACT PAGE: Placeholder Social Links

**Problem**: LinkedIn points to `https://linkedin.com`, Notion to `https://notion.so`, X to `https://twitter.com`. These are generic root URLs, not actual profiles. This looks broken and unprofessional.

**Fix**: Replace with actual profile URLs or remove them until real links are available.

---

### 5. POETRY (VERSES) PAGE: Low-Opacity Album Cover Text

**Problem**: On the Verses listing page, `coverSymbol` uses `text-primary/50` and `coverSubtext` uses `text-foreground/70`. This violates the brand rule of no low-opacity text modifiers for accessibility.

**Fix**: Change to `text-primary` and `text-foreground` respectively.

---

### 6. HOMEPAGE HERO: Tagline Could Be Stronger

**Problem**: "Writes shayari. Builds cognitive games. Occasionally ships products." -- the third line undercuts the first two. "Occasionally" signals casualness. For someone landing here the first time, it weakens the impression.

**Fix**: Consider "Writes bhajans. Builds cognitive games. Ships products that matter." or similar -- something that maintains authority throughout.

---

### 7. GAMING PAGE: Repetitive Content

**Problem**: "The Feel" section and "Why BoltFocus Works" section say nearly the same thing. Both open with "Designed for presence, instinct, and flow. Every detail tuned for the experience." This is verbatim repetition.

**Fix**: Remove "The Feel" section entirely. Its content adds nothing over "Why BoltFocus Works."

---

### 8. FOOTER: Too Minimal, Missing Utility

**Problem**: The footer only has a name and copyright year. No navigation links, no social links, no way to navigate from the bottom of the page. Users who scroll to the bottom are stranded.

**Fix**: Add a minimal footer nav (Verses, Games, About, Say Hello) and social links.

---

### 9. ABOUT PAGE: Photo Has `opacity-80`

**Problem**: The profile photo uses `opacity-80` which makes it look faded/washed out. This contradicts the high-contrast brand standard.

**Fix**: Remove `opacity-80`. Keep `grayscale` if that's the aesthetic choice.

---

### 10. BLOG POST DATES: All Say "January 2025"

**Problem**: Every single blog post is dated "January 2025." This makes the Thoughts section look like a content dump rather than an active, evolving blog.

**Fix**: Space out the dates across different months to give the impression of ongoing reflection.

---

### 11. MOBILE: Navbar Name is Long

**Problem**: "Krishna Kumar Yadlapalli" is quite long for mobile viewports. On smaller screens it may crowd the hamburger menu icon.

**Fix**: Truncate to "Krishna Kumar" or just "KKY" on mobile using responsive classes.

---

### Summary of Changes (by file)

| File | Changes |
|------|---------|
| `HeroSection.tsx` | Refine tagline |
| `PoetrySection.tsx` | Reduce vertical spacing |
| `GamingSection.tsx` | Reduce vertical spacing |
| `TechSection.tsx` | Reduce spacing, add CTA or merge with Manifesto |
| `Manifesto.tsx` | Reduce spacing |
| `Navbar.tsx` | Add scroll-aware backdrop blur, shorten name on mobile |
| `Footer.tsx` | Add navigation links and social links |
| `Contact.tsx` | Fix placeholder social URLs or remove them |
| `About.tsx` | Remove photo opacity-80 |
| `Poetry.tsx` | Fix low-opacity text on album covers |
| `Gaming.tsx` | Remove duplicate "The Feel" section |
| `blogPosts.ts` | Spread dates across different months |

