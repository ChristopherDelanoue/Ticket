import { Link, NavLink } from "react-router";

function Footer() {
    return (
        <div className="dock dock-xl flex-none inset-shadow-sm">
            <NavLink to="/avis" className={({isActive}) => isActive ? 'dock-active jaune-torchio' : 'text-non-actif' }>
                <i className="fa-regular fa-star"></i>
                <span className="dock-label">Donnez votre avis</span>
            </NavLink>

            <NavLink to="/" className={({isActive}) => isActive ? 'dock-active jaune-torchio' : 'text-non-actif' }>
                <i className="fa-solid fa-hammer "></i>
                <span className="dock-label">S.A.V</span>
            </NavLink>

            <NavLink to="/news" className={({isActive}) => isActive ? 'dock-active jaune-torchio' : 'text-non-actif' }>
                <i className="fa-solid fa-info"></i>
                <span className="dock-label">Informations</span>
            </NavLink>
        </div>
    )
}

export default Footer
