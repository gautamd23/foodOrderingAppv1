
import { useState } from "react";
import { useEffect } from "react";

export default function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(function () {
    window.addEventListener("offline", function () {
      setOnlineStatus(false);
    });
    window.addEventListener("online", function () {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
}
