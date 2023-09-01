import React, { useState } from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";
import axios from "axios";
import "../index.css";
import logo from "../../img/logo.png";
import { v4 as uuidv4 } from "uuid";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
  ButtonGroup,
} from "@vkontakte/vkui";

const Pay3 = ({ id, go, accountData, sumToPayData, phoneData }) => {
  console.log(sumToPayData, phoneData);
  // const inputDate = accountData.datepok_pug; // Верный вариант
  const inputDate = accountData.date; // Вариант с цифрами чтобы работало
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  const comission = 1.53;
  const sumTotal = parseInt(sumToPayData) + comission;
  const [responseMessage, setResponseMessage] = useState("");
  const [formattedDateTime, setFormattedDateTime] = useState("");

  const [guid, setGuid] = useState(uuidv4());

  const generateNewGuid = () => {
    setGuid(uuidv4());
    console.log(guid);
  };

  const toPay = async () => {
    const currentDate = new Date();
    const formattedDateTime = format(currentDate, "yyyy-MM-dd HH:mm:ss");
    setFormattedDateTime(formattedDateTime); // Обновляем значение formattedDateTime

    const requestBody = {
      id_payment: guid,
      regionId: 20000,
      updateId: "",
      preCheckId: "",
      id_user_tlgrm: 34434,
      currency: "RUB",
      total: sumTotal * 100,
      commission: 0,
      cost: 0,
      invoicePayload: "",
      uniqueId: "",
      payStatus: 1,
      tlgPaymentChargeId: "",
      prvdPaymentChargeId: "",
    };

    try {
      const response = await axios.post(
        "https://mybot.supplerus.com/api_dev/payment/717350082",
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
        <Div className="msg-group">
          <div className="msg">
            Номер лицевого счета: {accountData.LS} Телефон: {phoneData} Сумма
            платежа: {sumToPayData} ₽ Комиссия: {comission} ₽ Итого к оплате:{" "}
            {sumTotal} ₽
          </div>
          <div className="msg">
            <img className="logo" src={logo} />
            Оплата счета {accountData.LS} <br />
            За {accountData.pokaz_pug} м³ от {formattedDate}
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
                go(e, toPay);
              }}
              data-to="payFinish"
            >
              Оплатить
            </Button>
            <Button
              size="l"
              appearance="accent"
              stretched
              onClick={go}
              data-to="pay2"
            >
              Изменить
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

Pay3.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default Pay3;
