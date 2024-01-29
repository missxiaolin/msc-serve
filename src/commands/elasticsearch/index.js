import Base from "../base";

// 安装
// docker pull docker.elastic.co/elasticsearch/elasticsearch:7.15.1
// docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.15.1
// 可视化界面
// docker pull docker.elastic.co/kibana/kibana:7.15.1
// docker run -d --name kibana --link elasticsearch:elasticsearch -p 5601:5601 docker.elastic.co/kibana/kibana:7.15.1

class SaveLog extends Base {
    static get signature() {
        return `
                SaveLog:Mq
            `;
      }
    
      static get description() {
        return "解析mq日志, 按日志创建时间将原日志和解析后合法的json日志落在log文件中, 每运行30s自动退出";
      }
    
      /**
       * 收集log
       * @param {*} args
       * @param {*} options
       */
      async execute(args, options) {
        
      }
}