import { useEffect } from "react";
import { Button } from "./components/ui/button";

export default function App() {
  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("API URL:", apiUrl);
  }, []);

  return (
    <div>
      <Button>Hello World</Button>
    </div>
  );
}
