import { FC } from "react";
import { VesselData } from "../../models";
import { GlobalSettingsContext } from "../MainComponent";
import "./index.css";

interface Props {
  vessel: VesselData;
}

export const VesselItemComponent: FC<Props> = ({ vessel }) => {
  return (
    <div className="vessel-item-component">
      <div id="DefaultInfo">
        <div className="inlineDefaultInfo">{vessel.ID}</div>
        <div className="inlineDefaultInfo">{vessel.Name}</div>
        <div className="inlineDefaultInfo">{vessel.ChristianName}</div>
      </div>
      <GlobalSettingsContext.Consumer>
        {(context) =>
          context.showDetails ? (
            <div id="DetailedInfo">
              <div className="inlineDetailedInfo">{vessel.Details.Type}</div>
              <div className="inlineDetailedInfo">
                {vessel.Details.IMONumber}
              </div>
            </div>
          ) : (
            ""
          )
        }
      </GlobalSettingsContext.Consumer>
    </div>
  );
};
