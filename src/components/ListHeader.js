export default function ListHeader({ open, setOpen }) {
    return (
        <div className="px-10 py-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div className="ml-4 mt-2">
                <h1 className="text-2xl font-semibold leading-6 text-gray-900">Mes notes</h1>
            </div>
            <div className="ml-4 mt-2 flex-shrink-0">
                <button
                type="button"
                className="relative inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
                onClick={() => setOpen((open) => !open)}
                >
                Créer une note
                </button>
            </div>
            </div>
        </div>
    )
}
