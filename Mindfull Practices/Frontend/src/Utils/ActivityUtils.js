import reading from '../Assets/Images/reading.png';
import meditation from '../Assets/Images/meditation.png';
import challenge from '../Assets/Images/challenge.png';
import dancing from '../Assets/Images/dancing.png';
import food from '../Assets/Images/food.png';
import productivity from '../Assets/Images/productivity.png';
import compassion from '../Assets/Images/compassion.png';
import sleep from '../Assets/Images/sleep.png';
import strength from '../Assets/Images/strength.png';
import praying from '../Assets/Images/praying.png';
import walking from '../Assets/Images/walking.png';
import water from '../Assets/Images/water.png';
import yoga from '../Assets/Images/yoga.png';


export const getActivityLogo= (activityId) =>{
    switch (activityId) {
        case 1: return reading;
        case 2: return meditation;
        case 3: return challenge;
        case 4: return dancing;
        case 5: return food;
        case 6: return productivity;
        case 7: return compassion;
        case 8: return sleep;
        case 9: return strength;
        case 10: return praying;
        case 11: return walking;
        case 12: return water;
        case 13: return yoga;
        default: break;
    }
}

export const getAddActivityLogo= (activityId) =>{
    switch (activityId) {
    
        case 1:  return reading;
        case 2: return meditation;
        case 3: return challenge;
        case 4: return dancing;
        case 6: return productivity;
        case 7: return compassion;
        case 9: return strength;
        case 10: return praying;
        case 11: return walking;
        case 13: return yoga;
        default: break;
    }
}

export const addFavoriteActivity = async (activity)=>{
    try {
    const res = await fetch('http://localhost:9000/useractivity/',{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(activity),
    })
   return await res.json();
    } catch (error) {
      throw new Error("error in post")
    }
      
  }

