const { override, useBabelRc, config } = require("customize-cra");

module.exports = override(
    useBabelRc()
);
