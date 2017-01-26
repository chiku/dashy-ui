#/bin/bash

# build.js
#
# Author::    Chirantan Mitra
# Copyright:: Copyright (c) 2017. All rights reserved
# License::   MIT

set -euo pipefail
IFS=$'\n\t'

npm run clean
npm run test
npm run compile
