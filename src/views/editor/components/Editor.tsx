import CodeMirror from "@uiw/react-codemirror";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { useState } from "react";

const Editor = () => {
  const [code, setCode] = useState(`
\`\`\`latex
`);
  return (
    <CodeMirror
      className=" overflow-y-scroll"
      theme={monokai}
      maxHeight="89vh"
      minHeight="89vh"
      value={code}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
    ></CodeMirror>
  );
};

export default Editor;
