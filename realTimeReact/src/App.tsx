import "./App.css";
import { Puffs } from "@arwes/react";
import { Animator } from '@arwes/react-animator'
import { GridLines, Dots, MovingLines } from '@arwes/react-bgs'
import Card from "./components/Card";
import ConnectionDisplay from "./components/ConnectionDisplay";

function App() {


  return (
    <>
      <Animator active={true} duration={{ enter: 1, interval: 10 }}>
      <div
        style={{
          position: 'absolute',
          display:"grid",
          placeItems:"center",
          inset: 0,
          backgroundColor: '#000906',
          backgroundImage:
            'radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)'
        }}
      >
        <GridLines lineColor="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <Dots color="hsla(180, 100%, 75%, 0.05)" distance={30} />
        <MovingLines lineColor="hsla(180, 100%, 75%, 0.07)" distance={30} sets={20} />
        <Puffs
          color="hsl(60, 75%, 50%, 0.5)"
          quantity={100}
          padding={0}
          xOffset={[10, 50]}
          yOffset={[-20, -80]}
          radiusOffset={[4, 20]}
        />
        <div className="flex flex-col gap-3 justify-center items-center" style={{ position: "relative" }}>
          <Card value={0}/>
          <ConnectionDisplay isConnected={false}/>
          
        </div>


      </div>
    </Animator>
    </>
  );
}

export default App;
