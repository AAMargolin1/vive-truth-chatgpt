#!/bin/bash

# Script to generate a snapshot of the project codebase

# Define the output file relative to the script's location initially,
# but we'll actually save it in the project root for easier access.
# Or, even better, save it in a dedicated 'output' or 'snapshots' folder.

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# Go one level up to the project root from the utils directory
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
# Define an output directory within the project root
OUTPUT_DIR="${PROJECT_ROOT}/codebase_snapshots"
OUTPUT_FILENAME="project_codebase_$(date +%Y%m%d_%H%M%S).txt"
OUTPUT_FILE="${OUTPUT_DIR}/${OUTPUT_FILENAME}"

# Create the output directory if it doesn't exist
mkdir -p "${OUTPUT_DIR}"

echo "Generating codebase snapshot..."
echo "Output will be saved to: ${OUTPUT_FILE}"

{
  echo "PROJECT CODEBASE SNAPSHOT"
  echo "========================="
  echo "Timestamp: $(date)"
  echo "Project Root: ${PROJECT_ROOT}"
  echo ""
  # Find files from the PROJECT_ROOT
  find "${PROJECT_ROOT}" -type f \
    -not -path "${PROJECT_ROOT}/node_modules/*" \
    -not -path "${PROJECT_ROOT}/.git/*" \
    -not -path "${PROJECT_ROOT}/.next/*" \
    -not -path "${PROJECT_ROOT}/.DS_Store" \
    -not -path "${PROJECT_ROOT}/utils/*" \
    -not -path "${PROJECT_ROOT}/codebase_snapshots/*" \
    -not -name "*.ico" \
    -not -name "*.png" \
    -not -name "*.jpg" \
    -not -name "*.jpeg" \
    -not -name "*.svg" \
    -not -name "package-lock.json" \
    -print0 |
  while IFS= read -r -d $'\0' file; do
    # Get the relative path from the project root for cleaner headers
    relative_file_path="${file#${PROJECT_ROOT}/}"
    echo ""
    echo "--- File: ${relative_file_path} ---"
    echo "--------------------------------------------------"
    cat "${file}"
    echo ""
    echo "--- End of File: ${relative_file_path} ---"
    echo "--------------------------------------------------"
  done
} > "${OUTPUT_FILE}"

echo "Project codebase snapshot has been successfully written to ${OUTPUT_FILE}"
