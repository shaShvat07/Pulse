import { makeStyles } from '@mui/styles';
import image from "../../../pulse.png"; 
const imgLink = "https://images.pexels.com/photos/3062705/pexels-photo-3062705.jpeg?cs=srgb&dl=pexels-nextvoyage-3062705.jpg&fm=jpg";

export default makeStyles(() => ({
  signOutButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  combine:{
    backdropFilter: 'blur(6px)',
  },
  navbarP: {
    backgroundImage:  `url(${imgLink})`,
    backgroundSize: 'cover',
  },
  wholeSidebar: {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  }
}));
