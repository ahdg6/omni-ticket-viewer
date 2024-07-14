import { ImageContent, Ticket } from "../types/ticket"
import MessagePreview from "./MessagePreview"
import ImagePreviewContext from "../contexts/ImagePreviewContext"

interface MessageListProps {
  ticket: Ticket
}

export default function MessageList({ ticket }: MessageListProps) {
  const messages = ticket.conversation.map((message) => (
    <MessagePreview
      key={message.timestamp + message.senderId}
      message={message}
      participants={ticket.participants}
    />
  ))

  const images = ticket.conversation
    .filter((message) => message.content.type === "image")
    .map((message) => {
      return {
        messageId: message.timestamp + message.senderId,
        src: (message.content as ImageContent).url,
      }
    })

  return (
    <ImagePreviewContext.Provider value={images}>
      <div className="flex flex-col gap-4">{messages}</div>
    </ImagePreviewContext.Provider>
  )
}
