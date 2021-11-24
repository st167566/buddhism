import { Button } from 'antd-mobile';
import React from 'react';
import {createHashHistory} from "history";

class My extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }

    backHome=()=>{
        createHashHistory().goBack()
    }

    render() { 
        return <div className="page-my">
            My 页面
            <Button onClick={this.backHome}>Back</Button>
        </div>;
    }
}
 
export default My;