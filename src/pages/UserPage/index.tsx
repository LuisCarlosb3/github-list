import './styles.css'
import Resume from '../../assets/resume.svg'
export function UserPage(){
  return (
    <div className="container">
      <div className="repository-title-container">
        <h1 className="repository-title">Github Repositories</h1>
        <img src={Resume} alt="page icon"/>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Insert your username"/>
        <button>Enviar</button>
      </div>
    </div>
  )
}