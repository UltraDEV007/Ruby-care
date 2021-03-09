import { useState } from "react";
// https://stackoverflow.com/questions/53146795/react-usereducer-async-data-fetch

export default function useAsyncReducer(reducer, initState) {
  const [state, setState] = useState(initState),
    dispatch = async (action) => setState(await reducer(state, action));
  return [state, dispatch];
}
