interface BlogPost {
	title: string;
	date: string;
	filename: string;
	content?: string;
}

/**
 * GitHub user data from the GitHub API.
 */
interface GitHubUser {
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
interface GitHubRepository {
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
