import TypeIt from "typeit-react";

export default () => {
    return (
        <div className="App ">
           <TypeIt
            options={{
                    strings: ["Desenvolvedor Full-Stack"],
                    
                    speed: 60,
                    waitUntilVisible: true,
                }}
                />
                
        </div>
    );
};