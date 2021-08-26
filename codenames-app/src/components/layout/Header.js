import 'styles/Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Component } from 'react';

class Header extends Component {

  render () 
  {
    return (
      <AppBar position="sticky" id="header">
        <Toolbar>
          <div className="Header">
            <Typography variant="h3">
              {this.props.title}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;