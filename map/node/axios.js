const fs = require("fs");
const axios = require("axios");
const { SourceMapConsumer } = require("source-map");

// 读取 Source Map 文件
// const sourceMapData = fs.readFileSync("list-037e6ddc.js.map", "utf-8");
axios.get("https://xxxx.js.map").then(res => {
    const sourceMapData = res.data
    // 创建 SourceMapConsumer 对象
    SourceMapConsumer.with(
        sourceMapData,
        null,
        (consumer) => {
        // 通过调用 consumer.originalPositionFor() 方法获取原始代码中的位置信息
        const originalPosition = consumer.originalPositionFor({
            line: 1,
            column: 123798,
        });
    
        // 输出原始位置信息
        console.log('originalPosition', originalPosition);
        },
        (error) => {
        console.error(error);
        }
    );
})

// 这个是源码
// console.log(JSON.parse(sourceMapData).sourcesContent)


