export default function MyInput({value, setValue}) {
    return (
        <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
    )
}