import { useContext } from "react"
import ThemeContext, { Theme } from "../contexts/ThemeContext"
import type { Message, Participant } from "../types/ticket"
import { MessagePreview } from "@kookapp/kook-message-preview"
import { Avatar, Image } from "@douyinfe/semi-ui"

import CardMessageExample from "../cardmessage-example.json"

interface MessageProps {
  message: Message
  participants: { [userId: string]: Participant }
}

export default function Message({ message, participants }: MessageProps) {
  const sender = participants[message.senderId]
  const theme = useContext(ThemeContext)

  return (
    <>
      <div className="flex gap-3">
        <Avatar src={sender.avatarUrl} alt={sender.name} />
        <div className="message-item-right-side">
          <div className="flex gap-2 items-baseline mb-1">
            <span className="font-bold text-lg">{sender.name}</span>
            <span className="text-xs opacity-80">
              {new Date(message.timestamp).toLocaleString()}
            </span>
          </div>
          <MessageContent message={message} theme={theme} />
        </div>
      </div>
    </>
  )
}

function MessageContent({
  message,
  theme,
}: {
  message: Message
  theme: Theme
}) {
  if (message.content.type === "image") {
    return (
      <Image
        src={message.content.url}
        className="rounded-md"
        imgCls="max-h-80"
      />
    )
  }

  const messageType = message.content.type == "text" ? "kmd" : "card"
  const messageContent = createMessageContent(message)

  return (
    <>
      <MessagePreview
        type={messageType}
        content={messageContent}
        theme={theme}
        external="https://cdn.jsdelivr.net/npm/@kookapp/kook-message-preview@0.0.4/dist/markdown-parse.0.0.10.js"
      />
      <MessagePreview
        type="card"
        content={CardMessageExample}
        theme={theme}
        external="https://cdn.jsdelivr.net/npm/@kookapp/kook-message-preview@0.0.4/dist/markdown-parse.0.0.10.js"
      />
    </>
  )
}

function createCard(card: unknown[]) {
  return [
    {
      type: "card",
      theme: "invisable",
      size: "lg",
      modules: card,
    },
  ]
}

function createFileCardMessage(
  url: string,
  name: string,
  size: number,
  type: string
) {
  return createCard([
    {
      type: type,
      title: name,
      src: url,
      size: String(size),
    },
  ])
}

function createMessageContent(message: Message) {
  switch (message.content.type) {
    case "text":
      return message.content.text
    case "file":
      return createFileCardMessage(
        message.content.url,
        message.content.name,
        message.content.size,
        message.content.type
      )
    default:
      return ""
  }
}
