import { FC } from "react";
import { VesselItemComponent } from "../vesselItemComponent";
import { useActionDispatch, useStateSelector } from "./hooks";

export const VesselListComponent: FC = () => {
  const { allVesselsData } = useStateSelector();
  return (
    <div>
      {allVesselsData.map((vessel) => {
        return <VesselItemComponent vessel={vessel} />;
      })}
    </div>
  );
};
