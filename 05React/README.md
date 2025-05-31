# 📁 05React — Code Touchup & Team Configuration (Prettier Setup)

### This folder is focused on configuring Prettier to maintain a consistent code style across team members and avoid unnecessary Git conflicts caused by formatting issues.

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

This will auto-format all supported files inside the src/ directory, improving readability and ensuring consistent code formatting across all files and contributors.
