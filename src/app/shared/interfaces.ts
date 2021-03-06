export interface User {
  email: string,
  password: string,
  returnSecureToken?: boolean
}

export interface AuthResponse{
  idToken: string,
  expiresIn: string
}

export interface Post {
  id?: string,
  title: string,
  slug: string,
  body: string,
  date: Date,
}

export interface DataResponse {
  name: string
}
