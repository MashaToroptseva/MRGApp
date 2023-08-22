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

const Step2 = ({ id, go, nextPlace }) => {
  console.log(nextPlace);
  let content = null;
  if (nextPlace === "sum") {
    content = (
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
    );
  }
  if (nextPlace === "payment") {
    content = (
      <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={go}
          data-to="pay1"
        >
          Продолжить
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Изменить ЛС
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Назад
        </Button>
      </ButtonGroup>
    );
  }
  if (nextPlace === "meters") {
    content = (
      <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
        <Button size="l" appearance="accent" stretched>
          Обновить данные
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Изменить ЛС
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="meters1"
        >
          Дальше
        </Button>
      </ButtonGroup>
    );
  }
  if (nextPlace === "subscribe") {
    content = (
      <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Изменить ЛС
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="subscribe1"
        >
          Дальше
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Назад
        </Button>
      </ButtonGroup>
    );
  }
  if (nextPlace === "download") {
    content = (
      <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="step1"
        >
          Изменить ЛС
        </Button>
        <Button
          size="l"
          appearance="accent"
          stretched
          onClick={(e) => go(e, nextPlace)}
          data-to="download"
        >
          Дальше
        </Button>
      </ButtonGroup>
    );
  }

  return (
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
        <div>{content}</div>
      </Div>
    </Panel>
  );
};

Step2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Step2;
