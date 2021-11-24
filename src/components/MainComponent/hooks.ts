import { useDispatch, useSelector } from "react-redux";
import { getAllVesselData } from "../../actions/app";
import { RootState } from "../../reducers";

export const useStateSelector = () => ({
  allVesselsData: useSelector((state: RootState) => state.app.allVesselsData),
});

export const useActionDispatch = () => {
  const dispatch = useDispatch();
  return {
    getAllVesselData: () => dispatch(getAllVesselData()),
  };
};
