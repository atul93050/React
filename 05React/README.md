## 📂 05React — Touchup & Team Configuration (Prettier + ESLint)

### This folder demonstrates how to set up a basic configuration for **code formatting (Prettier)** and **linting (ESLint)** to maintain consistent code style across the team and avoid merge conflicts in GitHub.

## 🔧 Setup Steps

```bash
npm init -y
npm install --save-dev prettier
touch .prettierrc
touch .prettierignore
```

### .prettierrc

```
{
  "semi": true,
  "printWidth": 80,
  "trailingComma": "es5",
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "singleQuote": true
}
```

### .prettierignore

```
node_modules
dist
coverage
```

### package.json Script

```
"scripts": {
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,html}\""
}
```

### ✅ Run Formatter

```bash
npm run format
```

### 🧪 Add ESLint (Optional but Recommended)
```bash
npm install --save-dev eslint
npx eslint --init
```
### During eslint --init, follow prompts to:

Choose your style guide (recommended: Airbnb or Standard)

- Choose TypeScript or JavaScript

- Choose React (if applicable)

- Output config as .eslintrc or eslint.config.mjs file

Now ESLint will help catch code bugs and styling issues automatically.

This will auto-format all supported files inside the src/ directory, improving readability and ensuring consistent code formatting across all files and contributors.
