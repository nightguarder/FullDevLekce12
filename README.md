# FullDevLekce12

# Project start

1. In your preferred terminal run:`docker compose up`
2. Back in project run: `npm run server`

## --Save-dev Dependecies

- Run these commands after cloning the repository:

1. ` pnpm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript prettier ts-node-dev @types/express @types/cors`

2. `npx eslint --init`

- add this to rules

```
//Custom added rules
    "@typescript-eslint/no-unused-vars": "warn",
    // to enforce using type for object type definitions, can be type or interface
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-explicit-any": "off"

```
