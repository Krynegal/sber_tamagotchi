import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";
<<<<<<< HEAD
//const API_URL = "https://serene-inlet-82302.herokuapp.com/";

export async function createUser(UserId, name, foodLevel, sleepLevel, playLevel, timeOfExit, sec, min, hour, kusua, flag) {
  const { data: answer } = await axios.post(API_URL + "user/", {
    UserId: UserId,
=======

export async function createUser(UserId, SberId, name, foodLevel, sleepLevel, playLevel, timeOfExit, sec, min, hour) {
  const { data: answer } = await axios.post(API_URL + "user/", {
    UserId: UserId,
    SberId: SberId,
>>>>>>> 2cece1dcef35d671738c5e1dc354a21b0c525ee1
    name: name,
    foodLevel: foodLevel,
    sleepLevel: sleepLevel,
    playLevel: playLevel,
    timeOfExit: timeOfExit,
    sec: sec,
    min: min,
    hour: hour,
<<<<<<< HEAD
    kusua: kusua,
    flag: flag,
=======
>>>>>>> 2cece1dcef35d671738c5e1dc354a21b0c525ee1
  });
  return answer;
}

export async function getUser(UserId) {
  const { data: answer } = await axios.get(API_URL + "user/", {
    params: {
      UserId: UserId,
    },
  });
  return answer;
}

<<<<<<< HEAD
export async function updateUser(UserId,
  name,
  foodLevel,
  playLevel,
  sleepLevel,
  timeOfExit,
  sec,
  min,
  hour,
  kusua,
  flag) {
    const body = {
      UserId,
      name,
  foodLevel,
  playLevel,
  sleepLevel,
  timeOfExit,
  sec,
  min,
  hour,
  kusua,
  flag
    };
    console.log('body:', body);
  await axios.put(API_URL + "user/", {
    UserId: UserId,
=======
//обновление времени выхода
export async function updateUser(UserId, name, foodLevel, playLevel, sleepLevel, timeOfExit, sec, min, hour) {
  const body = {
      UserId,
      name,
      foodLevel,
      playLevel, 
      sleepLevel, 
      timeOfExit,
      sec, 
      min, 
      hour,
    };
  console.log('body:', body);
  await axios.put(API_URL + `user/${UserId}`, {
>>>>>>> 2cece1dcef35d671738c5e1dc354a21b0c525ee1
    name: name,
    foodLevel: foodLevel,
    playLevel: playLevel,
    sleepLevel: sleepLevel,
    timeOfExit: timeOfExit,
    sec: sec,
    min: min,
<<<<<<< HEAD
    hour: hour,
    kusua: kusua,
    flag: flag,
=======
    hour: hour
>>>>>>> 2cece1dcef35d671738c5e1dc354a21b0c525ee1
  });
}
