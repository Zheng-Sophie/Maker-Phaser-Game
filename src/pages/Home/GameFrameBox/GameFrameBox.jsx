import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, List,Card } from 'antd'
import { Image, Space, Typography } from 'antd'
import { Tooltip } from 'react-tooltip'
import { Button } from 'antd'

import './GameFrameBox.less'

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

class GameFrameBox extends Component {
    goToGame = (name) => { 
        return (event) => { //檢查資料庫是否有有此人
            let username = localStorage.getItem('username')
            console.log(username)
            if(username === '' || username === 'null' || username === 'undefined' || username === null || username === undefined ){
                //message.warning('請登入！')
                this.props.history.push('/userAuth')
            }else{
                //console.log({gameId: name})
                this.props.history.push('/gameMaker', {gameId: name})
                
            }
        }
    }
    
    render() {
        const {width} = this.props
        // 8個遊戲化框架顯示和文字敘述內容
        const data = [
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：煮菜">
                        <Paragraph>
                            <Title level={5}>重大使命與呼召</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>認為自己做的事情很偉大，超越小我的價值</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("Cooking")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：">
                        <Paragraph>
                            <Title level={5}>遊戲進度與成就</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>遊戲內自己的進步，克服不同難關<br></br>挑戰的心理是讓玩家一直玩下去的動力</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("Quiz")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
                
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：">
                        <Paragraph>
                            <Title level={5}>賦予創造力與回饋</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>讓玩家自由組合不同東西，發揮創造力</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("CatchFruit")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：戳戳樂">
                        <Paragraph>
                            <Title level={5}>所有權與占有欲</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>擁有資源時，會希望增加手上東西並改善現有物品</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("PokeGetItem")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：">
                        <Paragraph>
                            <Title level={5}>社會影響力與同理心</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>激勵人類的元素</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("Cooking")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：">
                        <Paragraph>
                            <Title level={5}>稀缺性與迫切</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>想要得到某些東西，但是稀有或無法立即取得</Text>
                        </Paragraph>
                        <Button className="startbutton" type="primary" size="large">
                            敬 請 期 待 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：戳戳樂">
                        <Paragraph>
                            <Title level={5}>不確定性與好奇心</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>遊玩中發現事情的結果和預想的不同</Text>
                        </Paragraph>
                        <Button onClick={this.goToGame("PokeGetItem")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element" data-tooltip-content="推薦遊戲：">
                        <Paragraph>
                            <Title level={5}>損失與避免</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>避免負面的事物發生，或是沒有取得最好的時機</Text>
                        </Paragraph>
                        <Tooltip  anchorSelect=".my-anchor-element"/>
                        <Button onClick={this.goToGame("Shooting")} className="startbutton" type="primary" size="large">
                            前 往 推 薦 !
                        </Button>
                    </Typography>
                ),
            }
        ]

        return (
            // 顯示作品預覽區塊的程式
            <Content className='frame-box' style={{padding: width < 425 ? "64px 24px" : "64px 48px"}}>
                <Title className='frame-title' style={{width: width >= 500 ? "400px" : "auto"}}>遊 戲 的 要 素</Title>

                <Paragraph>
                    <Text>為什麼別人的遊戲這麼好玩</Text>
                </Paragraph>
                <Paragraph style={{marginBottom: "66px"}}>
                    <Text>他有甚麼特色?</Text>
                </Paragraph>
                <List
                    // 根據裝置大小調整畫面的顯示，響應式設計
                    grid={{
                        gutter: 48,
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 4,
                        xl: 4,
                        xxl: 4,
                    }}
                    dataSource={data}
                    renderItem={item => (
                    // render出4個圖片
                    <List.Item style={{ marginBottom: "32px" }}>
                        <Card 
                            hoverable
                            style={{background: "#F69653", padding: "10px",borderRadius: "6px"}} 
                            headStyle={{borderBottom: "none"}}
                            bordered={false}  
                            title={item.title}
                            bodyStyle={{padding: "24px 16px 0 16px"}}
                            //cover={<Image alt="sample" src={`/img/sample/${item.src}`} />}
                        >
                            {item.content}
                        </Card>
                        
                    </List.Item>
                    )}
                />
            </Content>
        )
    }
}
export default withRouter(GameFrameBox)