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

const Meters1 = ({ id, go }) => {
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
          <div>Введите текущие показания ПУГ</div>
          <div>
            Предыдущие показания на
            <b>
              <span> 10.10.2022:</span>
              <span> 250 м3</span>
            </b>
          </div>
        </Div>
        <div>
          <div className="input">
            <div className="input-title">Введите текущие показания</div>
            <Input
              id="account-number"
              type="text"
              placeholder="250 м3"
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
              data-to="metersFinish"
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

Meters1.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Meters1;
