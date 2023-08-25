import React, { useState } from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";

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

const Pay2 = ({ id, go, accountData, setSumToPay }) => {
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
    setSumToPay(event.target.value);
  };

  const inputDate = accountData.dat_f;
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, "dd.MM.yyyy");

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center">
          <div>
            Данные о сумме обновлялись: <b>{formattedDate}</b> <br />
            Сумма к оплате: <b>{accountData.k_saldo} ₽</b>
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
              onClick={(e) => go(e, inputValue)}
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
              data-to="pay1"
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
