'use client'
import DataTable from "components/DataTable";
import { DeleteIcon, EditIcon } from "components/Icons";
import { useEffect, useState } from "react";
import { getData } from "utils/fetch";

const tableConstants = ({ handleEdit, handleDelete, handleSort }: any) => {
  return [
    {
      title: <span className="cursor-pointer" onClick={handleSort("id")}>ID</span>,
      render: (rowData: { id: number | undefined; }) => {
        return <span>{rowData.id}</span>;
      },
    },
    {
      title: 'Thumbnail',
      render: (rowData: { thumbnail: string | undefined; }) => {
        return <img src={rowData.thumbnail} className="w-[50px] h-[50px]" />;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("title")}>Title</span>,
      render: (rowData: { title: string | undefined; }) => {
        return <span>{rowData.title}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("category")}>Category</span>,
      render: (rowData: { category: string | undefined; }) => {
        return <span>{rowData.category}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("price")}>Price</span>,
      render: (rowData: { price: number | undefined; }) => {
        return <span>{rowData.price}</span>;
      },
    },
    {
      title: <span className="cursor-pointer" onClick={handleSort("stock")}>Stock</span>,
      render: (rowData: { stock: number | undefined; }) => {
        return <span>{rowData.stock}</span>;
      },
    },
    {
      title: 'Action',
      render: (rowData: any) => {
        return <div className="flex items-center"><button className='btn btn-primary p-1 mr-1' onClick={handleEdit(rowData)}><EditIcon className="h-[20px]" /></button><button className='btn btn-danger p-1' onClick={handleDelete(rowData)}><DeleteIcon className="h-[20px]" /></button></div>
      },
    },
  ];
};

export default function Dashboard() {
  //data sort, search, pagination
  const [dataFilter, setDataFilter] = useState({
    limit: 10,
    skip: 0,
    searchText: '',
    sort: '',
    currentPage: 1
  })
  console.log(dataFilter, 'dataFilter')
  const [newData, setNewData] = useState({})
  useEffect(() => {
    if (dataFilter.searchText !== "") {
      (async () => {
        const searchData = await getData({ url: `https://dummyjson.com/products/search?q=${dataFilter.searchText}` })
        setNewData(searchData)
      })();
    } else {
      (async () => {
        const searchData = await getData({ url: `https://dummyjson.com/products?limit=${10}&skip=${dataFilter.skip}0` })
        setNewData(searchData)
      })();
    }
  }, [dataFilter]);
  const handleEdit = (item: any) => () => {
    alert(JSON.stringify(item))
  }
  const handleDelete = (item: any) => () => {
    alert(JSON.stringify(item))
  }
  const handleSort = (item: string) => () => {
    setDataFilter({ ...dataFilter, sort: item })
  }
  const handleSearch = (e: any) => {
    setDataFilter({ ...dataFilter, searchText: e.target.value })
  }
  const onBatchChange = (currentBatch: any) => {
    setDataFilter({ ...dataFilter, skip: currentBatch ? currentBatch - 1 : dataFilter.skip })
  };
  return (
    <>     
      <h1>H1 Title</h1>
      <h2>H2 Title</h2>
      <h3>H3 Title</h3>
      <h4>H4 Title</h4>
      <h5>H5 Title</h5>
      <h6>H6 Title</h6>
      <p>body</p>
      <button className="btn btn-primary mr-3 mt-3">Primary</button>
      <button className="btn btn-primary-outline mt-3">Primary outline</button><br />
      <button className="btn btn-secondary mr-3 mt-3">Secondary</button>
      <button className="btn btn-secondary-outline mt-3">Secondary outline</button>
      <DataTable
        cols={tableConstants({ handleEdit, handleDelete, handleSort })}
        data={newData}
        handleSearch={handleSearch}
        dataFilter={dataFilter}
        onBatchChange={onBatchChange}
      />
    </>
  )
}
