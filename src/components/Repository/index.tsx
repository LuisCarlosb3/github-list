import { Repository } from '../../types/Repository'
import './styles.css'

interface RepositoryProps {
  repository: Repository
}

export function RepositoryCard({ repository }:RepositoryProps){
  return (
    <div className="repository-container">
      <div className="repository-title-date">
        <p className="repository-title">
          {repository.name}
        </p>
        <p className="repository-created">{repository.createdAt}</p>
      </div>
      <p className="repository-description">{repository.description}</p>
      <div className="langauges-box">
        Languages: {repository.language}
      </div>
    </div>
  )
}