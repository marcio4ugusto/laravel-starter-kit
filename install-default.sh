#!/bin/bash

DEFAULT_URL=https://raw.githubusercontent.com/marcio4ugusto/laravel-starter-kit/main/stubs/default

echo "Starting copy files for the starter kit..."

# installing inertia and ziggy
composer require inertiajs/inertia-laravel
composer require tightenco/ziggy

# create the main template
rm resources/views/welcome.blade.php
curl -o ./resources/views/app.blade.php $DEFAULT_URL/resources/views/app.blade.php

# publishing inertia middleware:
php artisan inertia:middleware

# activate the middleware stubs/bootstrap/app.php
curl $DEFAULT_URL/bootstrap/app.php > ./bootstrap/app.php

# copy stubs
curl $DEFAULT_URL/vite.config.js > ./vite.config.js
curl -o ./tsconfig.json $DEFAULT_URL/tsconfig.json
curl -o ./tailwind.config.js $DEFAULT_URL/tailwind.config.js
curl -o ./postcss.config.js $DEFAULT_URL/postcss.config.js
curl $DEFAULT_URL/package.json > ./package.json
curl $DEFAULT_URL/.gitignore > ./.gitignore
curl -o ./.eslintrc.json $DEFAULT_URL/.eslintrc.json
curl $DEFAULT_URL/editorconfig > ./editorconfig
curl $DEFAULT_URL/routes/web.php > ./routes/web.php
rm ./resources/js/app.js
rm ./resources/js/bootstrap.js
curl -o ./resources/js/app.tsx $DEFAULT_URL/resources/js/app.tsx
mkdir -p ./resources/js/types
curl -o ./resources/js/types/global.d.ts $DEFAULT_URL/resources/js/types/global.d.ts
curl -o ./resources/js/types/index.d.ts $DEFAULT_URL/resources/js/types/index.d.ts
curl -o ./resources/js/types/vite-env.d.ts $DEFAULT_URL/resources/js/types/vite-env.d.ts
mkdir -p ./resources/js/pages
curl -o ./resources/js/pages/Welcome.tsx $DEFAULT_URL/resources/js/pages/Welcome.tsx
mkdir -p ./resources/js/components
curl $DEFAULT_URL/resources/css/app.css > ./resources/css/app.css
curl $DEFAULT_URL/app/Http/Middleware/HandleInertiaRequests.php > ./app/Http/Middleware/HandleInertiaRequests.php

npm install

echo "DONE!"
echo " "
echo "run \`php artisan serve\` and \`npm run dev\`"
echo "access \`localhost:8000\`"
