import React from 'react';

interface TableRowProps {
    rowTitle: string;
    rowCell: string;
    rowTitleStyle?: string;
    rowCellStyle?: string;
}

const TableRow: React.FC<TableRowProps> = ({
    rowTitle,
    rowCell,
    rowTitleStyle,
    rowCellStyle
}) => {
  return (
    <div className='flex border-b py-2'>
        <div style={{ flex: 1 }}>
            <span className={`text-slate-800 ${rowTitleStyle ?? ''}`}>
                {rowTitle}
            </span>
        </div>
        <div style={{ flex: 0.1 }}>
            <span>:</span>
        </div>
        <div style={{ flex: 1 }}>
            <span className={`text-slate-500 ${rowCellStyle ?? ''}`}>
                {rowCell}
            </span>
        </div>
    </div>
  );
};

export default TableRow;