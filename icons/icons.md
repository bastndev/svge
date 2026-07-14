# Adding icons

This folder is the single source of truth. `bun run build:icons` (part of
`bun run build`) turns every `.svg` file here into `src/core/icons.gen.ts` and
the published `svg/` output — nothing else needs to be touched.

## Folder = category, automatically

```
icons/
├── social/
│   ├── github.svg
│   └── x.svg
└── tools/          ← a new folder is a new category, no script changes needed
    └── wrench.svg
```

The generator walks every subfolder of `icons/` and reads the immediate
parent folder name as the icon's `category`. Icon **filenames must be unique
across the whole tree** (not just within a folder) — the build fails loudly
if two categories both contain e.g. `home.svg`.

## What the generator normalizes for you (don't worry about these)

Four things are read out of your source file: the `viewBox` attribute, each
`<path d="...">` value, whether the root `<svg>` uses `fill="currentColor"`,
and an optional root `fill-rule="evenodd"`. Path-level presentation attributes
are discarded.

Outline icons use the fixed style:

```
fill="none" stroke="currentColor" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round"
```

Solid icons must set `fill="currentColor"` on the root `<svg>` and are emitted
without a stroke. If their geometry depends on even-odd cutouts, set
`fill-rule="evenodd"` there too. This preserves filled silhouettes while stroke
width, color, and cap style remain consistent across outline icons.

The generator also strips the standard Tabler "canvas bounds" helper path
(`<path d="M0 0h24v24H0z" .../>`) if present. If your source tool doesn't
emit that helper, nothing changes — it's a no-op removal, not a requirement.

## What you're actually responsible for

1. **Path geometry** — the actual shape. Obviously can't be automated.
2. **`viewBox`** — this is the one real lever over apparent icon _size_.
   `viewBox="0 0 24 24"` is the default 24×24 canvas. A tighter box like
   `viewBox="2 2 20 20"` crops in and renders the icon visibly larger at the
   same `size=` attribute. This repo's existing icons intentionally use
   different crops per icon to make them read as the same optical size —
   that's a deliberate design decision, not an inconsistency to "fix."
   A script can't reliably judge "does this look the same size as the
   others" — that needs a human/visual check. **Use the preview page below
   before publishing any new icon.**
3. **Filename** — kebab-case, matches the icon's public name exactly
   (`arrow-up.svg` → usable as `name="arrow-up"`).
