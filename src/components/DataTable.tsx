import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from "react";
import BasicPagination from "./BasicPagination";

const DataTable = ({ cols, data, handleSearch, dataFilter, onBatchChange }: any) => {
  return (<>
    {handleSearch && <div className="flex justify-end">
      <input type="text" placeholder="Search" name="search" value={dataFilter.searchText} onChange={handleSearch} />
    </div>}
    <div className="overflow-x-auto">
      <table className={`w-full border-separate border-spacing-y-2`}>
        <thead>
          <tr>
            {cols.map((headerItem: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
              <th key={index} className='py-2 px-3 text-left'>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((item: any, index: Key | null | undefined) => (
            <tr key={index}>
              {cols.map((col: { render: (arg0: any) => string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, key: Key | null | undefined) => (
                <td key={key} className="py-2 px-3 text-left bg-white first:rounded-l last:rounded-r drop-shadow-sm"> {col.render(item)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <BasicPagination totalRecords={data.total} limit={dataFilter.limit} batch={dataFilter.skip + 1} onBatchChange={onBatchChange} />
  </>);
};

export default DataTable;