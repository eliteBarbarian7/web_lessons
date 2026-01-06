#!/usr/bin/env node

import { execSync } from "node:child_process"
execSync("code")

console.log("Hello from my CLI tool!")