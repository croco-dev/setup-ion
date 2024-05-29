const api = "https://api.github.com/repos/sst/ion/releases/latest";

export async function getLatestVersion() {
  const response = await fetch(api);
  const data = await response.json() as any;

  return data?.name;
}