# setup-ion

Download, install, and setup [SST ion](https://ion.sst.dev/) in GitHub Actions.

## Usage

```yaml
- uses: croco-dev/setup-ion@v1
  with:
    version: latest
```
## Inputs

| Name       | Description                                 | Default     | Examples  |
| ---------- |---------------------------------------------| ----------- | --------- |
| `version`  | The version of ion to download and install. | `latest`    | `0.0.393` |