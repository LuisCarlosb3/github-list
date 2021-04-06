import { Repository } from '../../types/Repository'
import './styles.css'

interface RepositoryProps {
  repository: Repository
}

export function RepositoryCard({ repository }:RepositoryProps){
  return (
    <div className="repository-container-card">
      <div className="repository-title-date-card">
        <p className="repository-title-card">
          {repository.name}
        </p>
        <p className="repository-created-card">{repository.createdAt}</p>
      </div>
      <p className="repository-description-card">{repository.description}</p>
      <div className="langauges-box-card">
        Languages: {repository.language}
      </div>
    </div>
  )
}