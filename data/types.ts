import * as texts from "./texts";

export const blockList = [
  {
    id: "type-block-most-common",
    title: "Most common",
    list: [
      {
        id: "main",
        title: "main",
      },
      {
        id: "header",
        title: "header",
      },
      {
        id: "aside",
        title: "aside",
      },
      {
        id: "footer",
        title: "footer",
      },
      {
        id: "section",
        title: "section",
      },
      {
        id: "article",
        title: "article",
      },
      {
        id: "div",
        title: "div",
      },
      {
        id: "nav",
        title: "nav",
      },
      {
        id: "dl-dt-dd",
        title: "dl-dt-dd",
      },
      {
        id: "ol-ul-li",
        title: "ol-ul-li",
      },
      {
        id: "table",
        title: "table",
      },
      {
        id: "form",
        title: "form",
      },
      {
        id: "h1-h6",
        title: "h1-h6",
      },
      {
        id: "p",
        title: "p",
      },
    ],
  },
  {
    id: "type-block-others",
    title: "Others",
    list: [
      {
        id: "address",
        title: "address",
      },
      {
        id: "blockquote",
        title: "blockquote",
      },
      {
        id: "hr",
        title: "hr",
      },
      {
        id: "video",
        title: "video",
      },
      {
        id: "pre",
        title: "pre",
      },
      {
        id: "canvas",
        title: "canvas",
      },
      {
        id: "fieldset",
        title: "fieldset",
      },
      {
        id: "figure",
        title: "figure",
      },
      {
        id: "noscript",
        title: "noscript",
      },
    ],
  },
];

export const inlineList = [
  {
    id: "type-inline-most-common",
    title: "Most common",
    list: [
      {
        id: "span",
        title: "span",
      },
      {
        id: "a",
        title: "a",
      },
      {
        id: "img",
        title: "img",
      },
      {
        id: "br",
        title: "br",
      },
      {
        id: "script",
        title: "script",
      },
    ],
  },
  {
    id: "type-inline-form",
    title: "Form Elements",
    list: [
      {
        id: "input",
        title: "input",
        ref: "form-elements",
      },
      {
        id: "textarea",
        title: "textarea",
        ref: "form-elements",
      },
      {
        id: "select",
        title: "select",
        ref: "form-elements",
      },
      {
        id: "label",
        title: "label",
        ref: "form-elements",
      },
      {
        id: "button",
        title: "button",
        ref: "form-elements",
      },
      {
        id: "output",
        title: "output",
        ref: "form-elements",
      },
    ],
  },
  {
    id: "type-inline-text",
    title: "Text Elements",
    list: [...texts.inlineList[0].list, ...texts.inlineList[1].list].map(
      (item) => ({ ...item, ref: "text-elements" })
    ),
  },
  {
    id: "type-inline-others",
    title: "Others Elements",
    list: [
      {
        id: "map",
        title: "map",
      },
      {
        id: "object",
        title: "object",
      },
    ],
  },
];
