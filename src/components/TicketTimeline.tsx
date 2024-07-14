import { Avatar, Timeline } from "@douyinfe/semi-ui"
import { Ticket, TimelineEventLabel } from "../types/ticket"

interface TicketTimelineProps {
  ticket: Ticket
}

function getTimelineItemType(label: TimelineEventLabel) {
  switch (label) {
    case "工单开启":
      return "ongoing"
    case "工单关闭":
      return "success"
    case "首次回复":
      return "warning"
    default:
      return "default"
  }
}

function TicketUser({
  userId,
  participants,
}: {
  userId: string | undefined
  participants: Ticket["participants"]
}) {
  if (!userId) return null

  const user = participants[userId]

  if (!user) {
    return null
  }

  return (
    <div className="flex gap-1">
      <Avatar src={user.avatarUrl} alt={user.name} size="extra-extra-small" />
      <span>{user.name}</span>
    </div>
  )
}

export default function TicketTimeline({ ticket }: TicketTimelineProps) {
  const items = ticket.timeline.map((item) => {
    return (
      <Timeline.Item
        type={getTimelineItemType(item.label)}
        time={new Date(item.timestamp).toLocaleString()}
        key={item.timestamp}
      >
        <div className="flex gap-2">
          <span>{item.label}</span>
          <TicketUser userId={item.userId} participants={ticket.participants} />
        </div>
      </Timeline.Item>
    )
  })

  return <Timeline>{items}</Timeline>
}
