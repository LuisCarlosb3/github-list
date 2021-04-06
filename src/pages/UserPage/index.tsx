import './styles.css'
import Resume from '../../assets/resume.svg'
import { useUsername } from '../../hooks/useUser'
import { useState, FormEvent } from 'react'
import { Redirect } from 'react-router-dom'
export function UserPage(){
  const { handleUpdateUserName } = useUsername()
  const [newUserName, setNewUserName] = useState('')
  const [userNotExists, setUserNotExists] = useState(false)
  const [userInfoLoaded, setUserInfoLoaded] = useState(false)
  const [loadingUserInfo, setLoadingUserInfo] = useState(false)
  async function handleSubmitUserName(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    setLoadingUserInfo(true)
    const userExistis = await handleUpdateUserName(newUserName)
    
    setLoadingUserInfo(false)
    setUserInfoLoaded(userExistis)
    setUserNotExists(!userExistis)
  }

  if(userInfoLoaded){
    return <Redirect to="/repositories" />
  }else{
    const inputErrorClass = userNotExists ? 'invalid-user-error' : ''
    return (
      <div className="container">
        <div className="repository-title-container">
          <h1 className="repository-title">Github Repositories</h1>
          <img src={Resume} alt="page icon"/>
        </div>
        <div className="input-container" >
          {!loadingUserInfo ?
            <form className="input-container-form" onSubmit={handleSubmitUserName}>
              <div>
                <input 
                  className={inputErrorClass}
                  type="text" 
                  placeholder="Insert your username" 
                  value={newUserName}
                  required
                  onChange={(e)=>setNewUserName(e.target.value)}
                />
                {userNotExists && <span id="user-not-found">User not found</span>}
              </div>
              <button type="submit">Submit</button>
            </form>
          : <div id="load-indicator"></div>}
        </div>
      </div>
    )
  }
}