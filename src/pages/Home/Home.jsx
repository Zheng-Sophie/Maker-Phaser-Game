import React, { Component } from 'react'
import { Layout ,BackTop} from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';


//Pages
import MyFooter from './MyFooter/MyFooter'
import IntroFeatureBox from './IntroFeatureBox/IntroFeatureBox'
import IntroStartBox from './IntroStartBox/IntroStartBox'
import IntroSampleBox from './IntroSampleBox/IntroSampleBox';
import IntroStepBox from './IntroStepBox/IntroStepBox'
import GameFrameBox from './GameFrameBox/GameFrameBox';

import './Home.css'

export default class Home extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  }

  componentDidMount() {
      this.resizeSizeEvent = window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {

    const {width} = this.state

    return (
        <Layout>
            <IntroStartBox></IntroStartBox>
            <IntroFeatureBox></IntroFeatureBox>
            
            <GameFrameBox width={width}></GameFrameBox>
            <IntroStepBox width={width}></IntroStepBox>
            <IntroSampleBox width={width}></IntroSampleBox>
            {/* 回到首頁按鈕 */}
            <BackTop duration={300}>
              <div className='back-top-button'>
                <VerticalAlignTopOutlined />
              </div>
            </BackTop>

            <MyFooter></MyFooter>
        </Layout>
    )
  }
}
