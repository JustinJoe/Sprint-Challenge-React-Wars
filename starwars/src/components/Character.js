function Character({characters}) {
    const renderedCharacters = characters.map(character => <div key={character.created} 
            className="is-flex is-justify-content-space-between block is-size-4 has-text-black container is-max-desktop">
            <span>{character.name}</span><span>{character.birth_year}</span>
            </div>)
    
    return <div>{renderedCharacters}</div>
}

export default Character;