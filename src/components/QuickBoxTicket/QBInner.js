import React, { useState } from "react";
import { useFirestore } from "~/hooks";
import { db } from "~/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import Select from "../Select";
import { getLabel1, getLabel2, getLabel3, getLabel4 } from "~/store/reducer";
import { StoreContext } from "~/store";

function QBInner() {
  const films = useFirestore("films");
  const [cine, setCine] = useState([]);
  const [days, setDays] = useState([]);
  const [times, setTimes] = useState({});
  const [showtime, setShowtime] = useState([]);
  const [ state, dispatch ] = React.useContext(StoreContext)

  const optRef = React.useRef();
  React.useEffect(() => {
    optRef.current.addEventListener("click", function(event){
      event.preventDefault()
    });
  })

  const pickCinemas = (film) => {
    dispatch(getLabel1(film))
    const filmUserPick = films.find((item) => film === item.vnTit);
    onSnapshot(collection(db, `/films/${filmUserPick.id}/cinema`), (snap) => {
      const cinemas = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCine(cinemas);
    });

  };
  const pickSession = (cineName) => {
    dispatch(getLabel2(cineName))
    const cineUserPick = cine.find((cine) => cineName === cine.id);
    const keysTime = Object.keys(cineUserPick.day);
    setDays(keysTime);
    setTimes(cineUserPick);
    
  };
  const pickTime = (value) => {
    setShowtime(times.day[value]);
    dispatch(getLabel3(value))
  };

  return (
    <>
      <Select 
        label={state.label1}
        onChange={(e) => pickCinemas(e.target.value)}>
        <option ref={optRef}></option>
        {films.map((film, index) => (
          <option key={index}>{film.vnTit}</option>
        ))}
      </Select>
      <Select 
        label={state.label2}
        onChange={(e) => pickSession(e.target.value)}>
        {cine && cine.map((cine, index) => 
          <option key={index}>{cine.id}</option>
        )}
      </Select>
      <Select 
        label={state.label3}
        onChange={(e) => pickTime(e.target.value)}>
        {days.map((day, index) => (
          <option key={index}>{day}</option>
        ))}
      </Select>
      <Select 
        label={state.label4}
        onChange={e => dispatch(getLabel4(e.target.value))}>
        {showtime.map((suat, index) => (
          <option key={index}>
            {suat}
          </option>
        ))}
      </Select>
    </>
  );
}

export default QBInner;
