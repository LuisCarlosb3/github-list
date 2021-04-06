import axios, { AxiosInstance } from 'axios'
import { Repository } from '../types/Repository'
import { UserInfo } from '../types/UserInfo'
interface RepositoryRequest{
  id: string,
  name: string, 
  description: string,
  html_url: string,
  created_at:string,
  language:string
}
interface UserRequest{
  id: string,
  login: string, 
  html_url: string,
  public_repos:number,
  followers: number
  following: number
}

export class RequestService {
  private static api:AxiosInstance = axios.create({baseURL: 'https://api.github.com'})
  public static async loadUserInfoByUserName(username:string):Promise<UserInfo | null>{
    try {  
      const response =  await this.api.get(`/users/${username}`)
      if(response.status === 200){ 
        const { data } = response
        if(data){
          const userData:UserRequest = data
          return {
            id: userData.id,
            username: userData.login,
            htmlUrl: userData.html_url,
            publicRepos: userData.public_repos,
            followers: userData.followers,
            following:  userData.following
          }
        }
      }
      return null
    } catch (error) {
      return null  
    }
  }
  public static async loadUserRepositories(username:string):Promise<Repository[]>{
    const { data } =  await this.api.get(`/users/${username}/repos`)
    const repositories:Repository[] = data.map((item:RepositoryRequest)=>{
      return {
        id: item.id,
        name: item.name,
        description:item.description,
        htmlUrl: item.html_url,
        createdAt: new Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at)),
        language: item.language
      }
    })
    return repositories
  }
}
