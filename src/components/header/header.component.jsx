import React from 'react';

import './header.styles.scss'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop' >
                SHOP
            </Link>
            <Link className='option' to='/contact' >
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
    </div>
);

// const mapStateToProps = state => 
// ({currentUser: state.user.currentUser})

// mapStateToProps permet de filer à Header la partie du state du root-reducer qui nous intéresse, et ce sous forme de props.
// C'est l'équivalent Redux du prop drilling. 
// Sans Redux, on aurait mis des props dans le <Header/> du App.js
// Ici c'est currentUser et hidden les 2 states du root-reducer qui nous intéressent, donc on va les isoler du reste

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})



export default connect(mapStateToProps)(Header);