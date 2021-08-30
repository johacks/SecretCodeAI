import 'styles/Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';

function Header(props) {
  // https://betterprogramming.pub/making-a-basic-header-responsive-with-materialui-and-react-2198fac923c8
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerHeight < 700
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);


  return (
      <AppBar position="sticky" id="header" style={{display: mobileView ? "none" : "inline"}} >
        <Toolbar>
          <div className="Header">
            <Typography variant="h3">
              {props.title}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    )
  }

export default Header;