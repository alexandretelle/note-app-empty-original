export default function AddForm() {
    return (
      <form>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                  <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                      Titre
                  </label>
                  <div className="mt-2">
                      <input
                      type="text"
                      name="title"
                      id="title"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                  </div>
              </div>
  
              <div className="col-span-full">
                  <label htmlFor="tag" className="block text-sm font-medium leading-6 text-gray-900">
                      Tag
                  </label>
                  <div className="mt-2">
                      <input
                      type="text"
                      name="tag"
                      id="tag"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      />
                  </div>
              </div>
  
              <div className="col-span-full">
                  <label htmlFor="note" className="block text-sm font-medium leading-6 text-gray-900">
                      Note
                  </label>
                  <div className="mt-2">
                      <textarea
                      id="note"
                      name="note"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                      />
                  </div>
              </div>
          </div>
  
          <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
              Annuler
              </button>
              <button
              type="submit"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
              >
              Ajouter
              </button>
          </div>
      </form>
    )
}
  