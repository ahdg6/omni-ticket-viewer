import type { Ticket } from "../types/ticket"

import { Card } from "@douyinfe/semi-ui"

import TicketTimeline from "./TicketTimeline"

export default function TicketMeta({ ticket }: { ticket: Ticket }) {
  return (
    <>
      <Card.Meta
        title={ticket.guildName}
        description={ticket.instanceName}
        className="mb-2"
      />
      <TicketTimeline ticket={ticket} />
    </>
  )
}
