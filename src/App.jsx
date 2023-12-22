import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function App() {
  const codeString = `
  import SyntaxHighlighter from "react-syntax-highlighter";
  import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
  
  function App() {
    const codeString = "(num) => num + 1";
  
    return (
      <div className="bg-gray-500 grid place-items-center h-screen">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
  
  export default App;
  `;

  const [copyCode, setCopyCode] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(codeString);
    setCopyCode(true);
    setTimeout(() => {
      setCopyCode(false);
    }, 2000);
  }

  return (
    <div className="bg-gray-500 grid place-items-center h-screen">
      <div className="max-w-2xl  min-w-[25rem] bg-gray-300 rounded-md overflow-hidden">
        <div className="flex justify-between items-center py-2 px-4">
          <p className="text-sm">Example code</p>
          {copyCode ? (
            <button className="text-sm">Copied!</button>
          ) : (
            <button className="text-sm" onClick={()=>copyToClipboard()}>Copy code</button>
          )}
        </div>
        <SyntaxHighlighter
          language="jsx"
          style={atomOneDark}
          customStyle={{
            padding: "1rem",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

export default App;
