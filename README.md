<div align="center">

  <a href="https://www.gohit.xyz/package/iconix">
    <img alt="iconix logo" src="https://raw.githubusercontent.com/bastndev/iconix/main/public/banner.webp" height="128">
  </a>

<br>

<h1></h1>

<br>

<a href="https://www.npmjs.com/package/iconix"><img alt="NPM version" src="https://img.shields.io/npm/v/iconix.svg?style=for-the-badge&logo=npm&logoColor=white&color=A8784E&labelColor=121214"></a>
<a href="https://www.npmjs.com/package/iconix"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/iconix.svg?style=for-the-badge&logo=npm&logoColor=white&color=A8784E&labelColor=121214"></a>
<a href="https://github.com/bastndev/iconix/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/npm/l/iconix.svg?style=for-the-badge&color=A8784E&labelColor=121214"></a>
<a href="https://github.com/bastndev/iconix/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/bastndev/iconix.svg?style=for-the-badge&logo=github&logoColor=white&color=A8784E&labelColor=121214"></a>

<h1></h1>

<p >
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_ES.md">Español 🇪🇸</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_ZH.md">中文 🇨🇳</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_DE.md">Deutsch 🇩🇪</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_FR.md">Français 🇫🇷</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_JA.md">日本語 🇯🇵</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_KO.md">한국어 🇰🇷</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_PT.md">Português 🇧🇷</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_RU.md">Русский 🇷🇺</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_VI.md">Tiếng Việt 🇻🇳</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_HI.md">हिन्दी 🇮🇳</a> |
  <a href="https://github.com/bastndev/iconix/blob/main/public/docs/README_AR.md">العربية 🇸🇦</a><span>...</span>
</p>

</div>

<br>

> A tiny, framework-agnostic **SVG icon library**. One source of truth for your icon set: a typed JavaScript registry, standalone SVG files, and a native web component — with a build pipeline ready for React Native, LynxJS, and VS Code.

<br>

```bash
npm i iconix
```

<br>

## ✨ Why Iconix?

Most icon libraries force you to choose between a giant React-only package, hand-copied SVGs, or a runtime that downloads icons over the network. **Iconix** takes a different approach:

- **Framework-agnostic core** — icons live as plain data (`name`, `viewBox`, `paths`) in `src/core/icons.gen.ts`.
- **Native web component** — drop in `<iconix-icon name="github">` anywhere HTML runs. No framework needed.
- **Typed API** — `IconName`, `IconData`, and `getIcon()` are fully typed out of the box.
- **Standalone SVGs** — every icon is also published under `svg/<name>.svg` for design tools or static sites.
- **Build-once pipeline** — add an SVG to `icons/<category>/` and `bun run build` regenerates everything.

<br>

## 📦 Installation

```bash
# npm
npm i iconix

# yarn
yarn add iconix

# pnpm
pnpm add iconix

# bun
bun add iconix
```

<br>

## 🚀 Quick Start

### Web Component (no framework)

Import the component once to register `<iconix-icon>`:

```ts
import 'iconix/web';
```

Then use it anywhere in your HTML or JSX:

```html
<iconix-icon name="github" size="32" color="#C49A6C" stroke-width="1.5"></iconix-icon>
```

### JavaScript / TypeScript API

```ts
import { icons, getIcon, type IconName, type IconData } from 'iconix';

const github = getIcon('github');
// {
//   name: 'github',
//   category: 'social',
//   viewBox: '0 0 24 24',
//   paths: [ ... ]
// }

const names: IconName[] = Object.keys(icons) as IconName[];
```

### Static SVG files

```html
<img src="node_modules/iconix/svg/github.svg" alt="GitHub" width="24" />
```

<br>

## 🧩 Web Component API

The `<iconix-icon>` custom element is registered automatically when you import `iconix/web`.

| Attribute      | Default        | Description                                                   |
| -------------- | -------------- | ------------------------------------------------------------- |
| `name`         | —              | Icon identifier (e.g. `github`, `x`, `instagram`).            |
| `size`         | `24`           | Width and height of the rendered SVG.                         |
| `color`        | `currentColor` | Stroke color.                                                 |
| `stroke-width` | `2`            | Stroke width.                                                 |

### Manual registration

If you need a different tag name, import the element class and register it yourself:

```ts
import { IconixIconElement, register } from 'iconix/web';

register('my-icon'); // now use <my-icon name="github">
```

<br>

## 🎨 Framework examples

### React

```tsx
import 'iconix/web';

export const SocialLinks = () => (
  <a href="https://github.com/bastndev/iconix">
    <iconix-icon name="github" size="24" />
  </a>
);
```

### Vue

```vue
<script setup>
import 'iconix/web';
</script>

<template>
  <iconix-icon name="github" size="24" />
</template>
```

### Svelte

```svelte
<script>
  import 'iconix/web';
</script>

<iconix-icon name="github" size="24" />
```

### Vanilla JS

```html
<!doctype html>
<html>
  <head>
    <script type="module">
      import 'iconix/web';
    </script>
  </head>
  <body>
    <iconix-icon name="github"></iconix-icon>
  </body>
</html>
```

<br>

## 🗂️ Available icons

All icons are grouped by category. The current set lives under `icons/social/`:

| Icon        | Name          | Category |
| ----------- | ------------- | -------- |
| Facebook    | `facebook`    | social   |
| GitHub      | `github`      | social   |
| Instagram   | `instagram`   | social   |
| LinkedIn    | `linkedin`    | social   |
| TikTok      | `tiktok`      | social   |
| X (Twitter) | `x`           | social   |
| YouTube     | `youtube`     | social   |

> New categories are created automatically by adding a subfolder under `icons/`.

<br>

## 🛠️ Development

### Scripts

```bash
# Generate icon data from icons/ into src/core/icons.gen.ts and svg/
bun run build:icons

# Full build: icons + TypeScript bundles (ESM + CJS + types)
bun run build

# Clean generated files
bun run clean

# Run smoke tests
bun run test
```

### Project structure

```
iconix/
├── icons/                  # Source of truth — add .svg files here
│   └── social/
│       ├── github.svg
│       └── ...
├── src/
│   ├── core/
│   │   ├── types.ts        # IconData interface
│   │   ├── icons.gen.ts    # Generated icon registry
│   │   └── index.ts        # Core API: getIcon, icons, types
│   └── web/
│       ├── icon-element.ts # <iconix-icon> custom element
│       └── index.ts        # Web entry + auto-registration
├── svg/                    # Generated standalone SVG files
├── scripts/
│   └── build-icons.ts      # Icon generator
└── test/
    └── smoke.mjs           # ESM/CJS smoke tests
```

### Adding a new icon

1. Drop an SVG into `icons/<category>/<name>.svg`.
2. Make sure it has a `viewBox` attribute.
3. Run `bun run build`.
4. Verify the output in `src/core/icons.gen.ts` and `svg/`.

Only the `viewBox` and `<path d="...">` values are read from the source file. Stroke, fill, and other presentation attributes are normalized at build time.

See [`icons/icons.md`](./icons/icons.md) for the full contributor guide.

<br>

## 📤 Publishing

```bash
bun run build
npm version <patch|minor|major>
npm publish
```

`prepublishOnly` runs the full build automatically.

<br>

## 🧪 Testing

Iconix ships with a small smoke test suite that verifies:

- The icon registry is non-empty.
- Specific icons are present.
- Dead canvas-bounds paths are stripped.
- Both ESM and CJS builds expose the same API.

```bash
bun run test
```

<br>

## 📄 License

MIT © [Gohit X](https://gohit.xyz) — see [`LICENSE`](./LICENSE) for details.

<br>

---

<div align="center">
  <p>
    Built with <strong>Bun</strong>, <strong>TypeScript</strong>, and <strong>Web Components</strong>.
  </p>
  <p>
    <a href="https://www.gohit.xyz/package/iconix">Website</a> ·
    <a href="https://github.com/bastndev/iconix">GitHub</a> ·
    <a href="https://www.npmjs.com/package/iconix">npm</a>
  </p>
</div>
