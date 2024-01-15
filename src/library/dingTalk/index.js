import dingConfig from "../../config/ding";
const axios = require("axios");

/**
 * 机器人消息发送
 * 关键词必须有【项目】
 * https://open.dingtalk.com/document/orgapp/custom-robots-send-group-messages
 * @param {*} data
 */
async function sendDingTalkMessage(data) {
  const { alarmMsg, title } = data;
  console.log(dingConfig)
  const webhookUrl = dingConfig.webhook;
  if (!webhookUrl) {
    return '请先配置机器人！'
  }
  const markdown = `### ${title}\n\n${alarmMsg}`;
  try {
    const response = await axios.post(webhookUrl, {
      //   msgtype: "text",
      //   text: {
      //     content: `${alarmMsg}`,
      //   },
      msgtype: "markdown",
      markdown: {
        title,
        text: markdown,
      },
    });

    if (response.data.errcode === 0) {
      return true
    } else {
      return response.data.errmsg
    }
  } catch (error) {
    return error.toString()
  }
}

export { sendDingTalkMessage };
