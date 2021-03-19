import React from 'react'
import { Link } from 'react-router-dom'


function useSearchBadges(badges){
  const [ query, setQuery ] = React.useState('')
  const [ filteredBadges, setFilteredBadges ] = React.useState(badges)
  

  React.useMemo(() => {
    const result = badges.filter(badge => {
    return `${badge.firstName} ${badge.lastName}`
      .toLowerCase()
      .includes(query.toLowerCase())
    })

    setFilteredBadges(result)
  }, [ badges, query ])
  
  return { query, setQuery, filteredBadges }
}

function BadgesList (props){
  const badges = props.badges 
  const { query, setQuery, filteredBadges } = useSearchBadges(badges)
  

    if(filteredBadges.length === 0){
      return (
        <div>
          <div className="form-group">
          <label>Filter Badges</label>
          <input 
            type="text" 
            className="form-control md-4"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}          
          />
        </div>
          <h3>No badges found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new Badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        <div className="form-group">
          <label>Filter Badges</label>
          <input 
            type="text" 
            className="form-control md-4"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          
          />
        </div>
        {filteredBadges.map((badge) =>{
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <p>{badge.firstName} {badge.lastName}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    )
  
}

export default BadgesList
