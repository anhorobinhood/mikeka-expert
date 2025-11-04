const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const ghpages = require('gh-pages');

// Helper function to execute shell commands
function runCommand(command, description) {
  return new Promise((resolve, reject) => {
    console.log(`Starting: ${description}`);
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error during ${description}:`, error.message);
        reject(error);
      } else {
        console.log(`Success: ${description}`);
        console.log(stdout);
        resolve();
      }
    });
  });
}

(async () => {
  try {
    // Step 1: Build the Vite project
    await runCommand('npm run build', 'building the Vite project');

    // Step 2: Check if dist/ folder exists
    const distPath = path.resolve(__dirname, 'dist');
    if (!fs.existsSync(distPath)) {
      throw new Error('dist/ folder does not exist. Build step might have failed.');
    }

    // Step 3: Deploy to gh-pages branch
    console.log('Starting: Deploying to gh-pages branch');
    ghpages.publish(distPath, (err) => {
      if (err) {
        console.error('Error during deployment:', err.message);
        process.exit(1);
      } else {
        console.log('Success: Deployed to gh-pages branch');
      }
    });
  } catch (error) {
    console.error('Deployment failed:', error.message);
    process.exit(1);
  }
})();