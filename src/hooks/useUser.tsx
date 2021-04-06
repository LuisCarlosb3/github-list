import { createContext, ReactNode, useContext, useState } from "react";
import { RequestService } from '../service/request_service'
import { Repository } from "../types/Repository";
import { UserInfo } from '../types/UserInfo'
interface UserContextData{
  userInfo: UserInfo
  userRepositories: Repository[]
  handleUpdateUserName: (newUserName: string)=>Promise<boolean>
}
interface UserProviderProps {
  children: ReactNode;
}
const UserNameContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({children}:UserProviderProps):JSX.Element {
  const [userInfo, setUserInfo] = useState<UserInfo>(() => {
    const storageInfo = localStorage.getItem('@repositories:userinfo')
    const userInfo = storageInfo ? JSON.parse(storageInfo) : {}
    return userInfo
  });
  const [userRepositories, setUserRepositories] = useState<Repository[]>(() => {
    const storageInfo = localStorage.getItem('@repositories:userRepos')
    const repositories = storageInfo ? JSON.parse(storageInfo) : []
    return repositories
  });
  const setUserInfoStorage = (userInfo: UserInfo) =>{
    setUserInfo(userInfo)
    localStorage.setItem('@repositories:userinfo', JSON.stringify(userInfo))
  }
  const setUserRepositoriesInfo = (repositories: Repository[]) =>{
    setUserRepositories(repositories)
    localStorage.setItem('@repositories:userRepos', JSON.stringify(repositories))
  }
  const handleUpdateUserName= async (newUserName: string): Promise<boolean>=>{   
    const info = await RequestService.loadUserInfoByUserName(newUserName)
    console.log(info)
    if(info){
      setUserInfoStorage(info)
      const repos = await RequestService.loadUserRepositories(newUserName)      
      setUserRepositoriesInfo(repos)
      return true
    }
    return false
  }
  return (
    <UserNameContext.Provider value={{userInfo, userRepositories, handleUpdateUserName}}>
      {children}
    </UserNameContext.Provider>
  )
}


export function useUsername() {
  const context = useContext(UserNameContext)
  return context
}