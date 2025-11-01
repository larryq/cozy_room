import { useEffect, useState } from "react";
import "./styles/loader.css";

export default function Loader() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setFade((f) => !f), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader ${fade ? "fade-in" : "fade-out"}`}>
      <img src="/assets/cozy_room.png" alt="Loading room" />
    </div>
  );
}
