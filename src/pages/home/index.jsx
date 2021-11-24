import React from "react";
import { createHashHistory } from "history";
import './index.scss';
import { Button } from "antd-mobile";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 跳转My页面
  goto = (path) => ()=> {
    const history = createHashHistory();
    history.push(path);
  };

  render() {
    return (
      <div className="page-home">
        home 页面
        <Button onClick={this.goto("/my")}>跳转my页面</Button>
        <Button onClick={this.goto("/reduxDemo")}>跳转ReduxDemo页面</Button>
      </div>
    );
  }
}

export default Home;
