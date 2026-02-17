<?php

use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Check if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require __DIR__ . '/../vendor/autoload.php';

// Bootstrap Laravel and handle the request...
$app = require_once __DIR__ . '/../bootstrap/app.php';

// --- VERCEL CONFIGURATION ---
if (isset($_SERVER['VERCEL_REGION']) || isset($_ENV['VERCEL_REGION'])) {
    // 1. Storage Path Fix (Read-only filesystem)
    $path = '/tmp/storage';
    $app->useStoragePath($path);
    
    // Ensure directories exist
    $dirs = [
        $path . '/framework/views',
        $path . '/framework/cache',
        $path . '/framework/sessions',
        $path . '/logs',
    ];
    
    foreach ($dirs as $dir) {
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
    }

    // 2. Logging Fix (Force stderr)
    $_ENV['LOG_CHANNEL'] = 'stderr';
    $_SERVER['LOG_CHANNEL'] = 'stderr';
}
// ----------------------------

// Handle the request
$app->handleRequest(Request::capture());

