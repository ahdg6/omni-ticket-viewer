// https://github.com/Kokoro-js/ticket-bot-viewer/blob/9ba1914016457ef0724ddbb7b77476accbdf1161/src/types/ITicketJSON.ts

type Ticket = {
  ticketId: string
  asker: string
  parameters: { [label: string]: string }
  participants: { [userId: string]: Participant }
  timeline: TimelineEvent[]
  conversation: Message[]
}

type Participant = {
  name: string
  avatarUrl: string
}

type TimelineEventLabel = "工单开启" | "工单关闭" | "首次回复" | string

type TimelineEvent = {
  label: TimelineEventLabel
  timestamp: string
  userId?: string
}

type Message = {
  senderId: string
  timestamp: string
  content: TextContent | ImageContent | FileContent | CardContent
}

type TextContent = {
  type: "text"
  text: string
}

type ImageContent = {
  type: "image"
  url: string
}

type FileContent = {
  type: "file"
  url: string
  name: string
  file_type: string
  size: number
}

type CardContent = {
  type: "card"
  cards: unknown[]
}

export type {
  Ticket,
  Participant,
  TimelineEvent,
  TimelineEventLabel,
  Message,
  TextContent,
  ImageContent,
  FileContent,
}
