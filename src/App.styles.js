import { makeStyles } from '@material-ui/core';
// import background from './Assets/treeBark.png'
// import background from './Assets/soft.png'
// import background from './Assets/tree2.png'
// import background from './Assets/blacktree.png'

export const useStyles = makeStyles((theme) => ({
    root: {
      // background: 'linear-gradient(to right, rgb(2, 101, 78), rgb(44, 165, 163))',
      // background: 'linear-gradient(to right, rgb(20,146,124), rgb(44, 165, 163))',
      backgroundColor: theme.palette.secondary.main, //background
      // backgroundImage: `url(${background})`,
      // opacity: '.8',
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      minHeight: '100vh'
    },
}));