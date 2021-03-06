import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { triggerLogout } from '../../redux/actions/loginActions';

import { slide as Menu } from 'react-burger-menu';
import '../../styles/main.css';
import '../../styles/icons/vaultboy-ok.gif';

const mapStateToProps = state => ({
  user: state.user,
});

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  showSettings(event) {
    event.preventDefault();
  }

  isMenuOpen = (state) => {
    return state.isOpen;
  };


  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  // this can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    return (
      <div>
        <aside>
          <Menu
            overlayClassName={"sidenav"}
            width={225}
            onStateChange={this.isMenuOpen}
            customBurgerIcon={<img src="https://i.imgur.com/PAvUyjf.png" alt="nav icon"/>}
          >
          <img src="https://i.imgur.com/DCyNeo6.gif" width="200px" alt="vault boy thumbs up"/>
          <br/>
            <Link id="contact" className="menu-item" to="/board">Home</Link>
            <Link id="contact" className="menu-item" to={`/profile/${this.props.user.userId}`}>Profile</Link>
            <Link id="about" className="menu-item" to="/user">User Settings</Link>
            <button
            id="btn-logout"
            onClick={this.logout}
          >
            Log Out
          </button>
          
          </Menu>
        </aside>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Nav);

