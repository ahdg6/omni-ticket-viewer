import { useState } from "react"

import useFetch from "react-fetch-hook"

import type { Ticket } from "./types/ticket"

import ThemeContext, { type Theme } from "./contexts/ThemeContext"

import { Banner, Descriptions, Layout, Spin } from "@douyinfe/semi-ui"
import TicketContent from "./components/TicketContent"

function App() {
  const [theme, setTheme] = useState<Theme>("dark")

  const { isLoading, data: ticket, error } = useFetch<Ticket>("/example.json")

  function updateTheme(theme: Theme) {
    setTheme(theme)

    updateThemeInternal(theme)
  }

  function updateThemeInternal(theme: Theme) {
    const body = document.body
    body.setAttribute("theme-mode", theme)
  }

  updateThemeInternal(theme)

  const statusContent = isLoading ? (
    <Spin size="large" tip="Loading Ticket" style={{ paddingRight: "200px" }} />
  ) : error ? (
    <FetchError error={error} />
  ) : !ticket ? (
    <Banner
      fullMode={false}
      closeIcon={null}
      type="danger"
      description="加载完成的时，ticket 和 error 不应该为 null/undefined。但是这两就是空的。"
    />
  ) : null

  const layoutContent =
    isLoading || error || !ticket ? (
      <div className="h-full flex items-center justify-center">
        {statusContent}
      </div>
    ) : (
      <TicketContent ticket={ticket} updateTheme={updateTheme} />
    )

  return (
    <ThemeContext.Provider value={theme}>
      <Layout className="bg-semi-color-bg-0 text-semi-color-text-0 h-screen overflow-hidden">
        <Layout.Content>{layoutContent}</Layout.Content>
      </Layout>
    </ThemeContext.Provider>
  )
}

function FetchError({ error }: { error: useFetch.UseFetchError }) {
  const errorData = [
    { key: "Message", value: error.message },
    { key: "Status", value: error.status ?? "None" },
    { key: "Status Text", value: error.statusText ?? "None" },
    { key: "Stack", value: error.stack },
  ]

  return (
    <Banner
      fullMode={false}
      closeIcon={null}
      type="danger"
      title="无法加载工单内容"
      description="请检查你的网络连接是否正常和工单数据链接是否正确。"
      className="max-w-5xl"
    >
      <div className="text-semi-color-text-0 text-sm">
        <Descriptions data={errorData} />
      </div>
    </Banner>
  )
}

export default App
