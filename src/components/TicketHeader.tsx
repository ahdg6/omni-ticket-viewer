import { useContext } from "react"

import { Avatar, Button, Card } from "@douyinfe/semi-ui"
import { Ticket } from "../types/ticket"
import { IconCopy, IconMoon, IconSun } from "@douyinfe/semi-icons"

import ThemeContext, { type Theme } from "../contexts/ThemeContext"

export default function TicketHeader({
  ticket,
  updateTheme,
}: {
  ticket: Ticket
  updateTheme: (theme: Theme) => void
}) {
  const asker = ticket.participants[ticket.asker]
  const theme = useContext(ThemeContext)

  return (
    <div className="flex p-5">
      <Card.Meta
        className="flex-1"
        title={"# " + ticket.ticketTitle}
        description={
          <>
            <div className="flex gap-2">
              由
              <div className="flex">
                <Avatar src={asker.avatarUrl} size="extra-extra-small" />
                <span className="ml-1 font-semibold">{asker.name}</span>
              </div>
              发起，持续 {ticket.parameters.duration}
            </div>
          </>
        }
      />
      <div className="flex">
        <Button
          theme="borderless"
          type="tertiary"
          size="large"
          icon={theme === "dark" ? <IconMoon /> : <IconSun />}
          onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
        />
        <Button
          theme="borderless"
          type="tertiary"
          size="large"
          icon={<IconCopy />}
        />
      </div>
    </div>
  )
}
