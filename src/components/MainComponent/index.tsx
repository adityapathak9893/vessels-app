import React, { FC, useEffect, useState } from "react";
import { LoadingIndicator } from "../loadingIndicator";
import { VesselListComponent } from "../VesselListComponent";
import { useActionDispatch, useStateSelector } from "./hooks";
import "./index.css";

export const GlobalSettingsContext = React.createContext({
  showDetails: false,
});

export const MainComponent: FC = () => {
  const { allVesselsData } = useStateSelector();
  const { getAllVesselData } = useActionDispatch();

  const [showDetails, setShowDetails] = useState({
    showDetails: false,
  });

  useEffect(() => {
    getAllVesselData();
  }, []);

  const toggleDetails = () => {
    setShowDetails({
      showDetails: !showDetails.showDetails,
    });
  };

  return (
    <div id="App">
      <h1>Hi, this is a Interview Challenge!</h1>
      <button onClick={toggleDetails}>Show Details</button>
      {allVesselsData.length > 0 ? (
        <GlobalSettingsContext.Provider value={showDetails}>
          <VesselListComponent />
        </GlobalSettingsContext.Provider>
      ) : (
        <div id="loadingWrapper">
          <LoadingIndicator />
        </div>
      )}
    </div>
  );
};
