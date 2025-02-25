import React, { useEffect, useState } from 'react';

const userCache: Record<string, GitHubUser> = {};

const isValidUserData = (data: any): boolean => {
	return data && data.id && data.login && data.avatar_url;
};

const Profile: React.FC<{ username: string }> = ({ username }) => {
	const [user, setUser] = useState<GitHubUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUserData = async () => {
			setLoading(true);
			setError(null);

			// Check if data is already in the cache
			if (userCache[username]) {
				console.log(`Cache hit for user: ${username}`);
				setUser(userCache[username]);
				setLoading(false);
				return;
			}

			try {
				console.log(`Fetching user data for ${username}`);
				const response = await fetch(`https://api.github.com/users/${username}`);
				if (!response.ok) {
					throw new Error('Error fetching profile! Check the console for more information.');
				}

				const data: GitHubUser = await response.json();

				// Validate the user data
				if (isValidUserData(data)) {
					// Store valid data in cache
					userCache[username] = data;
					setUser(data);
				} else {
					throw new Error('Invalid user data received.');
				}
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUserData();
	}, [username]);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div className="profile">
			<div className="row">
				<img className="profile-avatar" src={user?.avatar_url} alt={`${user?.login}'s avatar`} />
				<h2 className="profile-name">{user?.name || user?.login}</h2>
			</div>
		</div>
	);
};

export default Profile;