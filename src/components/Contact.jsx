import { useRef, useState } from "react"

const Contact = () => {

    const ref = useRef(null);
    const [height, setHeight] = useState("0px");
    const onLoad = () => {
        setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
    };

    return (
        <iframe ref={ref} onLoad={onLoad} style={{padding: 0, margin: 0, border: 0, overflow: "auto"}} title="Contact Form" src="https://plugins.crisp.chat/urn:crisp.im:contact-form:0/contact/f6afb8ca-9c70-47a7-b15e-13f5174626b6" referrerPolicy="origin" sandbox="allow-forms allow-popups allow-scripts allow-same-origin" height={height} width="100%"></iframe>
    )
}

export default Contact