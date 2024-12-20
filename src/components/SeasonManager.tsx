import React from 'react';
import SnowfallEffect from './Snowfall';
import { Season, getSeason } from "../util/Seasons";
import { useLocation } from "react-router-dom";

export const SeasonManager: React.FC = () => {
    const location = useLocation();
    const season: Season = getSeason();

    // Pages where seasonal effects shouldn't play.
    const excludedPaths = ['/about', '/contact', '/projects'];

    // Check if the current path is excluded
    const isExcluded = excludedPaths.includes(location.pathname);

    const getSeasonContent = () => {
        if (isExcluded) {
            return <></>;
        }

        switch (season) {
            case Season.Winter:
                return <SnowfallEffect />;
            default:
                return <></>;
        }
    };

    return (
        <div>
            {getSeasonContent()}
        </div>
    );
};

export default SeasonManager;
