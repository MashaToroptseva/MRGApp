import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
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

const Meters1 = ({ id, go, accountData }) => {
  console.log(accountData);

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

  const [responseMessage, setResponseMessage] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState("");

  const sendMeters = async () => {
    const currentDate = new Date();
    const formattedDateTime = format(currentDate, "yyyy-MM-dd HH:mm:ss");
    setFormattedDateTime(formattedDateTime); // Обновляем значение formattedDateTime

    const requestBody = {
      id_user_tlgrm: 123456789,
      date: formattedDateTime,
      device_ind_1: inputValue,
      receipt_subscr: false,
      email_subscr: "",
    };

    try {
      const response = await axios.post(
        "/api_dev/account/717350082",
        requestBody
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Ошибка при отправке POST-запроса", error);
    }
  };
  // const inputDate = accountData.datepok_pug; // Верный вариант
  const inputDate = accountData.date; // Вариант с цифрами чтобы работало
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, "dd.MM.yyyy");

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center text">
          <div>Введите текущие показания ПУГ</div>
          <div>Предыдущие показания на</div>
          <div>
            <b>
              {formattedDate}: {accountData.pokaz_pug} м3
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
              onClick={(e) => {
                go(e, sendMeters);
              }}
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
