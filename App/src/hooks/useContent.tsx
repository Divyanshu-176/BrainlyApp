import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";



export function useContent() {
  const [contents, setContents] = useState([]);

  async function fetch() {
    const response = await axios.get(`${BACKEND_URL}/api/content`, {
      headers: {
        Authorization: localStorage.getItem("authorization"),
      },
    });
    setContents(response.data.content);
  }

  useEffect(() => {
    fetch();
  }, []);

  return { contents, fetch };
}
