import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./QuickBoxTicket.module.scss";
import { useFirestore }  from "~/hooks";
import { db } from "~/firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import Select from "../Select";

const cx = classNames.bind(styles);
function QBInner() {
  const films = useFirestore("films");
  const [cine, setCine] = useState([]);
  const [days, setDays] = useState([]);
  const [times, setTimes] = useState({});
  const [showtime, setShowtime] = useState([]);
  const [filmLabel, setFilmLabel] = useState("Chọn phim");
  const [cineLabel, setcineLabel] = useState("Chọn rạp");
  const [timesLabel, settimesLabel] = useState("Chọn ngày");
  const [suatsLabel, setsuatsLabel] = useState("Chọn suất");

  const pickCinemas = (film) => {
    const filmUserPick = films.find((item) => film === item.vnTit);
    onSnapshot(collection(db, `/films/${filmUserPick.id}/cinema`), (snap) => {
      const cinemas = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCine(cinemas);
    });
    setFilmLabel(film)
  };
  const pickSession = (cineName) => {
    const cineUserPick = cine.find((cine) => cineName === cine.id);
    const keysTime = Object.keys(cineUserPick.day);
    setDays(keysTime);
    setTimes(cineUserPick);
    setcineLabel(cineName)
  };
  const pickTime = (value) => {
    setShowtime(times.day[value]);
    settimesLabel(value)
  };
  return (
    <>
      <Select label={filmLabel} onChange={(e) => pickCinemas(e.target.value)}>
        <option className={cx("fistOption")}></option>
        {films.map((film, index) => (
          <option key={index}>{film.vnTit}</option>
        ))}
      </Select>
      <Select label={cineLabel} onChange={(e) => pickSession(e.target.value)}>
        {cine &&
          cine.map((cine, index) => <option key={index}>{cine.id}</option>)}
      </Select>
      <Select label={timesLabel} onChange={(e) => pickTime(e.target.value)}>
        {days.map((day, index) => (
          <option key={index}>{day}</option>
        ))}
      </Select>
      <Select label={suatsLabel}>
        {showtime.map((suat, index) => (
          <option key={index} onChange={(e) => setsuatsLabel(e.target.value)}>
            {suat}
          </option>
        ))}
      </Select>
    </>
  );
}

export default QBInner;
