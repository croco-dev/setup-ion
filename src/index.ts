import { downloadTool, extractTar } from "@actions/tool-cache";
import { existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { getBinaryName } from "./getBinaryName";
import { addPath, getInput } from "@actions/core";
import { getLatestVersion } from "./getLatestVersion";

const ionPath = "/usr/local/bin/ion";

if (!process.env.RUNNER_TEMP) {
  process.env.RUNNER_TEMP = tmpdir();
}

async function main(): Promise<void> {
  console.log("existsSync(ionPath)", existsSync(ionPath));
  if (existsSync(ionPath)) {
    return;
  }
  const rawVersion = getInput("version") || "latest";
  const latestVersion = await getLatestVersion();
  const version = rawVersion === "latest" ? latestVersion : rawVersion;
  const os = getInput("os") || process.platform;
  const arch = getInput("arch") || process.arch;
  const filename = `sst-${getBinaryName(os, arch)}.tar.gz`;
  const url = `https://github.com/sst/ion/releases/download/${version}/${filename}`;
  const tarPath = await downloadTool(url).catch(() => null);
  if (!tarPath) {
    throw new Error(`Failed to download ${url}`);
  }
  const extractedTarPath = await extractTar(tarPath);
  addPath(extractedTarPath);
}

main();