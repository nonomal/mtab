<?php

// autoload_psr4.php @generated by Composer

$vendorDir = dirname(dirname(__FILE__));
$baseDir = dirname($vendorDir);

return array(
    'think\\view\\driver\\' => array($vendorDir . '/topthink/think-view/src'),
    'think\\trace\\' => array($vendorDir . '/topthink/think-trace/src'),
    'think\\' => array($vendorDir . '/topthink/think-helper/src', $vendorDir . '/topthink/think-template/src', $vendorDir . '/topthink/think-orm/src', $vendorDir . '/topthink/think-filesystem/src', $vendorDir . '/topthink/framework/src/think'),
    'plugins\\' => array($baseDir . '/plugins'),
    'app\\' => array($baseDir . '/app'),
    'Symfony\\Polyfill\\Php80\\' => array($vendorDir . '/symfony/polyfill-php80'),
    'Symfony\\Polyfill\\Mbstring\\' => array($vendorDir . '/symfony/polyfill-mbstring'),
    'Symfony\\Component\\VarDumper\\' => array($vendorDir . '/symfony/var-dumper'),
    'Psr\\SimpleCache\\' => array($vendorDir . '/psr/simple-cache/src'),
    'Psr\\Log\\' => array($vendorDir . '/psr/log/Psr/Log'),
    'Psr\\Http\\Message\\' => array($vendorDir . '/psr/http-message/src', $vendorDir . '/psr/http-factory/src'),
    'Psr\\Http\\Client\\' => array($vendorDir . '/psr/http-client/src'),
    'Psr\\Container\\' => array($vendorDir . '/psr/container/src'),
    'League\\MimeTypeDetection\\' => array($vendorDir . '/league/mime-type-detection/src'),
    'League\\Flysystem\\' => array($vendorDir . '/league/flysystem/src'),
    'GuzzleHttp\\Psr7\\' => array($vendorDir . '/guzzlehttp/psr7/src'),
    'GuzzleHttp\\Promise\\' => array($vendorDir . '/guzzlehttp/promises/src'),
    'GuzzleHttp\\' => array($vendorDir . '/guzzlehttp/guzzle/src'),
);
