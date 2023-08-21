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

import "./index.css";
import account from "../img/account.png";

const Step1 = ({ id, go }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event) => {
    let newValue;

    if (event.target.value.length > 9) {
      setDisabled(false);
      newValue = event.target.value.slice(0, 9);
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
        <Div className="msg center">
          <div>
            <img className="account-img" src={account} />
          </div>
          <div>
            Введите номер лицевого счета (9 цифр). Номер лицевого счета можно
            посмотреть в квитанции.
          </div>
        </Div>
        <div>
          <div className="input">
            <div className="input-title">Введите лицевой счёт</div>
            <Input
              id="account-number"
              type="number"
              max="9"
              placeholder="123456789"
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
              data-to="step2"
            >
              Продолжить
            </Button>
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
        </div>
      </Div>
    </Panel>
  );
};

Step1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Step1;
