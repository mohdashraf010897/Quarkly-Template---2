
const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open%20Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open%20Sans%20Condensed:ital,wght@0,300;0,700;1,300&display=swap" />,
  ]);

  setPostBodyComponents([
    ...components.bodyItems,
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
  ]);
}