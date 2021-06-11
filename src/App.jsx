import React from "react";
import logo0 from '../src/unnamed.gif';
import logo1 from '../src/1.gif';
import logo2 from '../src/22.gif';
import logo3 from '../src/12.gif';
import logo4 from '../src/44.gif';
import logo5 from '../src/38.gif';
import logo6 from '../src/39.gif';
import logo7 from '../src/17.gif';
import logo8 from '../src/18.gif';
import logo9 from '../src/8-1.gif';
import logo10 from '../src/43.gif';
import logo11 from '../src/25.gif';
import logo12 from '../src/42.gif';
import logo13 from '../src/13.gif';
import logo14 from '../src/5-1.gif';
import logo15 from '../src/6.gif';
import logo16 from '../src/2-1.gif';

import { Container, Row, Col, Button, Radiobox, Tabs, TabItem, Icon, DeviceThemeProvider} from '@sberdevices/plasma-ui';
import { ToastContainer, toast } from 'react-toastify';
import { detectDevice } from '@sberdevices/plasma-ui/utils';
import 'react-toastify/dist/ReactToastify.css';
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";
import "./App.css";

import {
  createUser,
  getUser,
  updateUser,
} from "./APIHelper.js";
import { m } from "@sberdevices/plasma-core/mixins";

const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};


export class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      notes: [],
      //
      UserId: "",
      //
      logo: logo0,
      foodLevel: null,
      sleepLevel: null,
      playLevel: null,
      color1: 'var(--plasma-colors-accent)',
      color2: 'var(--plasma-colors-accent)',
      color3: 'var(--plasma-colors-accent)',
      timeOfExit: 0,
      hour: 0,
      min: 0,
      sec: 0, 
      name: "Тамагочи",
      s: ``,
      m: ``,
      ch: ``,
      flag: true,
      f: false,
      kusua: false,
  
      f1: null,
      p1: null,
      s1: null,
      size: 'm',
      full: null,
      img: null,
      sizeImg: null,
      sizeDiv: null,
    }
    this.Change_img = this.Change_img.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.timer = this.timer.bind(this);
    this.words = this.words.bind(this);
    this.changeFlag = this.changeFlag.bind(this);
    this.checkWidth = this.checkWidth.bind(this);
  }

  

  timer() {
    if (this.state.logo === logo5){
    this.state.hour = 0;
    this.state.min = 0;
    this.state.sec = 0;
    } else
    this.setState({ sec: this.state.sec += 1 });
    if( this.state.sec >= 59 ) {
      this.state.sec = 0;
      this.state.min = this.state.min + 1;
      if( this.state.min >= 59 ) {
        this.state.min = 0;
        this.state.hour += 1;
        };
      };
      if (this.state.hour >= 1){
        this.state.f = true;
      }
    };

  getTimeDifference(time) {
    //время, когда мы вышли из приложения
    const exitTime = new Date(time);
    //актуальное время
    const actualTime = new Date();
    console.log('Time of exit: ', exitTime);
    console.log('Actual time: ', actualTime);
    //разница во времени в миллисекундах
    const diffTimeInSec = (actualTime - exitTime - 10800000);
    console.log('diffTime', diffTimeInSec);
    return diffTimeInSec
  }

  componentDidMount() {   
    console.log('componentDidMount');
    this.assistant = initializeAssistant(() => this.getStateForAssistant());
    this.assistant.on("data", (event /*: any*/) => {
      if (event.type == "smart_app_data") {
        console.log("User");
        console.log(event);
        console.log('event.sub', event.sub);
        if (event.sub != undefined) {
          console.log("Sub", event.sub);
          this.state.UserId = event.sub;
          createUser(this.state.UserId, this.state.name, 51, 51, 51, 
            new Date(), this.state.sec, this.state.min, this.state.hour, false, true);
          updateUser(this.state.UserId, 
            this.state.name,
            this.state.foodLevel, 
            this.state.playLevel, 
            this.state.sleepLevel,
            new Date(),
            this.state.sec,
            this.state.min,
            this.state.hour,
            this.state.kusua,
            this.state.flag,
            );
          getUser(this.state.UserId).then((user) => {
            console.log(user);
            this.setState({kusua: user["kusua"]});
            this.setState({flag: user["flag"]})
            this.Change_img();
            this.setState({name: user["name"]});
            this.setState({foodLevel: user["foodLevel"]});
            this.setState({playLevel: user["playLevel"]});
            this.setState({sleepLevel: user["sleepLevel"]});
            this.didTamagatchiDie(); 
            this.setState({sec: user["sec"]});
            this.setState({min: user["min"]});
            this.setState({hour: user["hour"]});
      
            const time = user["timeOfExit"];
            const diffTime = this.getTimeDifference(time);
      
            this.state.foodLevel = this.state.foodLevel - Math.round(diffTime / 12000);
            if (this.state.foodLevel < 0) {this.state.foodLevel = 0}
        
            this.state.sleepLevel = this.state.sleepLevel - Math.round(diffTime / 60000);
            if (this.state.sleepLevel < 0) {this.state.sleepLevel = 0}
        
            this.state.playLevel = this.state.playLevel - Math.round(diffTime / 20000);
            if (this.state.playLevel < 0) {this.state.playLevel = 0}
        
            this.state.sec = this.state.sec + Math.round((diffTime / 1000) % 60);
            this.state.min = this.state.min + Math.round((diffTime / (1000 * 60)) % 60);
            this.state.hour = this.state.hour + Math.round((diffTime / (1000 * 60 * 60)) % 24);
          })
          
        }
      console.log(`assistant.on(data)`, event);
      const { action } = event;
      this.dispatchAssistantAction(action);
      }
    });
    this.assistant.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
    });


    setInterval(() => {
      updateUser(this.state.UserId, 
      this.state.name,
      this.state.foodLevel, 
      this.state.playLevel, 
      this.state.sleepLevel,
      new Date(),
      this.state.sec,
      this.state.min,
      this.state.hour,
      this.state.kusua,
      this.state.flag,
      );
    }, 6000)

    setInterval(() => {
      this.less(1); 
      this.didTamagatchiDie(); 
      this.checkWidth();
      this.changeColor();
    }, 12000);
    setInterval(() => {
      this.less(2); 
      this.checkWidth();
      this.didTamagatchiDie(); 
      this.changeColor();
    }, 60000);
    setInterval(() => {
      this.less(3); 
      this.checkWidth();
      this.didTamagatchiDie(); 
      this.changeColor();
    }, 20000);
    setTimeout(() => setInterval(() => {
      this.timer();
      this.words();
  }, 1000), 1000)
    
  }

  less(value){
    switch (value) {
      case 1:            
      if (this.state.foodLevel > 0)
      this.setState({ 
        foodLevel: this.state.foodLevel -= 1
      });
      else this.state.foodLevel = 0;
      break;
      case 2:
        if (this.state.sleepLevel > 0)
        this.setState({ 
          sleepLevel: this.state.sleepLevel -= 1
        });
        else this.state.sleepLevel = 0;
      break;
      case 3:
        if (this.state.playLevel > 0)
        this.setState({ 
      playLevel: this.state.playLevel -= 1 
    });
    else this.state.playLevel = 0;
      break;
      default:

        break;
      }
  }

  //сделаать уровень еды максимальным
  feed() { 
    this.state.foodLevel = 100;
  }
  //сделаать уровень сна максимальным
  sleep() {           
    this.state.sleepLevel = 100;
  }
  //сделаать уровень счатья максимальным
  play() {            
    this.state.playLevel = 100;
  }


  didTamagatchiDie()
  {
    if (this.state.kusua===false){
    if ((this.state.foodLevel > 60)&&(this.state.sleepLevel > 60)&&(this.state.playLevel > 60))
    this.setState({ logo:  logo1});
    else if ((this.state.foodLevel <= this.state.sleepLevel)&&(this.state.foodLevel <= this.state.playLevel)&&(this.state.foodLevel <= 60))
    this.setState({ logo:  logo6});
    else if ((this.state.playLevel <= this.state.sleepLevel)&&(this.state.playLevel <= this.state.foodLevel)&&(this.state.playLevel <= 60))
    this.setState({ logo:  logo7});
    else if ((this.state.sleepLevel <= this.state.playLevel)&&(this.state.sleepLevel <= this.state.foodLevel)&&(this.state.sleepLevel <= 60))
    this.setState({ logo:  logo8});
    if ((this.state.foodLevel <= 0) && (this.state.sleepLevel <= 0) && (this.state.playLevel <= 0))
    {
      this.setState({ logo:  logo5});
    }
  } else {
    if ((this.state.foodLevel > 60)&&(this.state.sleepLevel > 60)&&(this.state.playLevel > 60))
    this.setState({ logo:  logo9});
    else if ((this.state.foodLevel <= this.state.sleepLevel)&&(this.state.foodLevel <= this.state.playLevel)&&(this.state.foodLevel <= 60))
    this.setState({ logo:  logo13});
    else if ((this.state.playLevel <= this.state.sleepLevel)&&(this.state.playLevel <= this.state.foodLevel)&&(this.state.playLevel <= 60))
    this.setState({ logo:  logo14});
    else if ((this.state.sleepLevel <= this.state.playLevel)&&(this.state.sleepLevel <= this.state.foodLevel)&&(this.state.sleepLevel <= 60))
    this.setState({ logo:  logo15});
    if ((this.state.foodLevel <= 0) && (this.state.sleepLevel <= 0) && (this.state.playLevel <= 0))
    {
      this.setState({ logo:  logo16});
    }
  }
  }

 
  changeColor(){                             //изменение цвета прогрессбаров 
    if (this.state.foodLevel>60) 
    {this.setState({ color1: 'var(--plasma-colors-accent)'});}
    else if ((this.state.foodLevel<=60)&&(this.state.foodLevel>=30)) 
    {this.setState({ color1: 'var(--plasma-colors-warning)'});}
    else {this.setState({ color1: 'var(--plasma-colors-critical)'});}

    if (this.state.playLevel>60) 
    {this.setState({ color2: 'var(--plasma-colors-accent)'});}
    else if ((this.state.playLevel<=60)&&(this.state.playLevel>=30)) 
    {this.setState({ color2: 'var(--plasma-colors-warning)'});}
    else {this.setState({ color2: 'var(--plasma-colors-critical)'});}

    if (this.state.sleepLevel>60) 
    {this.setState({ color3: 'var(--plasma-colors-accent)'});}
    else if ((this.state.sleepLevel<=60)&&(this.state.sleepLevel>=30)) 
    {this.setState({ color3: 'var(--plasma-colors-warning)'});}
    else {this.setState({ color3: 'var(--plasma-colors-critical)'});}
  }

  getStateForAssistant () {
    console.log('getStateForAssistant: this.state:', this.state)
    const state = {
      item_selector: {
        items: this.state.notes.map(
          ({ id, title }, index) => ({
            number: index + 1,
            id,
            title,
          })
        ),
      },
    };
    console.log('getStateForAssistant: state:', state)
    return state;
  }

  dispatchAssistantAction (action) {
    console.log('dispatchAssistantAction', action);
    if (action) {
      switch (action.type) {
        case 'to_feed':
          return this.Change_img(1);

        case 'to_play':
          return this.Change_img(2);

        case 'to_sleep':
          return this.Change_img(3);
        
        case 'set_name':
          this.setState({name : action.note});
          break;
        
        case 'exit':
          this.assistant.close();          
          break;

        default:
          //throw new Error();
      }
    }
  }


  Change_img(value){
    switch (value) {
      //кот ест
      case 1:      
      if (this.state.kusua === false) {     
        this.setState({ logo:  logo2});   
      } else {
        this.setState({ logo:  logo10});   
      }
      setTimeout(() => {this.didTamagatchiDie();}, 3000);
      this.feed();
      this.changeColor();
      break;
      //кот играет 
      case 2:
        if (this.state.kusua === false) 
        this.setState({ logo:  logo3});
        else this.setState({ logo:  logo11});
        setTimeout(() => {this.didTamagatchiDie();}, 3000);
        this.play();
        this.changeColor();
        break;
      //кот спит
      case 3:
        if (this.state.kusua === false) 
        this.setState({ logo:  logo4});
        else this.setState({ logo:  logo12});
        setTimeout(() => {this.didTamagatchiDie();}, 100000);
        this.sleep();
        this.changeColor();
        break;
      //дефолтное состояние кота
      default:
        if (this.state.kusua === false) { 
        this.setState({ logo:  logo1});
      } else if (this.state.kusua === true) {
        this.setState({ logo:  logo9});
      } else this.setState({ logo:  logo0});
        break;
    }
  }


  changeFlag(value){
    const notify = () => toast.success("Будет доступна через час!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    switch (value) {
      //кот ест
      case 1:            
        this.setState({ flag:  true});
        this.state.kusua = false;
        this.Change_img();
        break;
      case 2:
        if (this.state.f === true){
        this.setState({ flag:  false});
        this.state.kusua = true;
        this.Change_img();
        } else notify();
        break;
      
      default:
        this.setState({ flag:  true});
        break;
    }
    
  }


  words(){
    if (this.state.min === 0) this.state.m= ``;
    else if (this.state.min === 1){
      this.setState({ m:  `${this.state.min} минуту`});
    } else if ((this.state.min %10 > 1)&&(this.state.min %10 < 5)&&(this.state.min != 12)&&(this.state.min != 13)&&(this.state.min != 14)) {
      this.setState({ m:  `${this.state.min} минуты`});
    } else {this.setState({ m:  `${this.state.min} минут`});}

      if (this.state.hour === 0) this.state.ch = ``;
      else if (this.state.hour === 1){
      this.setState({ ch:  `${this.state.hour} час`});
    } else if ((this.state.hour > 1)&&(this.state.hour < 5)) {
      this.setState({ ch:  `${this.state.hour} часа`});
    } else {this.setState({ ch:  `${this.state.hour} часов`});}

      if ((this.state.sec %10 === 1)&&(this.state.sec != 11)){
      this.setState({ s:  `${this.state.sec} секунду`});
    } else if ((this.state.sec %10 > 1)&&(this.state.sec %10 < 5)&&(this.state.sec != 12)&&(this.state.sec != 13)&&(this.state.sec != 14)) {
      this.setState({ s:  `${this.state.sec} секунды`});
    } else {this.setState({ s:  `${this.state.sec} секунд`});}
  }
  checkWidth(){
    this.state.f1 = this.state.foodLevel ;
    this.state.p1 = this.state.playLevel;
    this.state.s1 = this.state.sleepLevel ;
    if (window.screen.width > 1750){
      this.state.f1*= 5;
      this.state.p1*= 5;
      this.state.s1*= 5 ;
      this.state.size='l'
      this.state.full=520;
      this.state.img=500;
      this.state.sizeImg=5;
      this.state.sizeDiv=7;
    } else 
    if ((window.screen.width === 1280)&&(window.screen.height === 800)){
      this.state.f1*= 2.5;
      this.state.p1*= 2.5;
      this.state.s1*= 2.5;
      this.state.size='s';
      this.state.full=270;
      this.state.img=300;
      this.state.sizeImg=2;
      this.state.sizeDiv=3;
    } else 
    if (window.screen.width > 1300)
    {
      this.state.f1*= 4;
      this.state.p1*= 4;
      this.state.s1*=4 ;
      this.state.size='l'
      this.state.full=420;
      this.state.img=400;
      this.state.sizeImg=5;
      this.state.sizeDiv=6;
    } 
    else  if ((window.screen.width > 900) && (window.screen.height < 1900))
    {
      this.state.f1*= 4;
      this.state.p1*= 4;
      this.state.s1*=4 ;
      this.state.size='m'
      this.state.full=420;
      this.state.img=400;
      this.state.sizeImg=5;
      this.state.sizeDiv=7;
    } else  if ((window.screen.width > 900) && (window.screen.height > 1900))
    {
      this.state.f1*= 5;
      this.state.p1*= 5;
      this.state.s1*=5 ;
      this.state.size='l'
      this.state.full=520;
      this.state.img=600;
      this.state.sizeImg=6;
      this.state.sizeDiv=8;
    } 
    else {
      this.state.offset=2;
      this.state.f1*= 1.5;
      this.state.p1*= 1.5;
      this.state.s1*= 1.5;
      this.state.size='s';
      this.state.full=170;
      this.state.img=200;

      this.state.sizeImg=3;
      this.state.sizeDiv=4;
    }
  }
  assistant_global_event(phrase) {
    this.assistant.sendData({
      action: {
        action_id: phrase
      }
    })
    if (phrase === 'feed') {
      this.Change_img(1);
    } else if (phrase === 'play') {
      this.Change_img(2);
    } else if (phrase === 'sleep') {
      this.Change_img(3);
    } else if (phrase === 'exit') {
      this.assistant.close()
    }
  }
  
  render() {
    console.log('render');
    const c1 = this.state.color1;
    const c2 = this.state.color2;
    const c3 = this.state.color3;
    const tamagotchiName = this.state.name[0].toUpperCase() + this.state.name.slice(1);

    return (
      <div >
        <Container style = {{padding: 0

}}>
        <Row>
            <Col sizeXL={9}> <h1 class="center"> {tamagotchiName} живет {this.state.ch} {this.state.m} {this.state.s} </h1></Col>
        </Row>
        <Row>
            <Col sizeXL={10} offset={1}>
              <div >
            <Tabs
            size={this.state.size}
            view= 'secondary'
        >
                <TabItem
                isActive = {this.state.flag}
                onClick={() => this.changeFlag(1) }
                >
                    Сберкот
                </TabItem>
                <TabItem
                isActive = {!this.state.flag}
                onClick={() => this.changeFlag(2) }
                >
                    Куся 
                </TabItem>
        </Tabs> </div>
        <ToastContainer 
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
              </Col>
              
        </Row>
        <Row>
            <Col type="calc" size={this.state.sizeImg} > <img id = "img" src={this.state.logo} class="img"  />
            </Col>
            <Col size={this.state.sizeDiv}>
            <div  style={{textalign:'center', margin: '0.5em'}}>
        
        <Button
        class = "button"
        style={{margin: '0.5em', textalign:'center'}}
        text='Кормить'
        size={this.state.size}
        view='primary'
        pin="square-square"
        onClick={()=>this.assistant_global_event('feed')}/>
        <Button
        class = "button"
        style={{margin: '0.5em', textalign:'center'}}
        text='Играть'
        size={this.state.size}
        view='primary'
        pin="square-square"
        onClick={()=>this.assistant_global_event('play')}/>
        <Button
        class = "button"
        style={{margin: '0.5em', textalign:'center'}}
        text='Спать'
        size={this.state.size}
        view='primary'
        pin="square-square"
        onClick={()=>this.assistant_global_event('sleep')}/>
        </div>
            <div >
          <div >
          {/* <div class="two" 
        style={{height: '35px'}}
        ></div> */}
        <h2 class = "box" style={{
        paddingRight: '1.5em',
      width: '50px',
        textAlign: 'left'}}
        > {this.state.foodLevel}  </h2>
        <div class = "box" 
        style={{
        width: this.state.f1 + 'px', // `${v}px`
        height: '35px',
        textalign: 'right',
        backgroundColor: c1,
        marginLeft: '0.75em'
        }}
        > </div>
        <div class = "box" 
        style={{
        width: (this.state.full - this.state.f1 ) + 'px', // `${v}px`
        }}
        > </div>

        <h2 class = "box" 
        > Сытость </h2>
        </div>
        <div class="two" 
        style={{height: '35px'}}
        ></div>

        <div >
        <h2 class = "box" style={{
        paddingRight: '1.5em',
      width: '50px',
      textAlign: 'left'}}
        > {this.state.playLevel} </h2>
        <div class = "box"
         style={{
        width: this.state.p1 +'px', // `${v}px`
        height: '35px',
        backgroundColor: c2,
        marginLeft: '0.75em'
        }}> </div>
        <div class = "box" 
        style={{
        width: (this.state.full - this.state.p1) +'px',
        height: '35px',
        }}
        > </div>
        <h2 class = "box"
        > Счастье </h2> 
        </div>

        <div class="two" style={{height: '35px'}}></div>

        <div >
        <h2 class = "box" style={{
        paddingRight: '1.5em',
        width: '50px',
        textAlign: 'left'}}
        > {this.state.sleepLevel} </h2>
        <div class = "box" 
        style={{
        width: this.state.s1+'px', // `${v}px`
        height: '35px',
        backgroundColor: c3,
        marginLeft: '0.75em'
        }}> </div>

        <div class = "box" 
        style={{
        width: (this.state.full - this.state.s1) +'px',
        height: '35px',
        }}
        > </div>

        <h2 class = "box"
        > Бодрость </h2>

        </div >

        </div>
        </Col>
        </Row>
        <Row> <div style={{
        width:  '20px',
        height: '20px',
        }}>

          </div></Row>
        
        <Row>
          <div style={{
        width:  '200px',
        height: '200px',
        }}>

          </div>
        </Row>
        </Container>
      </div>
    )
  }
}