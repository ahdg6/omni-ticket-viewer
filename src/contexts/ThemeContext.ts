import { createContext } from "react"

export type Theme = "dark" | "light"

export default createContext<Theme>("dark")
