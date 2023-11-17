import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import cloneDeep from 'lodash.clonedeep';

import { Input,InputNumber,Row, Typography} from 'antd';
import { Col,Card } from 'antd';

const ids = [0,1,2,3,4]
export default class GameEndTimer extends Component {
    
    state = {
        textDatas: {},
        pubsubList: []
    }

    componentDidMount(){
        this.setState({
            textDatas: {...this.props}
        })
        let {pubsubList} = this.state

        pubsubList.push(
            PubSub.subscribe('backToDefaultDatas', (msg,gameModifyDatas)=> {
                const {textDatas} = this.state
                if(gameModifyDatas[textDatas.parent] !== undefined){
                    for(let i=0;i<gameModifyDatas[textDatas.parent].items.length;i++){
                        if(gameModifyDatas[textDatas.parent].items[i].name === textDatas.name){
                            this.setState({
                                textDatas: cloneDeep(gameModifyDatas[textDatas.parent].items[i])
                            })
                            break
                        }
                    }
                }
            })
        )
    }

    componentWillUnmount(){
        const {pubsubList} = this.state
        for(let i=0;i< pubsubList.length;i++){
            PubSub.unsubscribe(pubsubList[i])
        }
    }

    render() {
        
        const {days} = this.props.gameEndTimer
        const changeNumberValue = (event) => {
            const {textDatas} = this.state
            textDatas.gameEndTimer.days[Number(event.target.id)] = Number(event.target.value)
            PubSub.publishSync("setFormDatas",{name: this.props.name, values: textDatas})
        };
        
        // const changeTextValue = (event) => {
        //     const {textDatas} = this.state
        //     textDatas.gameEndTimer.message[Number(event.currentTarget.id)] = event.target.value
        //     PubSub.publishSync("setFormDatas",{name: this.props.name, values: textDatas})
        // }

        return (
            <Col span={10}>
                <Card 
                    bordered={false}       
                >
                    {
                        ids.map((id)=>{
                            return (
                                <div key={id}>
                                    <Row>
                                        {
                                            <Col span={10} onChange={changeNumberValue}>
                                                    <InputNumber 
                                                        id={id} 
                                                        min={ id === 0 ? 2023 : id === 1 ? 1: id === 2 ? 1 : 0} 
                                                        max={id === 0 ? 2030 : id === 1 ? 12 : id === 2 ? 31 : id === 3 ? 23 : 59} 
                                                        controls={false} 
                                                        value={days[id]} 
                                                        formatter={(value) => {
                                                            if(value === ''){
                                                                return 0
                                                            }else{
                                                                return value
                                                            }
                                                        }}
                                                        parser={(value) => {
                                                            if(value === ''){
                                                                return 0
                                                            }else{
                                                                return value
                                                            }
                                                        }}
                                                    />
                                                </Col>
                                        }
                                        <Col span={10}>
                                            <Input value={id === 0 ? "年" : id === 1 ? "月"  : id === 2 ? "日" : id === 3 ? "時" : "分"}  disabled/>
                                        </Col>
                                        {/* <Col span={24}>
                                            <Input id={id} placeholder={"訊息"} allowClear value={message[id]} onKeyDown={e => e.stopPropagation()} onChange={changeTextValue} />
                                        </Col> */}
                                    </Row>
                                    <br />
                                </div>
                            )
                        })
                    }
                </Card>
            </Col>
        )
    }
}
