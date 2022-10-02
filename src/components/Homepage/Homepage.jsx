import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { INIT_PATH } from "../../utils";
import { Button } from "../Button/Button";

export const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);

    fetch(INIT_PATH)
      .then(res => res.json())
      .then(json => setId(json._id))
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  const handleClick = () => {
    if (id) navigate(`/${id}`);
  }

  return (
    <>
      <Button clickHandler={handleClick} text={"Create emotion"}/>
      {isLoading ? <h1>loading</h1> : null}
    </>
  )
}