import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",
    "airbnb/hooks"
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Example: Customize rules if needed
      "react/react-in-jsx-scope": "off", // Next.js doesn't require React in scope
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];

export default eslintConfig;
