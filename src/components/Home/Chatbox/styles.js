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
    '&::-webkit-scrollbar': {
      width: '0.4em'
    },
  },
  customToastContainer: {
    maxWidth: 'md',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    pointerEvents: 'auto',
    display: 'flex',
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  customToastContent: {
    flex: 1,
    padding: '16px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  customToastImage: {
    height: '40px',
    width: '40px',
    borderRadius: '50%',
  },
  customToastTextContainer: {
    marginLeft: '12px',
  },
  customToastName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#000',
  },
  customToastMessage: {
    marginTop: '4px',
    fontSize: '14px',
    color: '#666',
  },
  customToastCloseButton: {
    border: 'none',
    borderRadius: '0',
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#3B82F6',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  customToastCloseButtonHover: {
    backgroundColor: '#EFF6FF',
  },
  '@media (min-width: 1200px)': {
    customToastContainer: {
      maxWidth: '30%', // Set the maximum width to 30% for larger screens
    },
  },
}));
