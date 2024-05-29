export function getBinaryName(os: string, arch: string): string {
  if (os === "linux") {
    if (arch === "x64") {
      return "linux-x86_64";
    }
    if (arch === "arm64" || arch === "aarch64") {
      return "linux-arm64";
    }
  }
  if (os === "darwin" || os === "macos") {
    if (arch === "x64") {
      return "mac-x86_64";
    }
    if (arch === "arm64") {
      return "mac-arm64";
    }

  }

  throw new Error(`Unsupported OS: ${os} ${arch}`);
}