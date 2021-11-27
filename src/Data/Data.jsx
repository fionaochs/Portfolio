import shade from '../Assets/shadespeare.png'
import groupies from '../Assets/groupies.png'
import alchimia from '../Assets/alchimia1.png'
import gabbi from '../Assets/gabbi-logo-red.png'
import viral from '../Assets/GoingViralLogo.png'

// export const langArr = ['JavaScript', 'HTML', 'CSS'];

// export const toolArr = ['Heroku', 'Netlify', 'Jest', 'QUnit', 'Github', 'Twilio', 'Jira'];

// export const backEnd = ['Node.js', 'Express'];

// export const frontEnd = ['React.js'];

// export const databases = ['PostgreSQL', 'MongoDB', 'Mongoose'];


export const projects = [
  {
    title: 'Going Viral',
    img: viral,
    description: 'Interactive data visualizations for changes in global mobility metrics during times of quarantine.',
    tech: ['MongoDB, Node, React, Material UI, D3'],
    bulletList: ['Built back end routes with Node, and Express',
    'Stored data in MongoDB', 'Implemented TDD with Jest',
    'Worked with D3 for data visualizations', 'Built front end with React', 'Used Material UI for mobile responsiveness'],
    liveLink: 'https://goingviral.netlify.app/',
    repoLink: 'https://github.com/Going-Viral'
  },
  {
    title: 'Gabbi',
    img: gabbi,
    description: 'Digital health platform for women.',
    tech: ['Node.JS, React, MongoDB'],
    bulletList: ['TDD for back end routes and models in Node', 'Connect to MongoDB', 'Integrate data with React front end', 'Material UI for responsive mobile design'],
    liveLink: 'https://www.begabbi.com/',
    repoLink: null
  },
  // {
  //   title: 'Alchimia',
  //   img: alchimia,
  //   description: 'Tile based board game crafted in Javascript.',
  //   tech: ['Javascript, HTML, CSS'],
  //   bulletList: ['Developed front end in vanilla Javascript, HTML, and CSS', 'Implemented correct tile validation with array manipulation',
  //   'Developed an instructional modal, to display over board '],
  //   liveLink: 'https://seharlan.github.io/alchimia/',
  //   repoLink: 'https://github.com/fionaochs/alchimia'
  // },
  // {
  //   title: 'Groupies, Connecting through concerts',
  //   img: groupies,
  //   description: 'Social media app for connecting to concerts and sharing with friends.',
  //   tech: ['PostgreSQL, React'],
  //   bulletList: ['Designed UI with React', 'Developed back end routes and stored data in SQL', 'Integrated NPM packages for social media platforms'],
  //
  //   liveLink: 'https://fierce-taiga-25449.herokuapp.com/',
  //   repoLink: 'https://github.com/fionaochs/groupies-front-end'
  // },
  // {
  //   title: 'Shadespeare, Bard of Insults',
  //   img: shade,
  //   description: 'Markov generated insult bot. Integrates with Zoom using Twilio for text to speech functionality.',
  //   tech: ['Node.js, MongoDB, React, Twilio, Express'],
  //   bulletList: ['Built back end routes and models using Node and Express',
  //   'Connected to MongoDB',
  //   'Developed Zoom bot with Twilio for text to speech',
  //   'Integrated data with React front end'],
  //
  //   liveLink: 'https://shadespeare-insults.herokuapp.com/',
  //   repoLink: 'https://github.com/Shakespeare-Insult-Bot'
  // },

];