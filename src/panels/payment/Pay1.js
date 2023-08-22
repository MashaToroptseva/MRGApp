import React, { useState } from "react";
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

import "../index.css";

const Pay1 = ({ id, go }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event) => {
    let newValue;

    if (event.target.value.length > 11) {
      setDisabled(false);
      newValue = event.target.value.slice(0, 11);
    } else {
      setDisabled(true);
      newValue = event.target.value;
    }
    setInputValue(newValue);
  };

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg-group">
          <div className="msg">Введите ваш номер телефона</div>
          <div className="msg">
            Он может потребоваться при возникновении вопросов, связанных с
            оплатой
          </div>
        </Div>
        <div>
          <div className="input">
            <div className="input-title">Введите номер телефона</div>
            <Input
              id="account-number"
              type="text"
              placeholder="+79817083922"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <ButtonGroup
            className="button-group"
            mode="vertical"
            gap="m"
            stretched
          >
            <Button
              size="l"
              disabled={disabled}
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Продолжить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="step2"
            >
              Назад
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Пропустить
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Pay1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Pay1;
