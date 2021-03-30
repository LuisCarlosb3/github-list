import { useEffect, useState } from 'react'
import { RequestService } from '../../service/request_service'
import { Repository } from '../../types/Repository'
import { RepositoryCard } from '../Repository'
import './styles.css'
export function RepositoryList(){
  const [repositories, setRepositories] = useState<Repository[]>([])
  
  useEffect(()=>{
    async function requestUserRepos():Promise<void> {      
      const repos = await RequestService.loadUserRepositories('LuisCarlosb3')
      setRepositories(repos)
    }
    requestUserRepos()
  },[])

  return (
    <div className="repository-list-container">
      <div className="title-container">
        <h2 className="repository-type">Repositories List</h2>
        <h2>{repositories.length}</h2>
      </div>
      <div id="title-line"></div>
      <div className="repository-list">
        {repositories.map(repository=>(
          <RepositoryCard key={repository.id} repository={repository}/>
        ))}
      </div>
    </div>
  )
}