function SharingStateCounter({count,setCount})
{
    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Sharing Increment
            </button>
            <p>Count: {count}</p>
        </>
    )
}

export default SharingStateCounter;