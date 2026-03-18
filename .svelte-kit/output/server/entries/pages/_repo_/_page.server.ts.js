import { b as private_env } from "../../../chunks/shared-server.js";
import { c as convertGhResponse } from "../../../chunks/attributes.js";
import { c as config } from "../../../chunks/config.js";
async function fetchRepoDetails(owner, repo, fetchFn, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  const response = await fetchFn(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch repo details: ${response.status} ${response.statusText}`);
  }
  return convertGhResponse(await response.json());
}
async function fetchReadme(owner, repo, fetchFn, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const headers = {
    Accept: "application/vnd.github.v3.raw",
    ...token ? { Authorization: `token ${token}` } : {}
  };
  const response = await fetchFn(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed to fetch README: ${response.status} ${response.statusText}`);
  }
  return await response.text();
}
function findRepoMeta(repoName, projects) {
  return projects.find((p) => p.name === repoName);
}
const prerender = true;
async function load({
  params,
  fetch
}) {
  const { repo } = params;
  const githubUser = config.githubUser;
  const githubToken = private_env.GITHUB_TOKEN;
  const repoDetails = await fetchRepoDetails(githubUser, repo, fetch, githubToken);
  const readme = await fetchReadme(githubUser, repo, fetch, githubToken).catch(() => "");
  const meta = findRepoMeta(repo, config.projects) || {};
  return { repoDetails, readme, meta };
}
export {
  load,
  prerender
};
