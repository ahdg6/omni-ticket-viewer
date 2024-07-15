import { useContext } from "react"

import { Avatar, Button, Card, Tooltip, Typography } from "@douyinfe/semi-ui"
import { Ticket } from "../types/ticket"
import { IconCopy, IconMoon, IconSun } from "@douyinfe/semi-icons"

import ThemeContext, { type Theme } from "../contexts/ThemeContext"

function getTimeString(milliseconds: number): string {
    // 将毫秒转换为总秒数
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    // 计算剩余的分钟和秒数
    minutes = minutes % 60;
    seconds = seconds % 60;

    // 构建输出字符串
    let result = [];
    if (hours > 0) result.push(`${hours}小时`);
    if (minutes > 0) result.push(`${minutes}分`);
    if (seconds > 0) result.push(`${seconds}秒`);

    return result.join(" ") || "0秒";  // 如果结果为空（即所有都为0），则返回"0秒"
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
        title={
          <div className="space-x-1">
            <span># {ticket.ticketTitle}</span>
            <Typography.Text
              type="tertiary"
              size="small"
              copyable={{
                copyTip: "复制工单 ID",
              }}
            >
              {ticket.ticketId}
            </Typography.Text>
          </div>
        }
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
