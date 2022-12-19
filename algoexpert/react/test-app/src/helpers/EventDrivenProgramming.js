function EventDrivenProgramming() {
    /* use handleClick inside *
    const handleClick = () => {
        console.log('Button2 clicked');
    };
    /************************ */
    return (
        <>
            <button onClick={() => {
                console.log('Button clicked');
            }}>Click me</button>
            <button onClick={handleClick}>Click me 2</button>

            <MyButton onClick={handleClick} >Click me 3</MyButton>
        </>
    );
}

/* use handleClick outside */
function handleClick(event) {
    console.log('Button clicked');
    //console.log(event);
    console.log(event.nativeEvent);
}
/************************* */

function MyButton(props) {
    return (
        <button 
            //onClick={props.onClick} // handle only click
            {...props} // handle all events
            style={{
                color: 'red'
            }} />
            /*{props.children}  Used if handle only click
        </button>*/
    );
}

export default EventDrivenProgramming;