import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { INIT_PATH } from "../../utils";
import { Button } from "../Button/Button";
import "./homepage.module.css";

export const Homepage = () => {
  const [id, setId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(INIT_PATH)
      .then(res => res.json())
      .then(json => setId(json._id))
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleClick = () => {
    if (id) navigate(`/${id}`);
  }

  return (
    <>
      <p>This app allows you to create a pictures with different emojis and share them to followers or friends 🐸🐸</p>
      <Button clickHandler={handleClick} text={"Create emotion"}/>
    </>
  )
}