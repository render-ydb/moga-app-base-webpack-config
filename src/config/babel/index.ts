export = (isEnvDevelopment = false) => {
    return {
        presets: [
            [require.resolve("@babel/preset-env"), {}],
            [require.resolve("@babel/preset-react"), { "runtime": "automatic" }],
            require.resolve("@babel/preset-typescript")
        ],
        plugins: [
            true
            && isEnvDevelopment
            && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
        babelrc: false,
        configFile: false,
        cacheCompression: false,
    };
};

