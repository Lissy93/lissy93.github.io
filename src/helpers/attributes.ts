import type { GitHubRepository, Project } from '../types/Project';

export const findEmoji = (
	projectDescription: string | undefined,
	defaultEmoji: string = '*️⃣'
): string => {
	// If there's no description, return the default emoji
	if (!projectDescription) {
		return defaultEmoji;
	}

	// Regular expression to match emojis
	const emojiRegex = new RegExp(
		'[\u{1F000}-\u{1F02F}\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}' +
			'\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}' +
			'\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}' +
			'\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]',
		'u'
	);

	// Find the first emoji in the string
	const match = projectDescription.match(emojiRegex);

	// Return the first-found emoji if it exists, otherwise use the default
	return match ? match[0] : defaultEmoji;
};

export const formatTitle = (title: string): string => {
	return title.replace(/[-_]/g, ' ');
};

export const formatDescription = (description: string | undefined) => {
	if (!description) return '';
	// Regular expression to match disallowed characters
	const disallowedCharsRegex = /[^a-zA-Z0-9 .,\-+/:(){}[\]~•Đ]/g;
	// Replace disallowed characters with an empty string
	return description.replace(disallowedCharsRegex, '');
};

export const formatStarCount = (starCount: number) => {
	if (starCount < 1000) return starCount;
	return `${Math.floor(starCount / 1000)}k`;
};

export const formatLargeNumber = (largeNumber: number) => {
	return largeNumber.toLocaleString();
};

export const formatSize = (sizeKb: number) => {
	if (sizeKb < 1000) return `${sizeKb} KB`;
	return `${Math.floor(sizeKb / 1000)} MB`;
};

export const formatDate = (inputDate: string): string => {
	const date = new Date(inputDate);
	return `${date.toLocaleString('default', {
		month: 'short'
	})}, ${date.getFullYear()}`;
};

export const formatTimeAgo = (inputDate: string) => {
	const seconds = Math.floor((new Date().getTime() - new Date(inputDate).getTime()) / 1000);
	const intervals = [31536000, 2592000, 86400, 3600, 60];
	const intervalNames = ['year', 'month', 'day', 'hour', 'minute'];
	for (let i = 0; i < intervals.length; i++) {
		const interval = Math.floor(seconds / intervals[i]);
		if (interval >= 1) {
			return `${interval} ${intervalNames[i]}${interval > 1 ? 's' : ''} ago`;
		}
	}
	return `${Math.floor(seconds)} seconds ago`;
};

export const convertGhResponse = (ghRepoData: GitHubRepository): Project => {
	return {
		id: ghRepoData.id,
		name: ghRepoData.name,
		user: ghRepoData.owner?.login,
		url: ghRepoData.html_url,
		description: ghRepoData.description || '',
		isFork: ghRepoData.fork,
		createdAt: ghRepoData.created_at,
		updatedAt: ghRepoData.pushed_at,
		homepage: ghRepoData.homepage || '',
		language: ghRepoData.language || '',
		license: ghRepoData.license?.spdx_id || '',
		size: ghRepoData.size,
		stars: ghRepoData.stargazers_count,
		forks: ghRepoData.forks_count,
		issues: ghRepoData.open_issues_count,
		topics: ghRepoData.topics || [],
		archived: ghRepoData.archived,
		has_pages: ghRepoData.has_pages || false
	};
};
