import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Masterize - HTML Docs</span>,
  useNextSeoProps: () => {
    return {
      title: "Masterize HTML Docs - Masterize",
      description: "Masterize - HTML Docs",
    };
  },
  project: {
    link: "https://github.com/uppergoal/masterize-docs-html",
  },
  docsRepositoryBase: "https://github.com/uppergoal/masterize-docs-html",
  footer: {
    text: "Masterize - HTML Docs",
  },
};

export default config;
