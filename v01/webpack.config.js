const Encore = require('@symfony/webpack-encore');
const _ = require('lodash');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('bundle_app', './src/MobicoopBundle/Resources/assets/js/app.js')
    .enableStimulusBridge('./src/MobicoopBundle/Resources/assets/stimulus/controllers.json')
    .enableVueLoader()
    .enableSassLoader()
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    ;

let encoreConfig = Encore.getWebpackConfig();

encoreConfig.resolve.alias = _.merge(encoreConfig.resolve.alias, {
    '@js': path.resolve(__dirname, 'src/MobicoopBundle/Resources/assets/js'),
    '@css': path.resolve(__dirname, 'src/MobicoopBundle/Resources/assets/css'),
    '@components': path.resolve(__dirname, 'src/MobicoopBundle/Resources/assets/js/components'),
    '@translations': path.resolve(__dirname, 'src/MobicoopBundle/Resources/translations'),
    '@clientTranslations': path.resolve(__dirname, './translations'),
});

module.exports = [encoreConfig];
