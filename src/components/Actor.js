const Actor = ({ name,born,role }) => {
    return (
        <div className="actor">
            <h2>{name}</h2>
            <h3>Born : {born}</h3>
            <h4>Role : {role.join(' , ')}</h4>
        </div>
    )
}

export default Actor;