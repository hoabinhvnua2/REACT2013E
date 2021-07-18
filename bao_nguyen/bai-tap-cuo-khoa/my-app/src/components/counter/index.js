import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { tang, giam } from "../../redux/constants/count";

const Count = () => {
  const state = useSelector((state) => state.Count);

  // console.log(state.count);

  const dispatch = useDispatch();
  return (
    <div>
      {/* <p>{state.count}</p> */}
      <button onClick={() => dispatch(tang())}>+</button>
      <button onClick={() => dispatch(giam())}>-</button>
    </div>
  );
};
// const Count = () => {
//   const state = useSelector((state) => state.Name);

//   const dispatch = useDispatch();
//   return (
//     <div>
//       <p>{state.tuoi}</p>
//       <button onClick={() => dispatch(tangTuoi())}>+</button>
//       <button onClick={() => dispatch(giamTuoi())}>-</button>
//     </div>
//   );
// };

export default Count;
