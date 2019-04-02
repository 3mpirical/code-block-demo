import React from "react";
import hljs from "highlightjs";


const CodeBlock = ({syntax, children, ...rest}) => (
    <pre>
        <code {...rest} className={syntax} >
            { children }
        </code>
    </pre>
)

const highlightCode = () => {
    document.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
}


export { CodeBlock, highlightCode };