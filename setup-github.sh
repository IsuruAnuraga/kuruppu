#!/bin/bash
# Script to set up GitHub repository for Kuruppu

echo "Setting up GitHub repository 'Kuruppu'..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
    git branch -M main
fi

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo "Remote 'origin' already exists. Updating..."
    git remote set-url origin https://github.com/IsuruAnuraga/Kuruppu.git
else
    echo "Adding remote 'origin'..."
    git remote add origin https://github.com/IsuruAnuraga/Kuruppu.git
fi

echo ""
echo "GitHub repository configured!"
echo ""
echo "Next steps:"
echo "1. Create the repository 'Kuruppu' on GitHub (https://github.com/new)"
echo "2. Run: git add ."
echo "3. Run: git commit -m 'Initial commit'"
echo "4. Run: git push -u origin main"
echo ""
echo "To verify remote:"
echo "  git remote -v"

