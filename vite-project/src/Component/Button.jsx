function Button({nom}) {
    return (
        <div className="flex justify-center p-1">
            <button type='submit' className="btn btn-wide">{nom}</button>
        </div>
    )
}

export default Button