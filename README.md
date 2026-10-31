# Ink Tables

Edit typed, queryable tables for game balancing and configuration, with stable row/column keys and CSV/TSV import.

## Install

Requires a running [Ink OS](https://github.com/siliconjungle/ink-os-platform) instance and its `ink-os` CLI. Use Node.js 24 or later for development.

```sh
git clone https://github.com/siliconjungle/ink-app-tables.git
cd ink-app-tables
npm ci
npm test
npm run build
# Select your Ink instance using its CLI connection profile.
ink-os deploy .
```

The CLI deploys committed source from your checkout. Commit any edits before deploying them. No credentials or personal instance configuration belong in this repository.

## Behaviour and limits

Supports text, safe integers, finite numbers, booleans, bounded JSON and nullable fields. This is a typed table editor with no spreadsheet formulas or arbitrary SQL. Limits: 100 tables, 500 rows per table and 32 columns.

## Development

`npm run dev` opens a local development server. Preview fixtures are separate from live Ink data.

The app serves `tables.mjs`, a standalone table reader you can bundle into a game. The Connect panel supplies the current table and namespace identities.

## License

MIT for app code. Bundled third-party components retain their own licenses and notices.
