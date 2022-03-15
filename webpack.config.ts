// eslint-disable-next-line import/no-import-module-exports
import Dotenv from 'dotenv-webpack';

module.exports = {
    plugins: [new Dotenv()],
    rules: [
        {
            test: /\.(png|jpe?g|gif|jp2|webp|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
            },
        },
        {
            test: /\.(png|jpe?g|gif|jp2|webp|ttf|woff|woff2)$/,
            loader: 'css-loader',
            options: {
                name: '[name].[ext]',
            },
        },
    ],
};
