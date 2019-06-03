let visiblility = false;

const toggelText = () => {
    visiblility = !visiblility;
    render(); 
};

const render = () => {
    const jsx = (
        <div>
            <h1>Visiblility toggle</h1>
            <button onClick={toggelText}>
            {visiblility ? "Hide Details" : "Show Details"}
            </button>
            {visiblility && (
                <div>
                    <p>Hey. This is some text tht you can see.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById("app"));
};



render();