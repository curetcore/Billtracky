#!/bin/bash

# Billtracky - Test Docker Build Script

echo "🚀 Billtracky - Testing Docker Build"
echo "===================================="
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
  echo -e "${RED}❌ Error: Docker is not running${NC}"
  exit 1
fi

echo -e "${GREEN}✅ Docker is running${NC}"
echo ""

# Clean previous builds
echo "🧹 Cleaning previous builds..."
docker rmi billtracky:test 2>/dev/null || true
echo ""

# Build Docker image
echo "🏗️  Building Docker image..."
docker build -t billtracky:test . || {
  echo -e "${RED}❌ Docker build failed${NC}"
  exit 1
}

echo ""
echo -e "${GREEN}✅ Docker build successful!${NC}"
echo ""

# Show image info
echo "📦 Image Info:"
docker images billtracky:test --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
echo ""

echo -e "${GREEN}✅ Build test completed successfully!${NC}"
echo ""
echo "Next steps:"
echo "  1. Test locally: docker run -p 3000:3000 billtracky:test"
echo "  2. Deploy to Easypanel"
echo ""

