export default function MyInput2({value, setValue}) {
    return (
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
    )
}