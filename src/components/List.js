import Note from "./Note"

const notes = [
    {
        id: 1,
        title: 'test',
        note: 'test',
        tag: 'test',
        dateTime: '2023-01-23T11:00',
    },
    {
        id: 2,
        title: 'test',
        note: 'test',
        tag: 'test',
        dateTime: '2023-01-23T11:00',
    },
    {
        id: 3,
        title: 'test',
        note: 'test',
        tag: 'test',
        dateTime: '2023-01-23T11:00',
    },
    {
        id: 4,
        title: 'test',
        note: 'test',
        tag: 'test',
        dateTime: '2023-01-23T11:00',
    },
]
  
export default function List() {
    return (
      <ul role="list" className="divide-y divide-gray-100">
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    )
}
  