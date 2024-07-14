import type { Ticket } from "../types/ticket"
import type { Theme } from "../contexts/ThemeContext"

import { Card } from "@douyinfe/semi-ui"

import MessageList from "./MessageList"
import TicketHeader from "./TicketHeader"
import TicketMeta from "./TicketMeta"
import TicketParticipants from "./TicketParticipants"

export default function TicketContent({
  ticket,
  updateTheme,
}: {
  ticket: Ticket
  updateTheme: (theme: Theme) => void
}) {
  return (
    <div className="flex h-full">
      <div className="w-72 p-5 border-r-2 border-semi-color-border">
        <TicketMeta ticket={ticket} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="border-b-2 border-semi-color-border">
          <TicketHeader ticket={ticket} updateTheme={updateTheme} />
        </div>
        <div className="flex flex-1">
          <div className="flex flex-1 flex-col h-full">
            <div className="overflow-y-scroll p-4 flex-grow h-0">
              <MessageList ticket={ticket} />
            </div>
          </div>
          <div className="flex flex-col w-72 p-4 space-y-2 border-l-2 border-semi-color-border">
            <Card.Meta title="参与者" />
            <div className="space-y-2 flex-grow h-0 overflow-y-scroll">
              <TicketParticipants ticket={ticket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
