import { G as GITHUB_TOKEN } from "../../../chunks/private.js";
import { h as convertGhResponse } from "../../../chunks/attributes.js";
import { c as config } from "../../../chunks/config.js";
async function fetchRepoDetails(owner, repo, fetchFn, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = token ? { Authorization: `token ${token}` } : {};
  try {
    const response = await fetchFn(url, { headers });
    if (!response.ok) {
      console.error(`Failed to fetch repo details: ${response.statusText}`);
      return {};
    }
    const json = await response.json();
    return convertGhResponse(json);
  } catch (error) {
    console.error(`Error fetching repo details: ${error.message}`);
    return {};
  }
}
async function fetchReadme(owner, repo, fetchFn, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/readme`;
  const headers = {
    Accept: "application/vnd.github.v3.raw",
    ...token ? { Authorization: `token ${token}` } : {}
  };
  try {
    const response = await fetchFn(url, { headers });
    if (!response.ok) {
      throw new Error(`Error fetching README: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching README: ${error.message}`);
    return "";
  }
}
function findRepoMeta(repoName, projects) {
  return projects.find((p) => p.name === repoName);
}
const prerender = true;
async function load({ params, fetch }) {
  const { repo } = params;
  const githubUser = config.githubUser;
  const repoDetails = await fetchRepoDetails(githubUser, repo, fetch, GITHUB_TOKEN).catch((error) => {
    console.error(`Error fetching repo details: ${error.message}`);
    return {};
  });
  const readme = await fetchReadme(githubUser, repo, fetch, GITHUB_TOKEN).catch((error) => {
    console.error(`Error fetching README: ${error.message}`);
    return "";
  });
  const meta = findRepoMeta(repo, config.projects) || {};
  return { repoDetails, readme, meta };
}
export {
  load,
  prerender
};
