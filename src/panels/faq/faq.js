import React from "react";
import PropTypes from "prop-types";

import {
  ButtonGroup,
  Button,
  Div,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from "@vkontakte/vkui";

import "../index.css";

const Faq = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="home" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <div className="msg center text">
          <div>
            <b>Это раздел поддержки</b>
          </div>
          <div>
            В нем вы можете посмотреть частозадаваемые вопросы и связаться с
            нами
          </div>
          <div>Наша почта: support @ihelpdesk.me</div>
        </div>
        <ButtonGroup className="button-group" mode="vertical" gap="m" stretched>
          <a href="https://www.peterburgregiongaz.ru/faq/" target="_blank">
            <Button size="l" appearance="accent" stretched>
              Популярные вопросы
            </Button>
          </a>
          <a href="https://vk.com/id818111005" target="_blank">
            <Button size="l" appearance="accent" stretched>
              Связаться с нами
            </Button>
          </a>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="menu"
          >
            Назад
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};

Faq.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Faq;
