/**
 * GitHub user data from the GitHub API.
 */
export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    public_repos: number;
    followers: number;
    following: number;
    name?: string;
    company?: string;
    blog?: string;
    location?: string;
    email?: string | null;
    bio?: string;
    created_at: string;
    updated_at: string;
}

/**
 * GitHub repository data from the GitHub API.
 */
export interface GitHubRepository {
    id: number;
    name: string;
    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
        html_url: string;
    };
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    open_issues_count: number;
    license: {
        name: string;
        url: string;
    } | null;
    contributors: string[];
    topics: string[];
}

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