import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = '/'
  if (command === 'build' && process.env.GITHUB_REPOSITORY) {
    const [owner, repoName] = process.env.GITHUB_REPOSITORY.split('/');
    // Check if deploying to a project page (e.g., user.github.io/repo-name)
    // and not a user/organization page (e.g., user.github.io)
    if (repoName && repoName !== `${owner}.github.io`) {
      base = `/${repoName}/`
    }
  }

  return {
    plugins: [react()],
    base: base,
  }
})
