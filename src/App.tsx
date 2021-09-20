import React from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import routes from "./routes";
import { GlobalStyle } from "./style";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle></GlobalStyle>
        {/* <i className="iconfont">&#xe62b;</i> */}
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
