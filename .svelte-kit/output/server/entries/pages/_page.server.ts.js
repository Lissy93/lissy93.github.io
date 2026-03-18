import { b as private_env } from "../../chunks/shared-server.js";
import { c as convertGhResponse, d as findEmoji } from "../../chunks/attributes.js";
import { c as config } from "../../chunks/config.js";
const makeProjectList = async (ghResponse) => {
  if (!ghResponse || !Array.isArray(ghResponse)) return [];
  return config.projects.map((project) => {
    const ghRepoData = ghResponse.find(
      (ghProject) => ghProject?.name?.toLocaleLowerCase() === project.name.toLocaleLowerCase()
    ) || {};
    const repoData = convertGhResponse(ghRepoData);
    const computedExtras = {
      emoji: findEmoji(repoData.description),
      title: repoData.name
    };
    return { ...repoData, ...computedExtras, ...project };
  }).sort((a, b) => {
    return (b.stars ?? 0) - (a.stars ?? 0);
  });
};
async function load$1({ fetch }) {
  const githubToken = private_env.GITHUB_TOKEN;
  const githubApiUrl = `https://api.github.com/users/${config.githubUser}/repos?per_page=100`;
  const githubRequest = {
    headers: githubToken ? { Authorization: `Bearer ${githubToken}` } : void 0
  };
  let repos = [];
  let pageUrl = githubApiUrl;
  while (pageUrl) {
    const response = await fetch(pageUrl, githubRequest);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    const newRepos = await response.json();
    repos = repos.concat(newRepos);
    const linkHeader = response.headers.get("Link");
    if (linkHeader) {
      const matches = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
      pageUrl = matches ? matches[1] : null;
    } else {
      pageUrl = null;
    }
  }
  return { repos: await makeProjectList(repos) };
}
const prerender = true;
const load = load$1;
export {
  load,
  prerender
};
