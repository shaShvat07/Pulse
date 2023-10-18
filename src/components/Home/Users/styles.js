import { makeStyles } from '@mui/styles';
import { fontSize } from '@mui/system';
export default makeStyles(() => ({
  chat: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#000000',
    overflowX: 'hidden',
    overflowY: 'auto',
    marginTop: '-16px',
    marginRight: '-18px',
    marginLeft: '-18px',
    borderRadius: '8px',
    padding: '10px',
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
    fontSize:'50px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
  }
}));
