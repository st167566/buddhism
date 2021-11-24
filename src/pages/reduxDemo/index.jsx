import { Button } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux';
import TYPES from "../../assets/constant/actionsConstant";
import "./index.scss";

class ReduxDemo extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    doFetch=()=>{
        const {dispatch} = this.props;
        dispatch({
            type: TYPES.FETCH_START,
            name: "test"
        })
        setTimeout(()=>{
            dispatch({
                type: TYPES.FETCH_END,
                name: "test"
            })
        },2000)
    }

    render() { 
        const {fetchReducer} = this.props;
        return (
            <div className="reduxDemo">
                {fetchReducer["test"]?"正在调用接口":"没有调用接口"}
                <Button loading={fetchReducer["test"]} onClick={this.doFetch}>模拟调用接口</Button>
            </div>
        );
    }
}
 
export default connect((store)=>({
    fetchReducer: store.fetchReducer
}))(ReduxDemo);