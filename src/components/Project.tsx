import React, { useState, useEffect, memo } from 'react';
import { checkRateLimit, GitHubRepository } from '../util/Github';

export enum ProjectEnum {
    vnbase = 'SBox-Visual-Novel-Base',
    vnscript = 'vnscript',
    bansystem = 'SBox-BanSystem',
    realtime = 'iood6-realtime',
    timerlib = 'TimerLibrary',
    musicmanager = 'MusicManager',
}

/** In-memory cache with timestamp */
const repositories: Record<string, { data: Partial<GitHubRepository>; timestamp: number }> = {};

const CACHE_EXPIRATION_MS = 86400000; // 1 day expiration

/** Returns whether the provided data is valid repository data */
const isValidRepositoryData = (data: any): boolean => {
    return data && data.id && data.name && data.html_url;
};


const calculateDelay = (remainingRequests: number) => {
    if (remainingRequests > 10) return 0;
    if (remainingRequests > 5) return 5000;
    return 10000; // 10 seconds when remaining requests are low
};

/** Fetches GitHub repository data with rate limit management, caching, and local storage support */
export const fetchGitHubRepositoryData = async (repoName: string): Promise<Partial<GitHubRepository>> => {
    // Check cache validity (including Local Storage)
    const cachedData = loadFromLocalStorage(repoName);
    if (cachedData) {
        console.log(`Local storage cache hit for ${repoName}`);
        repositories[repoName] = cachedData;
        return cachedData.data;
    }
    if (repositories[repoName] && !isCacheExpired(repoName)) {
        console.log(`Memory cache hit for ${repoName}`);
        return repositories[repoName].data;
    }

    try {
        const remainingRequests = await checkRateLimit();
        await new Promise(resolve => setTimeout(resolve, calculateDelay(remainingRequests)));

        const response = await fetch(`https://api.github.com/repos/kEllieGit/${repoName}`);
        if (!response.ok) throw new Error(`Failed to fetch project data: ${response.statusText}`);
        const data = await response.json();

        const projectData: Partial<GitHubRepository> = {
            id: data.id,
            name: data.name,
            full_name: data.full_name,
            html_url: data.html_url,
            description: data.description,
            created_at: data.created_at,
            updated_at: data.updated_at,
            pushed_at: data.pushed_at,
            stargazers_count: data.stargazers_count,
            watchers_count: data.watchers_count,
            language: data.language,
            forks_count: data.forks_count,
            open_issues_count: data.open_issues_count,
            license: data.license ? { name: data.license.name, url: data.license.url } : null,
            topics: data.topics,
        };

        // Validate and cache in memory and local storage
        if (isValidRepositoryData(projectData)) {
            repositories[repoName] = { data: projectData, timestamp: Date.now() };
            saveToLocalStorage(repoName, repositories[repoName]);
        } else {
            console.warn("Invalid project data, not caching.");
        }

        return projectData;
    } catch (error) {
        console.error("Error fetching GitHub project data:", error);
        return {};
    }
};

/** Utility functions for local storage management */
const loadFromLocalStorage = (repoName: string) => {
    const cachedData = localStorage.getItem(repoName);
    return cachedData ? JSON.parse(cachedData) : null;
};

const saveToLocalStorage = (repoName: string, data: any) => {
    localStorage.setItem(repoName, JSON.stringify(data));
};

const isCacheExpired = (repoName: string) => {
    const entry = repositories[repoName];
    return !entry || (Date.now() - entry.timestamp) > CACHE_EXPIRATION_MS;
};

const Project: React.FC<{ name: ProjectEnum }> = memo(({ name }) => {
    const [project, setProject] = useState<Partial<GitHubRepository>>({});
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchGitHubRepositoryData(name);
                setProject(data);
                setError(null); // Clear any previous errors on successful fetch
            } catch (err) {
                setError("Failed to load project data.");
            }
        };

        fetchData();
    }, [name]);

    const openRepository = () => {
        if (project.html_url) {
            window.open(project.html_url);
        }
    };

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className='project'>
            <h2 className='project-name'>{project.name || 'Loading...'}</h2>
            <p>{project.description || 'No description available'}</p>
            <div className='row'>
                <div className='info-row'>
                    <div className='stars'>
                        <img className='star' src='/images/star.svg' alt='Stars' />
                        <p className='count'>{project.stargazers_count ?? 0}</p>
                    </div>
                    <p className='language'>{project.language}</p>
                </div>
                {project.topics && project.topics.length > 0 && (
                    <div className='topics'>
                        {project.topics.map((topic: string, index: number) => (
                            <span key={index} className='topic'>
                                {topic}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className='project-buttons'>
                <button className='project-repo-button' onClick={openRepository}>
                    Repository
                </button>
            </div>
        </div>
    );
});

export default Project;
