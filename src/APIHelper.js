import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";

export async function createUser(UserId, SberId, name, foodLevel, sleepLevel, playLevel, timeOfExit, sec, min, hour) {
  const { data: answer } = await axios.post(API_URL + "user/", {
    UserId: UserId,
    SberId: SberId,
    name: name,
    foodLevel: foodLevel,
    sleepLevel: sleepLevel,
    playLevel: playLevel,
    timeOfExit: timeOfExit,
    sec: sec,
    min: min,
    hour: hour,
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
    name: name,
    foodLevel: foodLevel,
    playLevel: playLevel,
    sleepLevel: sleepLevel,
    timeOfExit: timeOfExit,
    sec: sec,
    min: min,
    hour: hour
  });
}
