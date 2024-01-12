import _ from "lodash";
import AlertController from "../../../controller/alert";
import RouterConfigBuilder from "../../../library/utils/router_config_builder";

const alertController = new AlertController();

// 告警列表
const alertList = RouterConfigBuilder.routerConfigBuilder(
  "/adm/alert/list",
  RouterConfigBuilder.METHOD_TYPE_POST,
  (req, res) => {
    return alertController.alertList(req, res);
  },
  true
);

// 告警保存
const alerySave = RouterConfigBuilder.routerConfigBuilder(
  "/adm/alert/save",
  RouterConfigBuilder.METHOD_TYPE_POST,
  (req, res) => {
    return alertController.alertSave(req, res);
  },
  true
);

export default {
  ...alertList,
  ...alerySave,
};
