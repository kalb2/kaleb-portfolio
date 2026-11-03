# CI workflow (to be enabled)

`github-actions-ci.yml` is the GitHub Actions workflow for this repo: lint, type check, unit tests, build, and Playwright e2e against `next start`, with the Playwright report uploaded as an artifact.

It lives here because the token used to open this PR cannot write to `.github/workflows/` (GitHub requires the `workflow` scope). To turn it on, move it:

```sh
mkdir -p .github/workflows
git mv ci/github-actions-ci.yml .github/workflows/ci.yml
```

Then delete this folder.
