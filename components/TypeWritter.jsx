// components/Typewriter.js
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ stringArr }) => {
    const colors = ["#FF77FF", "#0E7BFF", "#893BFF", "#FF6242"]; // Example colors

    return (
        <div>
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
                onInit={(typewriter) => {
                    stringArr.forEach((str, idx) => {
                        typewriter
                            .typeString(`<span style="color:${colors[idx]}">${str}</span>`)
                            .pauseFor(1500)
                            .deleteAll();
                    });
                    typewriter.start();
                }}
            />
        </div>
    );
};

export default TypewriterComponent;
