import { useState } from "react";
import { Pannellum } from "pannellum-react";

import HomePano from "../images/home_pano.jfif";
import HomePanoMusic from "../images/home_pano_music.jfif";
import Work from "./Work";

const Home = () => {
  const [currentScene, setCurrentScene] = useState(HomePano);

  return (
    <>
      <div className="h-screen flex justify-center">
        <Pannellum
          width="100%"
          height="100%"
          image={currentScene}
          yaw={300}
          hfov={110}
          autoLoad
          autoRotate={false}
          compass={false}
          showZoomCtrl={false}
          mouseZoom={false}
          onLoad={() => {
            console.log("panorama loaded");
          }}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={-10}
            yaw={-120}
            handleClick={(evt, name) =>
              setCurrentScene(
                currentScene !== HomePano ? HomePano : HomePanoMusic
              )
            }
          />
        </Pannellum>
        <Work />
      </div>
    </>
  );
};

export default Home;
