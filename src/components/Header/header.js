import React, { Suspense } from 'react';
import { shape, string } from 'prop-types';

import Logo from '@magento/venia-ui/lib/components/Logo';
import { Link, resourceUrl, Route } from '@magento/venia-drivers';

import AccountTrigger from '@magento/venia-ui/lib/components/Header/accountTrigger';
import CartTrigger from '@magento/venia-ui/lib/components/Header/cartTrigger';
import NavTrigger from '@magento/venia-ui/lib/components/Header/navTrigger';
import SearchTrigger from '@magento/venia-ui/lib/components/Header/searchTrigger';
import OnlineIndicator from '@magento/venia-ui/lib/components/Header/onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './header.css';
import PageLoadingIndicator from '@magento/venia-ui/lib/components/PageLoadingIndicator';
import { Search as SearchIcon, ShoppingBag as ShoppingCartIcon } from 'react-feather';
import Icon from '@magento/venia-ui/lib/components/Icon';

const SearchBar = React.lazy(() => import('@magento/venia-ui/lib/components/SearchBar'));

const Header = props => {
    const {
        handleSearchTriggerClick,
        hasBeenOffline,
        isOnline,
        searchOpen,
        isPageLoading
    } = useHeader();

    const classes = mergeClasses(defaultClasses, props.classes);
    const rootClass = searchOpen ? classes.open : classes.closed;
    const searchBarFallback = (
        <div className={classes.searchFallback}>
            <div className={classes.input}>
                <div className={classes.loader} />
            </div>
        </div>
    );
    const searchBar = searchOpen ? (
        <Suspense fallback={searchBarFallback}>
            <Route>
                <SearchBar isOpen={searchOpen} />
            </Route>
        </Suspense>
    ) : null;
    const pageLoadingIndicator = isPageLoading ? (
        <PageLoadingIndicator />
    ) : null;

    return (
        <header className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.header}>
                    <div className={classes.headerLinks}>
                        <a className={classes.accountLink} href="https://www.yereone.com/customer/account/">My Account</a>
                        <a className={classes.signInLink} href="https://www.yereone.com/customer/account/login/referer/aHR0cHM6Ly93d3cueWVyZW9uZS5jb20v/">Sign In</a>
                        <span className={classes.welcome} >Welcome to Yereone</span>                        
                        <a className={classes.accountLink} href="https://www.yereone.com/customer/account/create/">Create an Account</a>                    
                    </div>
                </div>
            </div>
            <div className={classes.content}>
                <a className={classes.logo} href="https://www.yereone.com/" title="">
                    <img src="static/images/logo.svg" title="" alt="" width="110" height="64" />
                </a>
                <div className={classes.navigation}>
                    <a href="https://www.yereone.com/magento-extensions" className={`${classes.nav} ${classes.underlineFromLeft}`} id="ui-id-2" tabIndex="-1" role="menuitem"><span>Magento Extensions</span></a>
                    <a href="https://www.yereone.com/service/" className={classes.nav} id="ui-id-3" tabIndex="-1" role="menuitem"><span>Services</span></a>           
                    <a href="https://www.yereone.com/portfolio/" className={classes.nav} id="ui-id-4" tabIndex="-1" role="menuitem"><span>Portfolio</span></a>             
                    <a href="https://www.yereone.com/about/" className={classes.nav} id="ui-id-5" tabIndex="-1" role="menuitem"><span>About</span></a>
                    <a href="https://www.yereone.com/contact/" className={classes.nav} id="ui-id-6" tabIndex="-1" role="menuitem"><span>Contacts</span></a>
                    <a href="https://www.yereone.com/blog/" className={classes.nav} id="ui-id-7" tabIndex="-1" role="menuitem"><span>Blog</span></a>
                </div>
                <div className={classes.right}>
                    <div className={classes.search}>
                        <div className={classes.control}>
                            <input placeholder="Search entire store here..." className={classes.searchInput}></input>
                            {/* <i className={classes.searchIcon} /> */}
                            <Icon src={SearchIcon} size={18}/>
                        </div>
                    </div>
                    {/* <a className={classes.cartIcon} /> */}
                    {/* <Icon src={ShoppingCartIcon} /> */}
                    <CartTrigger />

                </div>
            </div>
            {/* <div className={classes.toolbar}>
                <div className={classes.primaryActions}>
                    <NavTrigger />
                    <h2>hiiiiii</h2>
                </div>
                {pageLoadingIndicator}
                <OnlineIndicator
                    hasBeenOffline={hasBeenOffline}
                    isOnline={isOnline}
                />
                <Link to={resourceUrl('/')}>
                    <Logo classes={{ logo: classes.logo }} />
                </Link>
                <div className={classes.secondaryActions}>
                    <SearchTrigger
                        active={searchOpen}
                        onClick={handleSearchTriggerClick}
                    />
                    <AccountTrigger />
                    <CartTrigger />
                </div>
            </div>
            {searchBar} */}
        </header>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string
    })
};

export default Header;
