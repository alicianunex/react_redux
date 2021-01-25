import { makeStyles } from '@material-ui/styles';

const centeredStyleObj = {
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
};

export default makeStyles({
  container: {
    height: '100vh',
    flexDirection: 'colum',
    ...centeredStyleObj,
  },
  cardContainer: {
    flexDirection: 'colum',
    width: 500,
    height: 300,
    padding: '4rem',
    backgroundColor: 'skyblue',
    boxShadow: '2px 4px gray',
    ...centeredStyleObj,
  },
  title: {
    fontSize: '3rem',
    textAlign: 'center',
    color: 'white',
    textShadow: '1px 2px grey',
    textTransform: 'uppercase',
    fontFamily: 'Impact',
    letterSpacing: '.4rem',
  },

  textFieldSearch: {
    width: '100%',
    marginBottom: '3.5rem',
  },
  searchButton: {
    marginLeft: '1.5rem',
  },
  buttonsContainer: {
    textAlign: 'center',
  },
  movieIcon: {
    fontSize: '3rem',
    color: 'white',
    marginTop: '.8rem',
  },
});
