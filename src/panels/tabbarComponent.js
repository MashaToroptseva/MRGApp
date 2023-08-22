import React from "react";
import PropTypes from "prop-types";

import { Panel, Tabbar, TabbarItem } from "@vkontakte/vkui";

import "./index.css";
import { Icon28HomeOutline } from "@vkontakte/icons";
import { Icon28MenuOutline } from "@vkontakte/icons";
import { Icon28AllCategoriesOutline } from "@vkontakte/icons";

const TabbarComponent = ({ id, go, nextPlace }) => {
  console.log(nextPlace);
  return (
    <Panel id={id}>
      <Tabbar shadow="false" className="Tab">
        <TabbarItem
          onClick={(e) => go(e, "home")}
          data-to="home"
          text="Главная"
          selected={nextPlace === "home"}
        >
          <Icon28HomeOutline />
        </TabbarItem>
        <TabbarItem
          onClick={(e) => go(e, "menu")}
          data-to="menu"
          text="Меню"
          selected={nextPlace !== "home"}
        >
          <Icon28AllCategoriesOutline />
        </TabbarItem>
        <TabbarItem text="Частые вопросы">
          <Icon28MenuOutline />
        </TabbarItem>
      </Tabbar>
    </Panel>
  );
};

TabbarComponent.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default TabbarComponent;
