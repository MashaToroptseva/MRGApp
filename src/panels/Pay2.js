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
import hand from "../img/hand.png";

const Pay2 = ({ id, go }) => {
  const [inputValue, setInputValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleInputChange = (event) => {
    let newValue;

    if (event.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
            Данные о сумме обновлялись: <b>01.12.2022</b> <br />
            Сумма к оплате: <b> 90.0 ₽ </b>
            <br />
          </div>
          <div className="margin-top">
            &#9997; Введите сумму к оплате или нажмите “Оплатить всю сумму”
          </div>
        </Div>
        <div>
          <div className="input">
            <div className="input-title">Введите сумму к оплате</div>
            <Input
              id="account-number"
              type="text"
              placeholder="150"
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
              data-to="pay3"
            >
              Оплатить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay3"
            >
              Оплатить всю сумму
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Назад
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Pay2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Pay2;
