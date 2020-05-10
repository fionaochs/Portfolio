import shade from '../Assets/shadespeare.png'
import groupies from '../Assets/groupies.png'
import alchimia from '../Assets/alchimia1.png'
import gabbi from '../Assets/gabbi.png'

export const langArr = ['JavaScript', 'HTML', 'CSS'];

export const toolArr = ['Heroku', 'Netlify', 'Jest', 'QUnit', 'Github', 'Twilio', 'Jira'];

export const backEnd = ['Node.js', 'Express'];

export const frontEnd = ['React.js'];

export const databases = ['PostgreSQL', 'MongoDB', 'Mongoose'];



export const projects = [
  
  {
    title: 'Shadespeare, Bard of Insults',
    img: shade,
    description: 'Markov generated insult bot that allows the user to chat with Shadespeare, who generates responses seeded with the users input. Includes a zoom bot using twilio for text to speech functionality that allows Shadespeare to enter Zoom meetings.',
    tech: ['Node.js, MongoDB, React, Twilio, Express'],
    liveLink: 'https://shadespeare-insults.herokuapp.com/',
    repoLink: 'https://github.com/Shakespeare-Insult-Bot'
  },
  {
    title: 'Groupies, Connecting through concerts',
    img: groupies,
    description: 'Social media app for concert lovers to connect with friends and share their upcoming concerts on social media platforms. User interface developed with React, with a SQL backend API.',
    tech: ['PostgreSQL, React'],
    liveLink: 'https://fierce-taiga-25449.herokuapp.com/',
    repoLink: 'https://github.com/fionaochs/groupies-front-end'
  },
  {
    title: 'Alchimia',
    img: alchimia,
    description: 'Tile generated board game built with Javascript, random tile generation, tile scoring and valid tile placement constraints following game rules.',
    tech: ['Node.js, MongoDB, React, Twilio, Express'],
    liveLink: 'https://seharlan.github.io/alchimia/',
    repoLink: 'https://github.com/fionaochs/alchimia'
  },
  {
    title: 'Gabbi',
    img: gabbi,
    description: 'Gabbi is the world’s first digital platform for women that puts women in charge of their own bodies. Connecting like-minded women who have similar experiences, to learn, share, and support one another as they take control of their health. I work on the back end with TDD for the routes and models.',
    tech: ['Node.JS, React, MongoDB'],
    liveLink: 'https://www.begabbi.com/',
    repoLink: ''
  },
];