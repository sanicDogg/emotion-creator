import { useEffect } from "react";
import { Button } from "../Button/Button";

const URL = process.env.REACT_APP_API_URL;

export const Homepage = () => {
  const isLoading = false;

  useEffect(() => {
    console.log(URL)
    fetch(`${URL}/init-session`)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Button text={"Create emotion"}/>
      {isLoading ? <h1>loading</h1> : null}
    </>
  )
}