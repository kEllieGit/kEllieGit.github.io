export enum Season {
    Spring,
    Summer,
    Fall,
    Winter
}

/**
 * Returns the currently active season.
 */
export const getSeason = (): Season => {
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