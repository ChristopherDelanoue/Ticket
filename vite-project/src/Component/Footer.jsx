function Footer() {
    return (
        <div className="dock dock-xl flex-none inset-shadow-sm">
            <button className="text-non-actif">
                <i className="fa-solid fa-newspaper"></i>
                <span className="dock-label">Nouveautés</span>
            </button>

            <button className="dock-active jaune-torchio">
                <i className="fa-solid fa-hammer "></i>
                <span className="dock-label">S.A.V</span>
            </button>

            <button className="text-non-actif">
                <i className="fa-solid fa-info"></i>
                <span className="dock-label">Informations</span>
            </button>
        </div>
    )
}

export default Footer