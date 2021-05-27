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

import { Container, Row, Col, Button, Radiobox, Tabs, TabItem, Icon} from '@sberdevices/plasma-ui';
import { ToastContainer, toast } from 'react-toastify';
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
      name: "Sbercat",
      s: ``,
      m: ``,
      ch: ``,
      flag: null,
      f: false,
      kusua: null,
    }
    this.Change_img = this.Change_img.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.timer = this.timer.bind(this);
    this.words = this.words.bind(this);
    this.changeFlag = this.changeFlag.bind(this);

  // this.assistant = initializeAssistant(() => this.getStateForAssistant());
  // this.assistant.on("data", (event /*: any*/) => {
  //   if (event.type == "smart_app_data") {
  //     console.log("User");
  //     console.log(event);
  //     console.log('evemt.sub', event.sub);
  //     if (event.sub != undefined) {
  //       console.log("Sub", event.sub);
  //       this.state.UserId = event.sub;
  //       createUser(this.state.UserId, this.state.name, 100, 100, 100, 
  //         new Date(), this.state.sec, this.state.min, this.state.hour, false, true);
  //       getUser(this.state.UserId).then((user) => {
  //         console.log(user);
  //         this.setState({kusua: user["kusua"]});
  //         this.setState({flag: user["flag"]})
  //         this.Change_img();
  //         this.setState({name: user["name"]});
  //         this.setState({foodLevel: user["foodLevel"]});
  //         this.setState({playLevel: user["playLevel"]});
  //         this.setState({sleepLevel: user["sleepLevel"]});
  //         this.didTamagatchiDie(); 
  //         this.setState({sec: user["sec"]});
  //         this.setState({min: user["min"]});
  //         this.setState({hour: user["hour"]});
    
  //         const time = user["timeOfExit"];
  //         const diffTime = this.getTimeDifference(time);
    
  //         this.state.foodLevel = this.state.foodLevel - Math.round(diffTime / 12000);
  //         if (this.state.foodLevel < 0) {this.state.foodLevel = 0}
      
  //         this.state.sleepLevel = this.state.sleepLevel - Math.round(diffTime / 60000);
  //         if (this.state.sleepLevel < 0) {this.state.sleepLevel = 0}
      
  //         this.state.playLevel = this.state.playLevel - Math.round(diffTime / 20000);
  //         if (this.state.playLevel < 0) {this.state.playLevel = 0}
      
  //         this.state.sec = this.state.sec + Math.round((diffTime / 1000) % 60);
  //         this.state.min = this.state.min + Math.round((diffTime / (1000 * 60)) % 60);
  //         this.state.hour = this.state.hour + Math.round((diffTime / (1000 * 60 * 60)) % 24);
  //       })
  //       updateUser(this.state.UserId, 
  //         this.state.name,
  //         this.state.foodLevel, 
  //         this.state.playLevel, 
  //         this.state.sleepLevel,
  //         new Date(),
  //         this.state.sec,
  //         this.state.min,
  //         this.state.hour,
  //         this.state.kusua,
  //         this.state.flag,
  //         );
  //     }
  //   console.log(`assistant.on(data)`, event);
  //   const { action } = event;
  //   this.dispatchAssistantAction(action);
  //   }
  // });
  // this.assistant.on("start", (event) => {
  //   console.log(`assistant.on(start)`, event);
  // });


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
      if ((this.state.min >= 1) || (this.state.our >= 1)){
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
          createUser(this.state.UserId, this.state.name, 100, 100, 100, 
            new Date(), this.state.sec, this.state.min, this.state.hour, false, true);
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
      this.changeColor();
    }, 12000);
    setInterval(() => {
      this.less(2); 
      this.didTamagatchiDie(); 
      this.changeColor();
    }, 60000);
    setInterval(() => {
      this.less(3); 
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
    if ((this.state.foodLevel >= 60)&&(this.state.sleepLevel >= 60)&&(this.state.playLevel >= 60))
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
    if ((this.state.foodLevel >= 60)&&(this.state.sleepLevel >= 60)&&(this.state.playLevel >= 60))
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
    const notify = () => toast.success("Будет доступна через минуту!", {
      position: "bottom-center",
      autoClose: 5000,
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
    } else if ((this.state.min > 1)&&(this.state.min < 5)) {
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
  
  render() {
    console.log('render');
    const f = this.state.foodLevel * 4;
    const p = this.state.playLevel * 4;
    const s = this.state.sleepLevel * 4;
    const c1 = this.state.color1;
    const c2 = this.state.color2;
    const c3 = this.state.color3;
    const tamagotchiName = this.state.name[0].toUpperCase() + this.state.name.slice(1);

    return (
      <div >
        <Container>
        <Row>
            <Col sizeXL={10}><h1> {tamagotchiName} живет {this.state.ch} {this.state.m} {this.state.s} </h1></Col>
        </Row>
        <Row>
            <Col type="calc" size={1} > <img id = "img" src={this.state.logo} class="rounded mx-auto d-block"  style={{width: 400, height:400 }}/>
            </Col>
        </Row>
        <Row>
            <Col sizeXL={10} offset={1}>
            <Tabs
            size='l'
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
        </Tabs>
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
              </Col>
        </Row>
        </Container>
        
        <h1 style={{
        position: 'absolute',
        left: '500px',
        top: '77px',
        }}> {this.state.foodLevel} </h1>

        <div class="rounded" style={{
        position: 'absolute',
        width: f + 'px', // `${v}px`
        left: '570px',
        top: '100px',
        height: '35px',
        backgroundColor: c1,
        }}> </div>

        <h1 style={{
        position: 'absolute',
        left: '1000px',
        top: '77px',
        }}> Сытость </h1>

        <h1 style={{
        position: 'absolute',
        left: '500px',
        top: '177px',
        }}> {this.state.playLevel} </h1>

        <div class="rounded" style={{
        position: 'absolute',
        width: p +'px', // `${v}px`
        left: '570px',
        top: '200px',
        height: '35px',
        backgroundColor: c2,
        }}> </div>

        <h1 style={{
        position: 'absolute',
        left: '1000px',
        top: '177px',
        }}> Счастье </h1>

        <h1 style={{
        position: 'absolute',
        left: '500px',
        top: '277px',
        }}> {this.state.sleepLevel} </h1>

        <div class="rounded" style={{
        position: 'absolute',
        width: s+'px', // `${v}px`
        left: '570px',
        top: '300px',
        height: '35px',
        backgroundColor: c3,
        }}> </div>

        <h1 style={{
        position: 'absolute',
        left: '1000px',
        top: '277px',
        }}> Бодрость </h1>


        <Button
        style={{
          position: 'absolute',
          left: '500px',
          top: '400px',
          }}
        text='Покормить!'
        size='l'
        view='primary'
        pin="square-square"
        onClick={()=>this.Change_img(1)}/>

        <Button
        style={{
          position: 'absolute',
          left: '680px',
          top: '400px',
          }}
        text='Поиграть!'
        size='l'
        view='primary'
        pin="square-square"
        onClick={()=>this.Change_img(2)}/>
        
        <Button
        style={{
          position: 'absolute',
          left: '845px',
          top: '400px',
          }}
        text='Поспать!'
        size='l'
        view='primary'
        pin="square-square"
        onClick={()=>this.Change_img(3)}/>
        
      </div>
    )
  }
}