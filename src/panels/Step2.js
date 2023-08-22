import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  Text,
  ButtonGroup,
} from "@vkontakte/vkui";

import "./index.css";

const Step2 = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
      Мой Газ
    </PanelHeader>
    <Div className="menu-container">
      <Div className="msg center text">
        <Text>
          👋 Здравствуйте, <span>Сергей</span>!
        </Text>
        <Text>
          <div>Ваш номер лицевого счета:</div>
          <span>
            <b>123456789</b>
          </span>
        </Text>
        <Text>
          <div>Сумма к оплате в текущем месяце:</div>
          <span>
            <b>90.0 ₽</b>
          </span>
        </Text>
      </Div>
      <div>
        <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="step1"
          >
            Изменить ЛС
          </Button>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="pay1"
          >
            Оплатить
          </Button>
        </ButtonGroup>
      </div>
    </Div>
  </Panel>
);

Step2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Step2;
