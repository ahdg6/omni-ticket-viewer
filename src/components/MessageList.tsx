import { Ticket } from "../types/ticket"
import MessagePreview from "./MessagePreview"

interface MessageListProps {
  ticket: Ticket
}

export default function MessageList({ ticket }: MessageListProps) {
  const messages = ticket.conversation.map((message) => (
    <MessagePreview
      key={message.id}
      message={message}
      participants={ticket.participants}
    />
  ))

  return (
    <>
      <div className="flex flex-col gap-4">{messages}</div>
    </>
  )
}
