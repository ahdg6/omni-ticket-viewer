import { useContext } from "react"

import { Avatar, Button, Card, Tooltip } from "@douyinfe/semi-ui"
import { Ticket } from "../types/ticket"
import { IconCopy, IconMoon, IconSun } from "@douyinfe/semi-icons"

import ThemeContext, { type Theme } from "../contexts/ThemeContext"

function getTimeString(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const remainingMinutes = Math.floor((seconds - 3600 * hours) % 60)
  const remainingSeconds = seconds % 60
  return `
    ${hours > 0 ? hours + " 小时" : ""}
    ${remainingMinutes > 0 ? remainingMinutes + " 分" : ""}${
    remainingSeconds > 0 ? " " + remainingSeconds + " 秒" : ""
  }`
}

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
              发起，持续 {getTimeString(Number(ticket.parameters.duration))}
            </div>
          </>
        }
      />
      <div className="flex">
        <Tooltip content={"切换颜色模式"} position="bottom">
          <Button
            theme="borderless"
            type="tertiary"
            size="large"
            icon={theme === "dark" ? <IconMoon /> : <IconSun />}
            onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
          />
        </Tooltip>
        <Tooltip content={"复制查看链接"} position="bottomRight">
          <Button
            theme="borderless"
            type="tertiary"
            size="large"
            icon={<IconCopy />}
            onClick={() => {
              const url = new URL(window.location.href)
              const src = url.searchParams.get("src")

              navigator.clipboard.writeText(
                `${url.origin}${src ? "?src=" + src : ""}`
              )
            }}
          />
        </Tooltip>
      </div>
    </div>
  )
}
