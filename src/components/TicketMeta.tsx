import type { Ticket } from "../types/ticket"

import { Card, Typography } from "@douyinfe/semi-ui"

import TicketTimeline from "./TicketTimeline"

export default function TicketMeta({ ticket }: { ticket: Ticket }) {
  return (
    <>
      <Card.Meta
        title={
          <>
            <span># {ticket.guildName}</span>
            <Typography.Text
              size="small"
              type="tertiary"
              copyable={{
                copyTip: "复制服务器 ID",
                content: ticket.guildId,
              }}
            />
          </>
        }
        description={
          <>
            <span># {ticket.instanceName}</span>
            <Typography.Text
              size="small"
              type="tertiary"
              copyable={{
                copyTip: "复制实例 ID",
                content: ticket.instanceId,
              }}
            />
          </>
        }
        className="mb-2"
      />
      <TicketTimeline ticket={ticket} />
    </>
  )
}
