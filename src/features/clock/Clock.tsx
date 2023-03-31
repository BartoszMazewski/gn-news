import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { clockActions } from "./clockSlice";

const Clock = () => {
  const dispatch = useDispatch();
  const {currentTime} = useSelector((state:RootState) => state.clock)

  useEffect(()=> {
    setInterval(() => dispatch(clockActions.setTime()), 100)
  },[dispatch])

  return (
    <>
    {currentTime}
    </>
  )
}

export default Clock;