import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, List,Card } from 'antd'
import { Image, Space, Typography, Modal } from 'antd'
import { Tooltip } from 'react-tooltip'
import { Button } from 'antd'

import './GameFrameBox.less'

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

class GameFrameBox extends Component {
    goToGame = (name) => { //跳轉遊戲與檢查
        return (event) => { //檢查資料庫是否有有此人
            let username = localStorage.getItem('username')
            console.log(username)
            if(username === '' || username === 'null' || username === 'undefined' || username === null || username === undefined ){
                //message.warning('請登入！')
                window.alert('請註冊')
                this.props.history.push('/userAuth')
            }else{
                //console.log({gameId: name})
                this.props.history.push('/gameMaker', {gameId: name})
            }
        }
    }
    //彈出視窗設定，分成8個
    state = {
        isModalVisible1: false,
        isModalVisible2: false,
        isModalVisible3: false,
        isModalVisible4: false,
        isModalVisible5: false,
        isModalVisible6: false,
        isModalVisible7: false,
        isModalVisible8: false
    }
    showModal1 = () => {
        this.setState({
          isModalVisible1: true
        });
    };
    showModal2 = () => {
        this.setState({
          isModalVisible2: true
        });
    };
    showModal3 = () => {
        this.setState({
          isModalVisible3: true
        });
    };
    showModal4 = () => {
        this.setState({
          isModalVisible4: true
        });
    };
    showModal5 = () => {
        this.setState({
          isModalVisible5: true
        });
    };
    showModal6 = () => {
        this.setState({
          isModalVisible6: true
        });
    };
    showModal7 = () => {
        this.setState({
          isModalVisible7: true
        });
    };
    showModal8 = () => {
        this.setState({
          isModalVisible8: true
        });
    };
    handleCancel = () => {
        this.setState({
            isModalVisible1: false,
            isModalVisible2: false,
            isModalVisible3: false,
            isModalVisible4: false,
            isModalVisible5: false,
            isModalVisible6: false,
            isModalVisible7: false,
            isModalVisible8: false
        });
    };
    //遊戲化八項
    render() {
        const {width} = this.props
        // 8個遊戲化框架顯示和文字敘述內容
        // Modal 顯示彈出視窗內容
        const data = [
            {
                content: (
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>情景設定</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>完整的角色設定讓人更有參與感</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal1(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/situation.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible1}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">情景設定</div>
                            <Paragraph>
                                <Text>正式名稱：重大使命與呼召<br/></Text>
                                <Text>讓人完成事情的動機是使命感<br/></Text>
                                <Text>認為自己做的事情很偉大，超越小我的價值<br/></Text>
                                <Text>例如：遊戲前的說明</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameInstruction.png' alt='遊戲說明'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("CatchFruit")}>
                                    <img className="startbutton-image" src='/img/FrameBox/catchFruit.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>前進的成就感</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>不斷破關會讓人情不自禁玩下去<br/></Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal2(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/progress.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible2}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">前進的成就感</div>
                            <Paragraph>
                                <Text>正式名稱：遊戲進度與成就<br/></Text>
                                <Text>遊戲內自己的進步，克服不同難關<br/></Text>
                                <Text>挑戰的心理是讓玩家一直玩下去的動力<br/></Text>
                                <Text>例如：分數級距的說明</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/scoreDescribe.png' alt='分數級距說明'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                            <a href='#' onClick={this.goToGame("Quiz")}>
                                    <img className="startbutton-image" src='/img/FrameBox/quiz.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>自由的創造與回饋</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>讓玩家自由組合不同東西，發揮創造力</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal3(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/creativity.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible3}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">自由的創造與回饋</div>
                            <Paragraph>
                                <Text>正式名稱：賦予創造力與回饋<br/></Text>
                                <Text>玩家自由搭配遊戲中內容<br/></Text>
                                <Text>並根據玩家的操作給予回饋<br/></Text>
                                <Text>例如：遊戲隱藏成就</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameCreativity.png' alt='遊戲創造回饋'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                                <a href='#' onClick={this.goToGame("CatchFruit")}>
                                    <img className="startbutton-image" src='/img/FrameBox/catchFruit.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>追求利益的心</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>增加手中物品的價值</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal4(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/profit.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible4}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">追求利益的心</div>
                            <Paragraph>
                                <Text>正式名稱：所有權與占有欲<br/></Text>
                                <Text>擁有資源時，會希望增加手上東西並改善現有物品<br/></Text>
                                <Text>例如：遊戲前的說明</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameInstruction.png' alt='遊戲說明'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                                <a href='#' onClick={this.goToGame("PokeGetItem")}>
                                    <img className="startbutton-image" src='/img/FrameBox/pokeGetItem.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>社群影響力</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>發揮社群媒體的力量，產生競爭與合作</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal5(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/influence.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible5}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">社群影響力</div>
                            <Paragraph>
                                <Text>正式名稱：社會影響力與同理心<br/></Text>
                                <Text>激勵人類的元素，可以競爭與互動<br/></Text>
                                <Text>例如：分享遊戲截圖</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameInstruction.png' alt='分享遊戲截圖'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                                {/* <Button onClick={this.goToGame("Cooking")} className="startbutton" type="primary" size="large">
                                    前 往 推 薦 1 !
                                </Button>
                                <Button onClick={this.goToGame("Cooking")} className="startbutton" type="primary" size="large">
                                    前 往 推 薦 2 !
                                </Button> */}
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>最遙遠的距離：等待</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>花時間等待是壓抑不住好奇心的</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal6(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/time-is-money.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible6}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">最遙遠的距離：等待</div>
                            <Paragraph>
                                <Text>正式名稱：稀缺性與迫切<br/></Text>
                                <Text>想要得到某些東西，但是資源與機會有限<br/></Text>
                                <Text>需要把握時間<br/></Text>
                                <Text>例如：遊戲前幾名截圖</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameInstruction.png' alt='遊戲說明'/>
                            <div className='spacer'></div>
                            <div className='buttonrow-single'>
                                <a href='#'>
                                    <img className="startbutton-image" src='/img/FrameBox/waiting.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>未知的下一步</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>猜不透下一步是什麼才有吸引力</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal7(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/curiosity.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible7}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">未知的下一步</div>
                            <Paragraph>
                                <Text>正式名稱：不確定性與好奇心<br/></Text>
                                <Text>遊玩中發現事情的結果和預想的不同<br/></Text>
                                <Text>例如：遊戲掉落機率</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/dropProbability.png' alt='遊戲掉落機率'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                                <a href='#' onClick={this.goToGame("PokeGetItem")}>
                                    <img className="startbutton-image" src='/img/FrameBox/pokeGetItem.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            },
            {
                content: ( 
                    <Typography className="my-anchor-element">
                        <Paragraph>
                            <Title level={5}>失敗的可能</Title>
                        </Paragraph>
                        <Paragraph>
                            <Text>趨利避害是本能，為了利益衝啊</Text>
                        </Paragraph>
                        <a href='#' onClick={(e) => { e.preventDefault(); this.showModal8(); }}>
                            <img className="startbutton-image" src='/img/FrameBox/limited.png'></img>
                        </a>
                        <Modal
                            open={this.state.isModalVisible8}
                            onCancel={this.handleCancel}
                            footer={null}
                            className="centered-modal"
                        >
                            <div className="centered-title">失敗的可能</div>
                            <Paragraph>
                                <Text>正式名稱：損失與避免<br/></Text>
                                <Text>避免負面的事物發生，或是沒有取得最好的時機<br/></Text>
                                <Text>可以設定風險損失與懲罰，或是限定遊戲時間<br/></Text>
                                <Text>例如：遊戲限定時間後關閉</Text>
                            </Paragraph>
                            <img src='/img/FrameBox/gameEndTime.png' alt='遊戲限定時間後關閉'/>
                            <div className='spacer'></div>
                            <div className='buttonrow'>
                            <a href='#' onClick={this.goToGame("Shooting")}>
                                    <img className="startbutton-image" src='/img/FrameBox/shooting.png'></img>
                                </a>
                                <a href='#' onClick={this.goToGame("Cooking")}>
                                    <img className="startbutton-image" src='/img/FrameBox/cooking.png'></img>
                                </a>
                            </div>
                        </Modal>
                    </Typography>
                ),
            }
        ]

        return (
            // 顯示作品預覽區塊的程式
            <Content className='frame-box' style={{padding: width < 425 ? "64px 24px" : "64px 48px"}}>
                <Title className='frame-title' style={{width: width >= 500 ? "450px" : "auto"}}>遊 戲 滿 分 設 計 技 巧</Title>

                <Paragraph>
                    <Text>為什麼別人的遊戲這麼好玩</Text>
                </Paragraph>
                <Paragraph style={{marginBottom: "66px"}}>
                    <Text>它有甚麼技巧?</Text>
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
                            style={{background: "#F7E9DF", padding: "10px",borderRadius: "6px"}} 
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