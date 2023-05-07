![Logo](https://user-images.githubusercontent.com/100890340/236674589-fbc7e835-00ff-40c6-9ab1-6bb525bb521a.png)

<h1 align="center">
  Don-T Games
</h1>

<p align="center">
  An open-source unblocked games website built with simplicity in mind.
</p>

# Features

- Clean and Easy to use UI
- 300+ Games
- Tab Cloaking / Disguise

# Deployment

## Quick Deployment Options

Easily deploy to all your favorite platforms in just a click.

[![Deploy to Heroku](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/alphaotuken/Don-T)
[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/alphaotuken/Don-T)
[![Deploy on Railway](https://binbashbanana.github.io/deploy-buttons/buttons/remade/railway.svg)](https://railway.app/new/template/ZXOCUM?referralCode=6_qmvT)
[![Deploy To Koyeb](https://binbashbanana.github.io/deploy-buttons/buttons/remade/koyeb.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/alphaotuken/Don-T&branch=main&name=Radon-Games)
[![Deploy to Cyclic](https://binbashbanana.github.io/deploy-buttons/buttons/remade/cyclic.svg)](https://app.cyclic.sh/api/app/deploy/alphaotuken/Don-T)

## Regular Deployment

Deploy on local system or VPS.

### Requirements

- [NodeJS version >=18](https://nodejs.org/)

```bash
git clone https://github.com/alphaotuken/Don-T.git
cd Don-T
npm i
npm run build
npm start
```

# Contributing

Contributions to Don-T are welcome.

## Cloning

```bash
git clone https://github.com/alphaotuken/Don-T.git
cd Don-T
npm i
```

## Starting Development Server

The development server has hot module replacement for ease of development. **DO NOT USE FOR PRODUCTION.**

```bash
npm run dev
```

## Adding Games

In order to add games to Radon, you will first need to download the game files using some form of a website scraper. Once you have the game files, you will have to upload them to the [Don-T-Games-Assets](https://github.com/alphaotuken/Don-T-Assets) in the corresponding folder. Once the games have been uploaded to the repository, you will need to edit [`src/data/games.json`](https://github.com/alphaotuken/alphaotuken/blob/main/src/data/games.json) add add an entry for the game.

## Tech Stack

- [SolidJS](https://www.solidjs.com/)
- [Solid Start](https://start.solidjs.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)

## Libraries Used

- [express](https://www.npmjs.com/package/express)
- [@tomphttp/bare-server-node](https://www.npmjs.com/package/@tomphttp/bare-server-node)
- [http-proxy](https://www.npmjs.com/package/http-proxy)
- [solid-slider](https://www.npmjs.com/package/solid-slider)
- [fuzzysort](https://www.npmjs.com/package/fuzzysort)
- [vanilla-tilt](https://www.npmjs.com/package/vanilla-tilt)
- [Ultraviolet](https://github.com/titaniumnetwork-dev/Ultraviolet) (proxy)
