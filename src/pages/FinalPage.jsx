import { useEffect, useState } from "react";
import steps from "../Constant/Steps"; // Import steps from the specified path

const CustomPage = () => {
  const [htmlCode, setHtmlCode] = useState(
    "<h1>This is a main heading</h1>\n<p>This is a paragraph.</p>"
  );
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(true);
  const [consoleOutput, setConsoleOutput] = useState([]);
  const [activeTab, setActiveTab] = useState("html");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssChange = (event) => {
    setCssCode(event.target.value);
  };

  const handleJsChange = (event) => {
    setJsCode(event.target.value);
  };

  const executeJS = () => {
    setConsoleOutput([]);
    try {
      const output = [];
      const customConsole = {
        log: (...args) => {
          const message = args.join(" ");
          output.push(message);
          const loggedMessages = output.reduce((acc, msg) => {
            acc[msg] = (acc[msg] || 0) + 1;
            return acc;
          }, {});
          const formattedOutput = Object.entries(loggedMessages).map(
            ([msg, count]) => (count > 1 ? `${msg} (${count})` : msg)
          );
          setConsoleOutput(formattedOutput);
        },
        error: (...args) => {
          const errorMessage = args.join(" ");
          setConsoleOutput((prev) => [
            ...prev,
            `<span style="color: red;">Error: ${errorMessage}</span>`,
          ]);
        },
      };

      const isolatedFunction = new Function(
        "console",
        jsCode + `; return console;`
      );

      isolatedFunction(customConsole);
    } catch (error) {
      setConsoleOutput((prev) => [
        ...prev,
        `<span style="color: red;">Error: ${error.message}</span>`,
      ]);
    }
  };

  useEffect(() => {
    if (jsCode) {
      executeJS();
    }
  }, [jsCode]);

  return (
    <div className="desktop-layout flex flex-col transition-all duration-300">
      <div className="action-row flex justify-between items-center p-4 bg-gray-800 overflow-x-auto">
        <div className="tabs-row flex space-x-4">
          <button
            aria-expanded={activeTab === "html"}
            className={`px-4 py-2 ${
              activeTab === "html" ? "bg-gray-600" : "bg-gray-500"
            } text-white`}
            onClick={() => setActiveTab("html")}
          >
            index.html <span className="sr-only">Editor</span>
          </button>
          <button
            aria-expanded={activeTab === "css"}
            className={`px-4 py-2 ${
              activeTab === "css" ? "bg-gray-600" : "bg-gray-500"
            } text-white`}
            onClick={() => setActiveTab("css")}
          >
            style.css <span className="sr-only">Editor</span>
          </button>
          <button
            aria-expanded={activeTab === "js"}
            className={`px-4 py-2 ${
              activeTab === "js" ? "bg-gray-600" : "bg-gray-500"
            } text-white`}
            onClick={() => setActiveTab("js")}
          >
            script.js <span className="sr-only">Editor</span>
          </button>
        </div>
        <div className="panel-display-tabs flex space-x-4 overflow-x-auto">
          <button
            aria-expanded="false"
            className="px-4 py-2 bg-gray-600 text-white"
            onClick={() => console.log("Console opened")}
          >
            Console
          </button>
          <button
            aria-expanded={isPreviewVisible}
            className="px-4 py-2 bg-gray-600 text-white"
            onClick={() => setIsPreviewVisible(!isPreviewVisible)}
          >
            <span className="sr-only">
              {isPreviewVisible ? "Hide" : "Show"} Preview
            </span>
            {isPreviewVisible ? "Hide Preview" : "Show Preview"}
          </button>
          <button
            aria-expanded={isDescriptionVisible}
            className="px-4 py-2 bg-gray-600 text-white"
            onClick={() => setIsDescriptionVisible(!isDescriptionVisible)}
          >
            <span className="sr-only">
              {isDescriptionVisible ? "Collapse" : "Expand"} Description
            </span>
            {isDescriptionVisible
              ? "Collapse Description"
              : "Expand Description"}
          </button>
        </div>
      </div>

      <div className="main-container flex-1 flex flex-col md:flex-row">
        {isDescriptionVisible && (
          <div className="description-pane bg-gray-800 text-white p-4 md:w-1/3">
            <h2 className="text-lg font-bold">Description</h2>
            <div className="description-container description-highlighter mt-2">
              {steps.map((step, index) => (
                <div key={index}>
                  <h1 id="content-start" className="text-lg font-bold">
                    Step {index + 1}
                  </h1>
                  <div>
                    <section id="description">
                      <p>{step.description}</p>
                      <p>Here is the basic syntax:</p>
                      <details className="code-details" open="">
                        <summary className="code-details-summary">
                          Example Code
                        </summary>
                        <pre
                          className="language-html"
                          tabIndex="0"
                          role="region"
                          aria-label="HTML code example"
                        >
                          <code className="language-html">
                            <span className="token tag">
                              &lt;{step.openingTag}&gt;
                            </span>
                            content
                            <span className="token tag">
                              &lt;/{step.closingTag}&gt;
                            </span>
                          </code>
                        </pre>
                      </details>
                      <p>
                        The first element you will learn about is the{" "}
                        <code>{step.element}</code> element. The{" "}
                        <code>{step.element}</code> element is a heading element
                        and is used for the main heading of a webpage.
                      </p>
                      <details className="code-details" open="">
                        <summary className="code-details-summary">
                          Example Code
                        </summary>
                        <pre
                          className="language-html"
                          tabIndex="0"
                          role="region"
                          aria-label="HTML code example"
                        >
                          <code className="language-html">
                            <span className="token tag">
                              &lt;{step.element}&gt;
                            </span>
                            This is a main heading
                            <span className="token tag">
                              &lt;/{step.element}&gt;
                            </span>
                          </code>
                        </pre>
                      </details>
                      <p>
                        Change the text of the <code>{step.element}</code>{" "}
                        element below from <code>{step.oldText}</code> to{" "}
                        <code>{step.newText}</code> and watch it update.
                      </p>
                      <p>
                        <a
                          href={`http://localhost:5173/learn/responsive-web-design/${index}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Learn More
                        </a>
                      </p>
                    </section>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="editor-pane flex-1 p-4">
          {activeTab === "html" && (
            <textarea
              value={htmlCode}
              onChange={handleHtmlChange}
              className="w-full h-64 border border-gray-300 rounded p-2"
              placeholder="Write HTML here..."
            />
          )}
          {activeTab === "css" && (
            <textarea
              value={cssCode}
              onChange={handleCssChange}
              className="w-full h-64 border border-gray-300 rounded p-2"
              placeholder="Write CSS here..."
            />
          )}
          {activeTab === "js" && (
            <textarea
              value={jsCode}
              onChange={handleJsChange}
              className="w-full h-64 border border-gray-300 rounded p-2"
              placeholder="Write JavaScript here..."
            />
          )}
        </div>
      </div>

      {isPreviewVisible && (
        <div className="preview-pane p-4">
          <h2 className="text-lg font-bold">Preview</h2>
          <div className="preview-container">
            <div dangerouslySetInnerHTML={{ __html: htmlCode }} />
          </div>
        </div>
      )}
      <div className="console-output p-4 bg-gray-800 text-white">
        <h2 className="text-lg font-bold">Console Output</h2>
        <pre>
          {consoleOutput.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CustomPage;
