import { useState } from "react"

import type { Ticket } from "./types/ticket"

import ThemeContext, { type Theme } from "./contexts/ThemeContext"

import TicketTimeline from "./components/TicketTimeline"
import TicketParticipants from "./components/TicketParticipants"
import MessageList from "./components/MessageList"

import { Avatar, Button, Card, Layout } from "@douyinfe/semi-ui"
import { IconCopy, IconMoon, IconSun } from "@douyinfe/semi-icons"

import SampleTicket from "./example.json"

function App() {
  const [theme, setTheme] = useState<Theme>("dark")

  // @ts-expect-error I don't know why
  const ticket = SampleTicket as Ticket

  function updateTheme(theme: Theme) {
    const body = document.body

    body.setAttribute("theme-mode", theme)

    setTheme(theme)
  }

  const asker = ticket.participants[ticket.asker]

  return (
    <ThemeContext.Provider value={theme}>
      <Layout className="bg-semi-color-bg-0 text-semi-color-text-0 h-screen overflow-hidden">
        <Layout.Content className="flex">
          <div className="w-72 p-5 border-r-2 border-semi-color-border">
            <Card.Meta
              title={ticket.guildName}
              description={ticket.instanceName}
              className="mb-2"
            />
            <TicketTimeline ticket={ticket} />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex p-5 border-b-2 border-semi-color-border">
              <Card.Meta
                className="flex-1"
                title={"# " + ticket.ticketTitle}
                description={
                  <>
                    <div className="flex gap-2">
                      由
                      <div className="flex">
                        <Avatar
                          src={asker.avatarUrl}
                          size="extra-extra-small"
                        />
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
                  onClick={() =>
                    updateTheme(theme === "dark" ? "light" : "dark")
                  }
                />
                <Button
                  theme="borderless"
                  type="tertiary"
                  size="large"
                  icon={<IconCopy />}
                />
              </div>
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
        </Layout.Content>
      </Layout>
    </ThemeContext.Provider>
  )
}

export default App
