import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "date-fns";
import "../index.css";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  ButtonGroup,
} from "@vkontakte/vkui";

const Subscribe2 = ({ id, go, emailData }) => {
  const [responseMessage, setResponseMessage] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState("");

  const refuseReceipt = async () => {
    const currentDate = new Date();
    const formattedDateTime = format(currentDate, "dd.MM.yyyy HH:mm:ss");
    setFormattedDateTime(formattedDateTime); // Обновляем значение formattedDateTime
    console.log(formattedDateTime);

    const requestBody = {
      id_user_tlgrm: 123456789,
      date: formattedDateTime,
      device_ind_1: 0,
      receipt_subscr: true,
      email_subscr: emailData,
    };

    try {
      const response = await axios.post(
        "https://mybot.supplerus.com/api_dev/account/717350082",
        requestBody
      );
      setResponseMessage(response.data.message);
    } catch (error) {
      console.error("Ошибка при отправке POST-запроса", error);
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg center">
          <div>
            Для получения доступа к электронной квитанции, вам нужно отказаться
            от бумажной
          </div>
        </Div>
        <div>
          <ButtonGroup
            className="button-group"
            mode="vertical"
            gap="m"
            stretched
          >
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={(e) => {
                go(e, refuseReceipt);
              }}
              data-to="subscribeFinish"
            >
              Отказаться
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="subscribe1"
            >
              Назад
            </Button>
          </ButtonGroup>
        </div>
      </Div>
    </Panel>
  );
};

Subscribe2.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Subscribe2;
