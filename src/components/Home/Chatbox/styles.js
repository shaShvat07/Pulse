import { makeStyles } from '@mui/styles';
export default makeStyles(() => ({
  chat: {
    display: 'flex',
    height: `calc(100% - 96px)`,
    backgroundColor: '#202020',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    flexDirection: 'column',
    marginTop: '-16px',
    marginRight: '-18px',
    marginLeft: '-18px',
    borderRadius: '8px',
    padding: '10px',
  }
}));
