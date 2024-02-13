import { useState } from "react";

export const useAlert = () => {
  const [alert, setAlert] = useState({});

  return { alert, setAlert };
};
