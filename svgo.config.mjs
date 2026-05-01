/** SVGO for the interactive region map — keep ids/selectors and viewBox intact. */
export default {
  multipass: true,
  js2svg: { indent: 2, pretty: false },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false,
          // Keep embedded theme / :has() rules intact
          minifyStyles: false,
        },
      },
    },
  ],
};
