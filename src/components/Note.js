  export default function Note({note}) {
    return (
        <li className="py-4">
            <div className="flex items-center gap-x-3">
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-gray-900">{note.title}</h3>
              <time dateTime={note.dateTime} className="flex-none text-xs text-gray-500">
                {note.dateTime}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-gray-500">
              {note.note}
            </p>
        </li>
    )
}
  