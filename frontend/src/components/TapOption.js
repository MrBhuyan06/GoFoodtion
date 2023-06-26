import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const tabs = [
  {
    id: 0,
    name: "Dinning Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    backdrop: "#E5F3",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 1,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    backdrop: "#EDf4FF",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];
import TapListFeature from "./TapListFeature.js";

const TapOption = () => {
  const [activeconfig, setActiveconfig] = useState({
    dinning: "",
    nightlife: "",
  });
  return (
    <div className="tap-option container  mx-auto p-4 flex items-center justify-center gap-4   ">
      {/* {tabs.map((tab, i) => {
        return (
          <Link to={`/body/${tab.id}`} key={i}>
            <TapListFeature
              setActive={() => {
                setActiveconfig(tab.name);
              }}
              activeconfig={tab.name}
              {...tab}
            />
          </Link>
        );
      })} */}
      <Link to={`/booking/${tabs[0].name}`}>
        <TapListFeature
          {...tabs[0]}
          activeconfig={activeconfig.dinning}
          setActiveconfig={() => {
            setActiveconfig({
              dinning: "Dinning Out",
              nightlife: "",
            });
          }}
        />
      </Link>
      <Link to={`/booking/${tabs[1].name}`}>
        <TapListFeature
          {...tabs[1]}
          activeconfig={activeconfig.nightlife}
          setActiveconfig={() => {
            setActiveconfig({
              dinning: "",
              nightlife: "Nightlife",
            });
          }}
        />
      </Link>
    </div>
  );
};

export default TapOption;
