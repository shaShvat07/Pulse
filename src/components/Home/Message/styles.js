import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  msg: {
    backgroundImage: 'linear-gradient( 108.7deg,  #191714, #2234AE )',
    marginTop: '2.5px',
    marginBottom: '2.5px',
    borderRadius: '8px',
    padding: '10px',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
  },
  ownerMessage: {
    justifyContent: 'flex-end',
    marginLeft: 'auto',
  },
  receiverMessage: {
    justifyContent: 'flex-start',
    marginRight: 'auto', // Add this line to push the message to the left
    backgroundImage: 'linear-gradient( 108.7deg,#000000, #2D3436 )',
    
  },
}));
