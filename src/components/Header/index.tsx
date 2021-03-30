import { useEffect, useState } from 'react'
import githubImg from '../../assets/github.svg'
import { RequestService } from '../../service/request_service'
import { UserInfo } from '../../types/UserInfo'
import './styles.css'
export function Header(){
  const [userinfo, setUserInfo] = useState<UserInfo>({
    id: '',
    username: '',
    htmlUrl: '',
    publicRepos: 0,
    followers: 0,
    following: 0
  })
  
  useEffect(()=>{
    async function requestUserRepos():Promise<void> {      
      const info = await RequestService.loadUserInfoByUserName('LuisCarlosb3')
      if(info){
        setUserInfo(info)
      }
    }
    requestUserRepos()
  },[])
  return (
    <div className="header">
      <div id="username-container">
        <img src={githubImg} alt="github icon" className="githubIcon"/>
        <p className="userName">{userinfo.username}</p>
      </div>
      <div className="account-status">
        <div className="statistic-box">
          Followers: {userinfo.followers}
        </div>
        <div className="statistic-box">
          Following: {userinfo.following}
        </div>
      </div>
    </div>
  )
}