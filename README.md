# shadcn-ui-components

## Introduction

A collection of customizable UI components based on [shadcn/ui](https://ui.shadcn.com/) and modern libraries such as TipTap and Lucide React. Easily integrate into your Next.js or React projects.

## Components

- **Richtext Editor**: A rich text editor component built with TipTap and shadcn/ui components.

## Installation

You can install the components in two ways:

### 1. Using shadcn/ui CLI

If you use the [shadcn/ui CLI](https://ui.shadcn.com/docs/cli/usage), simply run:

```bash
npx shadcn@latest add https://github.com/hdkhank462/shadcn-ui-components/...
```

This will automatically add the component and its dependencies to your project.

### 2. Manual Installation

#### a. Install dependencies

Install the required packages:

```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-text-align lucide-react class-variance-authority
```

#### b. Add the component file

Copy the component file to your project, for example:

- `src/components/richtext-editor.tsx`

#### c. Usage

```tsx
import RichtextEditor from "@/components/richtext-editor";

export default function Page() {
  return <RichtextEditor />;
}
```

You can pass additional props to customize the editor.

---

> For more information, see [shadcn/ui](https://ui.shadcn.com/) and [TipTap](https://tiptap.dev/).
