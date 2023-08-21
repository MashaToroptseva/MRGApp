import React from "react";
import PropTypes from "prop-types";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  Input,
  ButtonGroup,
} from "@vkontakte/vkui";

import "./index.css";

const Step2 = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
      Мой Газ
    </PanelHeader>
    <Div className="menu-container">
      <Div className="msg center">
        <div>👋 Здравствуйте, Сергей!</div>
        <div>Ваш номер лицевого счета: 123456789</div>
        <div>Сумма к оплате в текущем месяце: 90.0 ₽</div>
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
