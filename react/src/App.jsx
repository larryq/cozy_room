import { useState } from "react";
import Scene from "./Scene";
import Loader from "./Loader";

function App() {
  const [ready, setReady] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* {!ready && <Loader />}
      {ready && <Scene onLoaded={() => setReady(true)} />} */}
      <Scene />
    </div>
  );
}

export default App;
