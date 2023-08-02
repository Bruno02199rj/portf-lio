import TypeIt from "typeit-react";

export default () => {
    return (
        <div className="App ">
           <TypeIt
            options={{
                    strings: ["Desenvolvedor Front End"],
                    
                    speed: 60,
                    waitUntilVisible: true,
                }}
                />
                
        </div>
    );
};