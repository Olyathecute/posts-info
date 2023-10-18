import { useState, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

function Table({ setSelectedPosts }) {
  const gridRef = useRef()
  const allPosts = useSelector((state) => state.posts.posts)

  const [columnDefs] = useState([
    { field: '', checkboxSelection: true, headerCheckboxSelection: true, resizable: false, width: 10 },
    { field: 'userId', resizable: false, width: 100 },
    { field: 'title', resizable: true },
    { field: 'body', resizable: true },
  ])

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows()
    setSelectedPosts(selectedRows.map(({ id }) => id))
  }, [setSelectedPosts])

  const onFirstDataRendered = useCallback(() => gridRef.current.api.sizeColumnsToFit(), [])

  return (
    <div className='ag-theme-alpine-dark' style={{ height: '70vh', width: '100%' }}>
      <AgGridReact
        ref={gridRef}
        rowData={allPosts}
        columnDefs={columnDefs}
        rowSelection='multiple'
        onSelectionChanged={onSelectionChanged}
        onFirstDataRendered={onFirstDataRendered}
      />
    </div>
  )
}

export default Table
