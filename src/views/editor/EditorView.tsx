import Editor from "./components/Editor";
import ViewPdf from "./components/ViewPdf";

const EditorView = () => {
  return (
    <div className="grid grid-cols-2 h-auto">
      <Editor></Editor>
      <ViewPdf></ViewPdf>
    </div>
  );
};

export default EditorView;
