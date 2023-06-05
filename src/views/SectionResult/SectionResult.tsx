import React, { FC } from 'react';
import Header from '../../component/Header/Header';
import Table from '../../component/Table/Table';

interface SectionResultsProps {
    rows: Array<{
        row: {
            [key: string]: string | number | JSX.Element;
        };
    }>;
    columns: {
        [key: string]: string;
    };
    sectionTitle:string,
    tableTitle:string
}

const SectionResults: FC<SectionResultsProps> = ({sectionTitle,tableTitle, rows, columns }) => (
    <div className='section-result padding-20px'>
        <div className="section-content">
            <div >
                <div className='section-title'>
                    <span>{sectionTitle}</span>
                    <button>Administrar</button>
                </div>
                <h3>{tableTitle}</h3>
            </div>
            <div>
                <Table rows={rows} columns={columns} />
            </div>
        </div>

    </div>
);

export default SectionResults;
