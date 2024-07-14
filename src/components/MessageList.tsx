import { Card, ImagePreview } from "@douyinfe/semi-ui"
import { ImageContent, Ticket } from "../types/ticket"
import MessagePreview from "./MessagePreview"
import ImagePreviewContext from "../contexts/ImagePreviewContext"

interface MessageListProps {
  ticket: Ticket
}

export default function MessageList({ ticket }: MessageListProps) {
  const markdownContent =
    "> **社区守则**\n\n---\n**社区守则** 为在**任何** VRCD 官方社交平台（QQ、KOOK）中**任何用户**都须遵守的普遍条例。\n\n> **我们倡导**\n\n---\n· 用户发表的内容遵循良好且积极向上的三观。\n· 用户发表的内容面向技术，积极接触并实践 VR 创作。\n· 用户根据《提问建议与规范》积极提问并在能力范围内积极回答。\n\n> **我们不允许**\n\n---\n1. 用户短时间发表大量文字、图片、媒体信息、表情以干扰社区讨论与破坏社区环境。\n2. 用户发布涉及人身攻击，刻板歧视，贫富攀比，煽动引战，不实信息，低俗黄色，恐怖主义，反社会，反人类，诽谤，诈骗等包括但不限于图片，视频，链接，文字形式的恶俗内容。\n3. 用户发布任何可能危及人身与财产安全的内容，包括但不限于：\n  a. 对个人信息的泄露\n  b. 不实虚假的诈骗内容\n  c. 任何可以被用于直接或间接损害人身与财产安全的内容/知识/代码。\n4. 用户发布、宣传有关盗模网站、盗模技术、闲鱼数字商品、上传存在版权争议的资源文件、数字商品拼车等有违相关商品版权协议或版权法的内容。\n5. 用户发布违反中华人民共和国相关法律法规的内容。\n\n> **内容传播相关**\n\n---\nVRCD 不对社区内玩家与社团的任何宣传行为负责，我们只建议以下几点：\n\n1. 内容应健康向上，宣传内容不应有任何非法律允许的不良信息。\n2. 内容应具有真实性，宣传内容应与宣传物或服务相符。\n3. 内容体量不应过大，单次宣传信息应以 200 字左右为标准，包含图像/影像不多于 3 个，链接不多于 4 个。\n4. 内容发布不应多次重复，针对一项活动/商品的宣传信息发送频率不应超过 3 次一个月。\n5. 内容发布不应过频，单个用户（由一个自由人管理的所有账号）在群内发布的宣传内容不宜超过 6 次一个月。\n\n> **提问建议与规范**\n\n---\n您可能会在学习和创作过程中遇到各种难以解决的问题，在遇到问题时，您可以放心大胆地向群里的大家求助，但是在提问之前，确保您能尽量地提出“优质问题”，您的问题应该能让大家方便地定位问题原因所在。 尽量遵循以下“好问题”守则：\n\n1. 明确问题场景：请详细说明您在哪个具体环节遇到了困难，这会比笼统的提问更有帮助。 比如：“我希望让我的模型的头发飘动起来，在尝试为头发添加动骨时遇到问题”要比“我的头发不会动怎么办”更有帮助。\n2. 尽可能详细地描述您在问题前和问题后的操作：这包括您在遇到问题前，和遇到问题后的操作，可以让大家对您的情况有一个更深入的了解。 比如：“我在我的头发中骨骼添加了一个VRC Phys Bone组件，但是它并没有生效” “我尝试着修改了组件中的这些参数，但问题并没有解决”\n3. 提供您的出问题时的截图：您应该尽量附上截图，这有助于群友定位您的环境，或者了解您问题的表现，原因等。\n4. 请在有空时询问问题：为了节省双方时间，您应该在确保自己后续有时间补充问题细节，回答其他人问题的时候再提问。\n\n这些小守则并不是强制性的，但遵循它们可以大大提高您的问题得到解决的几率。\n同时，我们鼓励您分享自己的解决方案和各种想法，一起促进社区成长！\n\n> **违规标准**\n\n---\n**违规标准** 为用户在某种情况下违反社区守则后的处罚标准。\n\n· 第一次违规，警告并撤回消息\n· 第二次违规，一小时禁言并撤回消息\n· 第三次违规，一天禁言并撤回消息\n· 第四次违规，撤回消息并踢出服务器\n\n· **该频道内规则更新可能有延迟，具体请以：**[https://wiki.vrcd.org.cn/zh/regulations](https://wiki.vrcd.org.cn/zh/regulations)** 中内容为准。**\n· 您始终应该遵守[《KOOK 社区守则》](https://help.kookapp.cn/8114/f2db)和[《KOOK 违规内容处罚说明》](https://help.kookapp.cn/8114/3100)。"

  const anotherMarkdownContent =
    "> ** 临时语音频道指令使用指南**\n\n· `/v.name <新的名称>`- 重命名临时语音频道\n\n> **问题求助子区/工单**\n\n· `/ticket.close` 关闭当前工单\n\n> (met)1592756533(met)\n\n**请注意：为了避免在不恰当的频道出现不恰当的内容，该 Bot 仅在 **(chn)3274033755592145(chn)** 频道可使用**\n· `.我是什么少女` - 完全随机生成一系列人物属性\n\n> (met)429949279(met)\n\n**请注意：为了避免在不恰当的频道出现不恰当的内容，该 Bot 仅在 **(chn)4415497179954418(chn) **频道可使用**\n\n如果您实在记不住这些指令，记住这个就好了：\n· `/pixiv gui` - 使用交互式图形界面\n\n· `/pixiv top` - 获取本日/周/月等的全站最热插画\n· `/pixiv tag <标签>` - 获取所给标签人气前九的图片\n· `/pixiv detail <ID>` - 获取对应 ID 插画的详细信息（作品名、作者、标签等）\n· `/pixiv author <用户昵称 / 用户 ID>` - 获取用户的最新九张插画\n· `/pixiv random` - 获取⑨张随机插画\n· `/pixiv profile` - 查看个人信息\n· `/pixiv redeem` - 兑换激活码\n\n> **注意事项**\n\n<用户>字段支持所有能定位到唯一用户的写法，如：\n(met)1530316026(met) `1530316026` `Misaka-L#2715`"

  const cardMessageContent = [
    {
      theme: "warning",
      color: "",
      size: "lg",
      expand: false,
      modules: [
        {
          type: "header",
          text: {
            type: "plain-text",
            emoji: true,
            content: "当您阅读并知悉以上规则后，请点击下方的按钮领取角色",
            elements: [],
          },
          elements: [],
        },
        { type: "divider", elements: [] },
        {
          type: "header",
          text: {
            type: "plain-text",
            emoji: true,
            content: "玩家",
            elements: [],
          },
          elements: [],
        },
        {
          type: "section",
          mode: "left",
          accessory: null,
          text: {
            type: "plain-text",
            emoji: true,
            content: "必要基础角色，请先领取这个！",
            elements: [],
          },
          elements: [],
        },
        {
          type: "action-group",
          elements: [
            {
              type: "button",
              theme: "primary",
              value: "grant:23692964",
              click: "return-val",
              text: {
                type: "plain-text",
                emoji: true,
                content: "领取该角色",
                elements: [],
              },
              external: true,
              elements: [],
            },
            {
              type: "button",
              theme: "danger",
              value: "revoke:23692964",
              click: "return-val",
              text: {
                type: "plain-text",
                emoji: true,
                content: "去掉该角色",
                elements: [],
              },
              external: true,
              elements: [],
            },
          ],
        },
        {
          type: "header",
          text: {
            type: "plain-text",
            emoji: true,
            content: "接收通知",
            elements: [],
          },
          elements: [],
        },
        {
          type: "section",
          mode: "left",
          accessory: null,
          text: {
            type: "plain-text",
            emoji: true,
            content:
              "领取该角色，代表您同意接收来自 VRCD 服务器的通知（如活动动态，服务状态更新等）。\n\n请注意：如果需要通知直接影响到所有服务器成员或您的角色组（如 @创作者）的事项（如可能会踢人），我们还是会 @全体成员的。",
            elements: [],
          },
          elements: [],
        },
        {
          type: "action-group",
          elements: [
            {
              type: "button",
              theme: "primary",
              value: "grant:37979440",
              click: "return-val",
              text: {
                type: "plain-text",
                emoji: true,
                content: "领取该角色",
                elements: [],
              },
              external: true,
              elements: [],
            },
            {
              type: "button",
              theme: "danger",
              value: "revoke:37979440",
              click: "return-val",
              text: {
                type: "plain-text",
                emoji: true,
                content: "去掉该角色",
                elements: [],
              },
              external: true,
              elements: [],
            },
          ],
        },
      ],
      type: "card",
    },
  ]

  const messages = ticket.conversation.map((message) => (
    <MessagePreview
      key={message.timestamp + message.senderId}
      message={message}
      participants={ticket.participants}
    />
  ))

  messages.push(
    <MessagePreview
      key="markdown-1"
      message={{
        senderId: "u456",
        timestamp: "0",
        content: { type: "text", text: anotherMarkdownContent },
      }}
      participants={ticket.participants}
    />
  )

  messages.push(
    <MessagePreview
      key="markdown"
      message={{
        senderId: "u456",
        timestamp: "0",
        content: { type: "text", text: markdownContent },
      }}
      participants={ticket.participants}
    />
  )

  const images = ticket.conversation
    .filter((message) => message.content.type === "image")
    .map((message) => {
      return {
        messageId: message.timestamp + message.senderId,
        src: (message.content as ImageContent).url,
      }
    })

  return (
    <ImagePreviewContext.Provider value={images}>
      <div className="flex flex-col gap-4">{messages}</div>
    </ImagePreviewContext.Provider>
  )
}
