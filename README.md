# phoenix-1.4-dev-typescript-sass

My experiment in setting up TypeScript on a brand-new Phoenix app.

I'm about to convert the frontend of an existing project to use TypeScript; I did it
standalone to figure out the steps. Note that I had to change the way CSS files
get built, since I also use SASS.

Started with the phoenix installer at [@fc9a5084](https://github.com/phoenixframework/phoenix/tree/fc9a5084).

- mix phx.new phx14dev_ts
- add .tool-versions
- add “build” script command
- add and configure prettier
- “npm run format” the existing sources
- yarn add --dev sass-loader node-sass
- configure webpack to process sass
- app.css -> app.scss
- yarn add —dev typescript ts-loader tslint tslint-react tslint-config-prettier @types/phoenix
- add typescript & tslint configs
- configure webpack & prettier to process typescript
- app.js -> app.tsx; disallow .js
- update README
