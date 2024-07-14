import { Avatar } from "@douyinfe/semi-ui"
import { Ticket } from "../types/ticket"

interface TicketParticipantsProps {
  ticket: Ticket
}

export default function TicketParticipants({
  ticket,
}: TicketParticipantsProps) {
  const participants = ticket.participants

  return (
    <div className="flex flex-col gap-3">
      {Object.keys(participants).map((participantId) => {
        const participant = participants[participantId]
        return (
          <div key={participantId} className="flex gap-3 items-center">
            <Avatar
              src={participant.avatarUrl}
              alt={participant.name}
              size="small"
            />
            <span>{participant.name}</span>
          </div>
        )
      })}
    </div>
  )
}
