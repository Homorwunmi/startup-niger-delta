import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const filename = fileURLToPath(import.meta.url);
const currentDirname = dirname(filename);

const compat = new FlatCompat({
  baseDirectory: currentDirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/no-array-index-key": "off",
      "react/jsx-no-constructed-context-values": "warn",
      "react/require-default-props": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "no-underscore-dangle": [
        "error",
        { allow: ["__filename", "__dirname"] },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
        typescript: {}, // Use tsconfig for path resolution
      },
    },
  },
];

export default eslintConfig;
