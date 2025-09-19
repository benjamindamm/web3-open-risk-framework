#!/bin/bash

# Git History Override Script
# This script completely rewrites the Git history
# WARNING: This will permanently delete all commit history!

set -e

echo "🚨 WARNING: This will completely rewrite Git history!"
echo "📋 Current repository status:"
git status --short
echo ""

read -p "Are you sure you want to delete ALL commit history? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "❌ Operation cancelled."
    exit 1
fi

echo ""
echo "🔄 Starting history override..."

# Create a new orphan branch (no history)
echo "📝 Creating new orphan branch..."
git checkout --orphan temp-branch

# Add all current files
echo "📁 Adding all files..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Web3 Open Risk Framework

- Complete risk catalogue with 129 risks across 8 categories
- 49 indicators for quantitative risk assessment  
- 46 measures for risk mitigation
- 2 assessments for risk evaluation
- Swiss FIDLEG extension for regulatory compliance
- Modular schema system with validation
- PDF generation and Excel export capabilities
- Comprehensive documentation and references

Framework validated and reference-complete."

# Delete the old main branch
echo "🗑️  Deleting old main branch..."
git branch -D main

# Rename current branch to main
echo "🏷️  Renaming branch to main..."
git branch -m main

# Force push to remote (if remote exists)
if git remote get-url origin >/dev/null 2>&1; then
    echo "🚀 Force pushing to remote..."
    git push -f origin main
else
    echo "ℹ️  No remote repository configured."
fi

echo ""
echo "✅ History override completed!"
echo "📊 New repository status:"
git log --oneline -1
echo ""
echo "🎉 Repository now has a clean, single-commit history."