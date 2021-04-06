import { useEffect } from 'react'
import githubImg from '../../assets/github.svg'
import { useUsername } from '../../hooks/useUser'
import './styles.css'
export function Header(){
  const { userInfo, handleUpdateUserName }= useUsername()
  // useEffect(()=>{
  //   handleUpdateUserName(userInfo.username)
  // },[userInfo.username, handleUpdateUserName])
  return (
    <div className="header">
      <div id="username-container">
        <img src={githubImg} alt="github icon" className="githubIcon"/>
        <p className="userName">{userInfo.username}</p>
      </div>
      <div className="account-status">
        <div className="statistic-box">
          Followers: {userInfo.followers}
        </div>
        <div className="statistic-box">
          Following: {userInfo.following}
        </div>
      </div>
    </div>
  )
}