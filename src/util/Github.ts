/**
 * Check the remaining rate limit
 */
export const checkRateLimit = async () => {
	try {
		const response = await fetch(`https://api.github.com/rate_limit`);
		const data = await response.json();
		return data.rate.remaining;
	} catch (error) {
		console.warn("Rate limit check failed:", error);
		return 60;
	}
};
