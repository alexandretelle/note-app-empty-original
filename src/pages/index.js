import { useState } from 'react'

import ListHeader from "@/components/ListHeader"
import List from "@/components/List"
import Panel from '@/components/Panel'

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <ListHeader open={open} setOpen={setOpen} />
        <div className="border-t border-gray-100 px-10 pb-5">
          <List />
        </div>
      </div>
      <Panel open={open} setOpen={setOpen} />
    </div>
  )
}
