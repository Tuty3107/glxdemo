const { override, useBabelRc, config } = require("customize-cra");
const path = require("path");

module.exports = override(
    useBabelRc(),
);
