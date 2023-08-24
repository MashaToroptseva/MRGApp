import React from "react";
import PropTypes from "prop-types";
import { parseISO, format } from "date-fns";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Div,
  Button,
} from "@vkontakte/vkui";

import "../index.css";

const MetersFinish = ({ id, go, accountData }) => {
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
          <div>👏 Спасибо за передачу показаний!</div>
          <div>
            Актуальные данные:
            <div>
              Номер лицевого счета: <b>{accountData.LS}</b>
            </div>
            <div>
              Последние показания:{" "}
              <b>
                {formattedDate}: {accountData.pokaz_pug} м3
              </b>
            </div>
          </div>
        </Div>
        <div>
          <Button
            size="l"
            appearance="accent"
            stretched
            onClick={go}
            data-to="home"
          >
            Главная
          </Button>
        </div>
      </Div>
    </Panel>
  );
};

MetersFinish.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};
export default MetersFinish;
