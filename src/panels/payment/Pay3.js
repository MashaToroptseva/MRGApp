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
import logo from "../../img/logo.png";

const Pay3 = ({ id, go, accountData, metersData, phoneData }) => {
  console.log(metersData, phoneData);
  // const inputDate = accountData.datepok_pug; // Верный вариант
  const inputDate = accountData.date; // Вариант с цифрами чтобы работало
  const parsedDate = parseISO(inputDate);
  const formattedDate = format(parsedDate, "dd.MM.yyyy");
  const comission = 1.53;
  const sumTotal = parseInt(metersData) + comission;
  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="menu" />}>
        Мой Газ
      </PanelHeader>
      <Div className="menu-container">
        <Div className="msg-group">
          <div className="msg">
            Номер лицевого счета: {accountData.LS} Телефон: {phoneData} Сумма
            платежа: {metersData} ₽ Комиссия: {comission} ₽ Итого к оплате:{" "}
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
              onClick={go}
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
