import React, { Dispatch, FC, SetStateAction } from 'react';
import { Container, Button } from './PathwaySortingAndFiltering.styles';
import DropdownButton, { ItemProps } from '../../molecules/DropdownButton/DropdownButton';
import {
  handleFilterByOnSelectionChange,
  handleSortByOnSelectionChange,
} from '../../../utils/pathwaySortingAndFilteringUtils/pathwaySortingAndFilteringUtils';
import { Pathway } from '../../../components/services/pathways';

export interface Props {
  pathways: Pathway[] | [];
  filteredPathways: Pathway[] | [];
  setFilteredData: Dispatch<SetStateAction<Array<Pathway>>>;
}

const PathwaySortingAndFiltering: FC<Props> = ({ pathways, filteredPathways, setFilteredData }) => {
  const sortByItems: ItemProps[] = [
    {
      name: 'sortBy',
      label: 'Sort by',
      ariaLabel: 'Sort by title',
    },
    {
      name: 'title',
      label: 'Title',
      ariaLabel: 'Pathway title',
    },
    {
      name: 'duration',
      label: 'Duration',
      ariaLabel: 'Pathway duration',
    },
  ];

  const filterByItems: ItemProps[] = [
    {
      name: 'filterBy',
      label: 'Filter by',
      ariaLabel: 'Filter by title',
    },
    {
      name: 'type',
      label: 'Pathway Type',
      ariaLabel: 'Pathway type',
    },
    {
      name: 'has_summative_assessment',
      label: 'Has Summative Assessment',
      ariaLabel: 'Has summative assessment',
    },
  ];

  return (
    <Container>
      <DropdownButton
        items={filterByItems}
        buttonAriaLabel="filter by items"
        menuAriaLabel="filter by dropdown options"
        initialSelection={filterByItems[0]}
        menuAlignment="left"
        onSelectionChange={(item) => {
          if (item !== filterByItems[0]) {
            const filteredResults = handleFilterByOnSelectionChange(pathways, item.name);
            setFilteredData(filteredResults);
          }
        }}
      />
      <DropdownButton
        items={sortByItems}
        buttonAriaLabel="sort by items"
        menuAriaLabel="sort by dropdown options"
        initialSelection={sortByItems[0]}
        menuAlignment="right"
        onSelectionChange={(item) => {
          if (item !== sortByItems[0]) {
            const sortedResults = handleSortByOnSelectionChange(filteredPathways, item.name);
            setFilteredData(sortedResults);
          }
        }}
      />
      <Button
        disabled={false}
        aria-label="Clear sorting and filters"
        onClick={() => {
          setFilteredData(pathways);
        }}
      >
        Clear
      </Button>
    </Container>
  );
};

export default PathwaySortingAndFiltering;
