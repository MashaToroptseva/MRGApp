import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Menu from "./panels/Menu";
import TabbarComponent from "./panels/tabbarComponent";
import Step1 from "./panels/Step1";
import Step2 from "./panels/Step2";
import Pay1 from "./panels/payment/Pay1";
import Pay2 from "./panels/payment/Pay2";
import Pay3 from "./panels/payment/Pay3";
import PayFinish from "./panels/payment/PayFinish";
import Meters1 from "./panels/meters/Meters1";
import MetersFinish from "./panels/meters/MetersFinish";
import Subscribe1 from "./panels/subscribe/Subscribe1";
import Subscribe2 from "./panels/subscribe/Subscribe2";
import SubscribeFinish from "./panels/subscribe/SubscribeFinish";
import Download from "./panels/download/Download";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [nextPlace, setNextPlace] = useState("");

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e, place) => {
    setNextPlace(place);
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" go={go} />
                <Menu id="menu" go={go} />
                <Step1 id="step1" go={go} nextPlace={nextPlace} />
                <Step2 id="step2" go={go} nextPlace={nextPlace} />
                <Pay1 id="pay1" go={go} nextPlace={nextPlace} />
                <Pay2 id="pay2" go={go} />
                <Pay3 id="pay3" go={go} />
                <PayFinish id="payFinish" go={go} />
                <Meters1 id="meters1" go={go} />
                <MetersFinish id="metersFinish" go={go} />
                <Subscribe1 id="subscribe1" go={go} />
                <Subscribe2 id="subscribe2" go={go} />
                <SubscribeFinish id="subscribeFinish" go={go} />
                <Download id="download" go={go} />
              </View>
              <TabbarComponent id="tab" go={go} />
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
