# phoenix-1.4-dev-typescript-sass

My experiment in setting up my preferred frontend stuff on a brand-new Phoenix app:
TypeScript, React with mobx-state-tree for state, prettier, jest.

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
- add react dom element to the home page
- yarn add react react-dom; yarn add —dev babel-preset-react
- tell babel to react too
- add the barest of react apps
- yarn add --dev jest ts-jest @types/jest
- Configure jest
- yarn add mobx mobx-react mobx-state-tree
- Add react types too
- yarn add --dev babel-polyfill for async/await
- Include babel-polyfill first thing
- Setup mobx-state-tree, root store and component
