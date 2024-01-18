This is a Market App [Next.js] project.
## What does this project do?

In this project, you will see that I listed the products and limited them to 16 to increase performance. With pagination, you will increase the user experience and experience product listing for e-commerce.

I filtered the products by their tags, brands and a-z, z-a, price low to high, price high to low. I took care to use react structures in filtering and kept performance and optimization at the highest level with useMemo and useCallback.

Search can also be done in filtering. I used lodash debounce for this.

I add the products I list to the cart and provide price information to the user in the header. You can add or remove products in the basket and add more than one product from the same product.

Although it works 100% responsive, I used sass for css to avoid code repetition and for readability.

Let's not forget that I developed this project with love :)

## Getting Started

First, install the node modules

```bash
npm install
```

and run the development server:

```bash
npm run dev
```

after install json-server
```bash
npm install json-server
```

and run the json-server:

```bash
json-server --watch layout/json/db.json --port 3001
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

next, react, redux-toolkit, redux, sass, typescript (latest versions)

## Folder Structure

You can start editing the page by modifying `app/page.tsx`, `app/layout.tsx` as you edit the file.

You can edit Components `layout/components/{componentname}`

You can edit State Managment (Redux-Toolkit) `/redux/`

You can edit Container `/layout/compontents/container.tsx`

You can edit Global CSS, variables and mixin SCSS files `app/styles`

You can edit Component SCSS files `layout/components/{componentname}/{componentname}.scss`

You can see Types files `/types` 

## Deploy on Vercel

Check out this project [Vercel deployment](https://getirmarket.vercel.app/)
