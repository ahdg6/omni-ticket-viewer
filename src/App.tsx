import { useState } from "react"

import type { Ticket } from "./types/ticket"

import ThemeContext, { type Theme } from "./contexts/ThemeContext"

import TicketTimeline from "./components/TicketTimeline"
import TicketParticipants from "./components/TicketParticipants"
import MessageList from "./components/MessageList"

import { Card, Layout } from "@douyinfe/semi-ui"
import TicketHeader from "./components/TicketHeader"
import TicketMeta from "./components/TicketMeta"

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
        </Layout.Content>
      </Layout>
    </ThemeContext.Provider>
  )
}

export default App
