import { useEffect, useState } from "react";
import Audi from "./components/audi";
import Benz from "./components/mercedes";
import Ferrari from "./components/ferrari";

export default function App() {
  const [car, setCar] = useState("selectDreamCar");

  const [ferrariContentVisible, setFerrariContentVisible] = useState(false);
  const [benzContentVisible, setBenzContentVisible] = useState(false);
  const [audiContentVisible, setAudiContentVisible] = useState(false);

  useEffect(() => {
    car === "ferrari"
      ? setFerrariContentVisible(true)
      : setFerrariContentVisible(false);
    car === "benz" ? setBenzContentVisible(true) : setBenzContentVisible(false);
    car === "audi" ? setAudiContentVisible(true) : setAudiContentVisible(false);
  }, [car]);

  const handleOnChange = (e: any) => {
    setCar(e.target.value);
  };

  const makeFirstLetterCapital = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    car === "selectDreamCar"
      ? (result = "select your dream car")
      : (result = makeFirstLetterCapital(car));
    return result;
  };

  return (
    <div className="container mt-3">
      <div>
        <h1>Hello {renderResult()}</h1>
      </div>
      <div className="mt-4">
        <select className="form-select" value={car} onChange={handleOnChange}>
          <option value="selectDreamCar">Select your dream car</option>
          <option value="ferrari">Ferrari</option>
          <option value="benz">Benz</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      {ferrariContentVisible && <Ferrari />}
      {benzContentVisible && <Benz />}
      {audiContentVisible && <Audi />}
    </div>
  );
}
