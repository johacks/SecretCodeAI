import 'styles/App.css';
// import Game from 'components/Game';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';

const styles = {
  toolbar: {
    alignItems: 'center',
  }
};

function Header(props) {

  return (
    <div>
      <AppBar
        position="fixed"
        className={props.styles.toolbar}
      >
        <Toolbar>
          {props.title}
        </Toolbar>
      </AppBar>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header>
        <Header
          title="CODENAMES"
          styles={styles}
        />
      </header>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
}

export default App;