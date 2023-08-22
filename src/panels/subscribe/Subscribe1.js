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

const Subscribe1 = ({ id, go }) => {
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
        <Div className="msg center text">
          <div>
            Для того, что бы получать электронную квитанцию, введите свой{" "}
            <b>email</b>
          </div>
        </Div>
        <div>
          <div className="input">
            <div className="input-title">Введите email</div>
            <Input
              id="account-number"
              type="text"
              placeholder="example@mail.ru"
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
              data-to="subscribe2"
            >
              Продолжить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={(e) => go(e, "meters")}
              data-to="step2"
            >
              Назад
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Subscribe1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Subscribe1;
