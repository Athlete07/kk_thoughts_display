

## Plan: Rename "Words" to "Verses"

Update every reference to "Words" across the site to "Verses" — nav links, page content, and homepage section.

### Changes

1. **`src/components/Navbar.tsx`** — Change nav link label from "Words" to "Verses" (path stays `/words`)

2. **`src/pages/Poetry.tsx`** — Update the header subtitle from "Words · Volume I" to "Verses · Volume I"

3. **`src/components/PoetrySection.tsx`** — Update the section label from "Words" to "Verses" and the collection link text from "The Collection →" to match

4. **`src/components/Footer.tsx`** — Update any "Words" reference to "Verses"

Path `/words` remains unchanged to avoid breaking links — only the display labels change.

