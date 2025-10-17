import { G as GITHUB_TOKEN } from "../../chunks/private.js";
import { c as convertGhResponse, d as findEmoji } from "../../chunks/attributes.js";
import { c as config } from "../../chunks/config.js";
const makeProjectList = async (ghResponse) => {
  if (!ghResponse || !Array.isArray(ghResponse))
    return [];
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
    return b.stars - a.stars;
  });
};
async function load$1({ fetch }) {
  const githubApiUrl = `https://api.github.com/users/${config.githubUser}/repos?per_page=100`;
  const githubRequest = {
    headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
  };
  let repos = [];
  let pageUrl = githubApiUrl;
  while (pageUrl) {
    const response = await fetch(pageUrl, githubRequest);
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
