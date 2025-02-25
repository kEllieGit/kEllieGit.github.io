import React from 'react';
import SnowfallEffect from './Snowfall';
import { useLocation } from "react-router-dom";

export const SeasonManager: React.FC = () => {
    const location = useLocation();
    
    enum Season {
        Spring,
        Summer,
        Fall,
        Winter
    }

    /**
    * Returns the currently active season.
    */
    const getSeason = (): Season => {
        const month = new Date().getMonth();

        switch (true) {
            case month >= 2 && month <= 4:
                return Season.Spring;
            case month >= 5 && month <= 7:
                return Season.Summer;
            case month >= 8 && month <= 10:
                return Season.Fall;
            default:
                return Season.Winter;
        }
    };

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
