import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const NavItem = ({ to, children, activeStyle, onClick }) => {
    return (
        <NavLink
        to={to}
        onClick={onClick}
        className={({isActive}) => (isActive ? activeStyle: undefined)}
        >
            {children}
        </NavLink>
    );
};

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    return (
        <nav
        className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg ">
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/'
                    onClick={() => context.setSearchByCategory()}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavItem
                    to='/clothes'
                    onClick={() => context.setSearchByCategory('clothes')}
                    activeStyle={activeStyle}>
                        Clothes
                    </NavItem>
                </li>
                <li>
                    <NavLink
                    to='/electronics'
                    onClick={() => context.setSearchByCategory('electronics')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'
                    onClick={() => context.setSearchByCategory('furnitures')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'
                    onClick={() => context.setSearchByCategory('toys')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'
                    onClick={() => context.setSearchByCategory('others')}
                    className={({isActive}) =>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    correo@gmail.com
                </li>
                <li>
                    <NavLink
                    to='/my-orders'
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        SignIn
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon>
                    <div>
                        {context.cartProducts.length}
                    </div>
                </li>
            </ul>
            {/* <ul className="flex items-center gap-3">
                {
                    menu2.map(link => (
                        <li
                        key={link.key}
                        className={link.className}>
                            <NavLink
                            to={link.to}
                            className={({isActive}) => isActive ? textDecoration : undefined}>
                                {link.text}
                            </NavLink>
                        </li>
                    ))
                }
            </ul> */}
        </nav>
    )
}

export default Navbar