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
                Es:Save
            `;
      }
    
      static get description() {
        return "Elasticsearch 存储";
      }
    
      /**
       * ES 存储方便查询更快
       * @param {*} args
       * @param {*} options
       */
      async execute(args, options) {
        
      }
}