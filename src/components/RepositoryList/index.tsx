import { useEffect } from 'react'
import { useUsername } from '../../hooks/useUser'
import { RepositoryCard } from '../Repository'
import './styles.css'
export function RepositoryList(){
  const { userRepositories }= useUsername()
  return (
    <div className="repository-list-container">
      <div className="title-container">
        <h2 className="repository-type">Repositories List</h2>
        <h2>{userRepositories.length}</h2>
      </div>
      <div id="title-line"></div>
      <div className="repository-list">
        {userRepositories.map(repository=>(
          <RepositoryCard key={repository.id} repository={repository}/>
        ))}
      </div>
    </div>
  )
}