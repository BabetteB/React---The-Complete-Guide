import { useState } from "react";

import { EXAMPLES } from "../data";

import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "./Section";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                buttons={
                    <>
                        <TabButton text="Components" onClick={() => handleSelect("components")} isSelected={selectedTopic === 'components'} />
                        <TabButton text="JSX"   onClick={() => handleSelect("jsx")} isSelected={selectedTopic === 'jsx'} />
                        <TabButton text="State" onClick={() => handleSelect("state")} isSelected={selectedTopic === 'state'} />
                        <TabButton text="Props" onClick={() => handleSelect("props")} isSelected={selectedTopic === 'props'} />
                    </>
                }>
                {tabContent}
            </Tabs>

        </Section>
    );
}