import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react'
import CharacterCard from './CharacterCard'
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search'
import useCharacters from '../hooks/useCharacter'

const initialState = {
  favorites: []
}

const API = 'https://rickandmortyapi.com/api/character'

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
      default:
        return state
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
}));

const Characters = () => {
    const classes = useStyles()
    const [ search, setSearch ] = useState('')
    const [favorites, dispatch] = useReducer(favoriteReducer,initialState)
    //Para ingresos de formularios e inputs
    const searchInput = useRef(null)

    const handleClick = favorite => {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite})
    }

    const characters = useCharacters(API)    

    // const handleSearch = () => {
    //   setSearch(searchInput.current.value)
    // }

    
    const handleSearch = useCallback(() => {
      setSearch(searchInput.current.value)
    })

    // const filteredUsers = characters.filter((user) => {
    //   return user.name.toLowerCase().includes(search.toLowerCase())
    // })


    //React memo para busquedas
    const filteredUsers = useMemo(() => 
      characters.filter((user) => {
          return user.name.toLowerCase().includes(search.toLowerCase())
        }),[characters, search]
     )

    return (
        <div className="Characters">
          {favorites.favorites.map(favorite => (
            <li key={favorite.id}>
              {favorite.name}
            </li>
          ))}
            <Search search={search} searchInput={searchInput} handleSearch={handleSearch}/>
            <GridList cellHeight={160} className={classes.gridList} cols={6}>
                {filteredUsers.map((character) => (
                    <CharacterCard onHandleClick={handleClick} key={character.id} character={character}/>
                ))}
            </GridList>
        </div>
    )
}

export default Characters
