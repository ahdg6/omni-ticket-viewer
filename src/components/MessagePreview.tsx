import { useContext } from "react"

import type { Message, Participant } from "../types/ticket"

import ThemeContext, { Theme } from "../contexts/ThemeContext"

// @ts-expect-error Because the package is not typed
import { MessagePreview } from "@kookapp/kook-message-preview"
import { Avatar, Typography, Image, Dropdown } from "@douyinfe/semi-ui"

interface MessageProps {
  message: Message
  participants: { [userId: string]: Participant }
}

export default function Message({ message, participants }: MessageProps) {
  const sender = participants[message.senderId]
  const theme = useContext(ThemeContext)

  return (
    <Dropdown
      trigger="hover"
      position="rightTopOver"
      render={
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => navigator.clipboard.writeText(message.id)}
          >
            复制 ID
          </Dropdown.Item>
          <Dropdown.Item
            disabled={message.content.type !== "text"}
            onClick={() =>
              message.content.type === "text" &&
              navigator.clipboard.writeText(message.content.text)
            }
          >
            复制原始内容
          </Dropdown.Item>
        </Dropdown.Menu>
      }
    >
      <div className="hover:bg-semi-color-bg-1 px-4 py-2">
        <div className="flex gap-3">
          <Dropdown
            trigger="contextMenu"
            position="bottomLeft"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>复制 ID</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <Avatar src={sender.avatarUrl} alt={sender.name} />
          </Dropdown>
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
      </div>
    </Dropdown>
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
    <MessagePreview
      type={messageType}
      content={messageContent}
      theme={theme}
      customMetUserRender={(id: string) => customMentionRenderer("user", id)}
      customRoleRender={(id: string) => customMentionRenderer("role", id)}
      customChannelRender={(id: string) => customMentionRenderer("channel", id)}
    />
  )
}

function customMentionRenderer(type: string, id: string) {
  return (
    <Typography.Text
      link={true}
      copyable={{
        content: id,
        copyTip: "复制 ID",
      }}
    >
      @{type}:{id}
    </Typography.Text>
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
    case "card":
      return JSON.stringify(message.content.cards)
    default:
      return ""
  }
}
