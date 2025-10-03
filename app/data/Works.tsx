export interface IWork {
  id: number
  img: string
  explain: string
  techno: string
  links: string
}

export const Works: IWork[] = [
  {
    id: 1,
    img: '/assets/img/restau.webp',
    explain:
      'First exercise of a website with Bootstrap. Realise a window web page for a restaurant.',
    techno: 'HTML, CSS,Bootstrap',
    links: 'https://gysenlionel.github.io/restaurant-css-framework/index.html',
  },
  {
    id: 2,
    img: '/assets/img/cookieClicker.webp',
    explain: 'Building a coockie-clicker game.',
    techno: 'HTML, CSS, JAVASCRIPT',
    links: 'https://gysenlionel.github.io/Cookie-clicker/',
  },
  {
    id: 3,
    img: '/assets/img/hangman.webp',
    explain: "Building a hangman's game.",
    techno: 'HTML, CSS, JAVASCRIPT,Express',
    links: 'https://gysenlionel.github.io/Hangman/public/index.html',
  },
  {
    id: 4,
    img: '/assets/img/dataVisu.webp',
    explain:
      'Data-visualisation exercise consisting of retrieving data from two tables in the html page and a table in a database.',
    techno: 'JAVASCRIPT,Chart.js',
    links: 'https://gysenlionel.github.io/js-datavisualisation-challenge/',
  },
  {
    id: 5,
    img: '/assets/img/getflix.webp',
    explain:
      'Building a platform inspired by Netflix, Disney+ and Amazon Prime.',
    techno: 'HTML, CSS, JAVASCRIPT, PHP, MySQL, Bootstrap',
    links: 'https://getflix.infinityfree.me/',
  },
  {
    id: 6,
    img: '/assets/img/MyEvent.webp',
    explain:
      'Building a music event and news website where you can buy tickets.',
    techno: 'React, Material-ui, Apollo-server, GraphQL, Mongoose, MongoDB',
    links: 'https://festive-curie-8fa3a4.netlify.app/',
  },
  {
    id: 8,
    img: '/assets/img/pokedex2.webp',
    explain: 'building a pokedex with React, typescript and tailwind.',
    techno: 'React, TypeScript, TailwindCSS, Chart.JS, Framer-Motion',
    links: 'https://pokedex-lionel.netlify.app/',
  },
  {
    id: 9,
    img: '/assets/img/holid.webp',
    explain:
      'Travel booking site.Book your holidays, view your bookings, edit your profile.',
    techno:
      'Next.js, TypeScript, TailwindCSS, Redux Toolkit, Stripe, Express.Js, MongoDb, Jest, Swagger',
    links: 'https://app.holid-server.xyz/',
  },
  {
    id: 10,
    img: '/assets/img/littleguest.webp',
    explain: 'Travel agency offering a selection of child-friendly hotels.',
    techno: 'Next.js, Symphony, Node.js',
    links: 'https://www.littleguestcollection.com/fr',
  },
]
