import { createContext } from "react"

export default createContext<
  {
    messageId: string
    src: string
  }[]
>([])
