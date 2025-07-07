const findEmoji = (projectDescription, defaultEmoji = "*️⃣") => {
  if (!projectDescription) {
    return defaultEmoji;
  }
  const emojiRegex = new RegExp(
    "[🀀-🀯🌀-🗿😀-🙏🚀-🛿🜀-🝿🞀-🟿🠀-🣿🤀-🧿🨀-🩯🩰-🫿☀-⛿✀-➿]",
    "u"
  );
  const match = projectDescription.match(emojiRegex);
  return match ? match[0] : defaultEmoji;
};
const formatTitle = (title) => {
  return title.replace(/[-_]/g, " ");
};
const formatDescription = (description) => {
  if (!description)
    return "";
  const disallowedCharsRegex = /[^a-zA-Z0-9 .,\-+/:(){}\[\]~•Đ]/g;
  return description.replace(disallowedCharsRegex, "");
};
const formatStarCount = (starCount) => {
  if (starCount < 1e3)
    return starCount;
  return `${Math.floor(starCount / 1e3)}k`;
};
const formatLargeNumber = (largeNumber) => {
  return largeNumber.toLocaleString();
};
const formatSize = (sizeKb) => {
  if (sizeKb < 1e3)
    return `${sizeKb} KB`;
  return `${Math.floor(sizeKb / 1e3)} MB`;
};
const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  return `${date.toLocaleString("default", {
    month: "short"
  })}, ${date.getFullYear()}`;
};
const formatTimeAgo = (inputDate) => {
  const seconds = Math.floor(
    ((/* @__PURE__ */ new Date()).getTime() - new Date(inputDate).getTime()) / 1e3
  );
  const intervals = [31536e3, 2592e3, 86400, 3600, 60];
  const intervalNames = ["year", "month", "day", "hour", "minute"];
  for (let i = 0; i < intervals.length; i++) {
    const interval = Math.floor(seconds / intervals[i]);
    if (interval >= 1) {
      return `${interval} ${intervalNames[i]}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return `${Math.floor(seconds)} seconds ago`;
};
const convertGhResponse = (ghRepoData) => {
  return {
    id: ghRepoData.id,
    name: ghRepoData.name,
    user: ghRepoData.owner?.login,
    url: ghRepoData.html_url,
    description: ghRepoData.description || "",
    isFork: ghRepoData.fork,
    createdAt: ghRepoData.created_at,
    updatedAt: ghRepoData.pushed_at,
    homepage: ghRepoData.homepage || "",
    language: ghRepoData.language || "",
    license: ghRepoData.license?.spdx_id || "",
    size: ghRepoData.size,
    stars: ghRepoData.stargazers_count,
    forks: ghRepoData.forks_count,
    issues: ghRepoData.open_issues_count,
    topics: ghRepoData.topics || [],
    archived: ghRepoData.archived,
    has_pages: ghRepoData.has_pages || false
  };
};
export {
  formatSize as a,
  formatDate as b,
  formatTimeAgo as c,
  formatTitle as d,
  formatDescription as e,
  formatLargeNumber as f,
  formatStarCount as g,
  convertGhResponse as h,
  findEmoji as i
};
