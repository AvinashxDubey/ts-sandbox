# TypeScript Sandbox

A sandbox environment for experimenting with TypeScript.

## Setup

Install dependencies:

```bash
npm install
```

## Running TypeScript Files
Run TypeScript files directly:

```bash
npx ts-node index.ts
```

## Running JavaScript Files

```bash
node ds.js
```

## Project Structure

- `index.ts` - TypeScript playground
- `ds.js` - JavaScript examples
- `tsconfig.json` - TypeScript configuration

## Local Setup Commands

If starting from scratch:

```bash
npm init -y
npm install --save-dev typescript ts-node
npx tsc --init
```

## Global Alternative

For system-wide TypeScript support:

```bash
npm install -g typescript ts-node
ts-node index.ts
```
