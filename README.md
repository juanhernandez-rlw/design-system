# Mini Design System

A small React design system with three core components: `Button`, `Input`, and `Card`.

Built as a single source of truth so any product that consumes it stays visually consistent — change a token or a component here, publish a new version, and every consumer picks up the update.

## Install

```bash
npm install @juanhernandez-rlw/design-system
```

> Requires `react >= 18` and `react-dom >= 18` as peer dependencies.

## Usage

Import the components and the stylesheet once at the entry of your app:

```tsx
import { Button, Card, Input } from "@juanhernandez-rlw/design-system";
import "@juanhernandez-rlw/design-system/styles.css";

export function SignUp() {
  return (
    <Card title="Create your account" subtitle="Welcome aboard.">
      <Input label="Email" type="email" placeholder="you@company.com" />
      <Input label="Password" type="password" hint="Minimum 8 characters" />
      <Button variant="primary" fullWidth>Create account</Button>
    </Card>
  );
}
```

## Components

### `Button`

| Prop        | Type                                    | Default     |
| ----------- | --------------------------------------- | ----------- |
| `variant`   | `"primary" \| "secondary" \| "ghost"`   | `"primary"` |
| `fullWidth` | `boolean`                               | `false`     |

Plus all standard `<button>` HTML attributes.

### `Input`

| Prop    | Type     | Description                       |
| ------- | -------- | --------------------------------- |
| `label` | `string` | Optional label above the input    |
| `hint`  | `string` | Helper text below the input       |
| `error` | `string` | Error message (overrides `hint`)  |

Plus all standard `<input>` HTML attributes.

### `Card`

| Prop       | Type     | Description           |
| ---------- | -------- | --------------------- |
| `title`    | `string` | Optional card title   |
| `subtitle` | `string` | Optional subtitle     |

## Theming

All visual tokens are CSS variables on `:root`. Override any of them in your app to re-skin the design system without forking it:

```css
:root {
  --ds-color-primary: #16a34a;
  --ds-radius-md: 4px;
  --ds-font-sans: "Inter", sans-serif;
}
```

See `src/styles.css` for the full list of tokens.

## Develop

```bash
npm install
npm run build
```

## License

MIT
