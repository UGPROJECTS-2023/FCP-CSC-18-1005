module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          constants: "./src", // Adjust the path based on your project structure
        },
      },
    ],
    "@babel/plugin-proposal-private-property-in-object", // Add the missing plugin here
  ],
};
