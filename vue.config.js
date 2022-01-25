module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/outside-page/" // Thay tên repository của các bạn vào đây nhé
      : "/",
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
      },
    },
  },
};
