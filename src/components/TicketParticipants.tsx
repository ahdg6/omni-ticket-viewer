import { Avatar, Dropdown } from "@douyinfe/semi-ui"
import { Ticket } from "../types/ticket"

interface TicketParticipantsProps {
  ticket: Ticket
}

export default function TicketParticipants({
  ticket,
}: TicketParticipantsProps) {
  const participants = ticket.participants

  return (
    <div className="flex flex-col">
      {Object.keys(participants).map((participantId) => {
        const participant = participants[participantId]
        return (
          <Dropdown
            key={participantId}
            trigger="contextMenu"
            position="bottomLeft"
            render={
              <Dropdown.Menu>
                <Dropdown.Item>复制 ID</Dropdown.Item>
              </Dropdown.Menu>
            }
          >
            <div className="flex gap-3 items-center hover:bg-semi-color-bg-1 mx-4 p-1 rounded-md cursor-pointer">
              <Avatar
                src={participant.avatarUrl}
                alt={participant.name}
                size="small"
              />
              <span>{participant.name}</span>
            </div>
          </Dropdown>
        )
      })}
    </div>
  )
}
