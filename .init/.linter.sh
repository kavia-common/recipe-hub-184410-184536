#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-hub-184410-184536/recipe_app_frontend
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
 if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

