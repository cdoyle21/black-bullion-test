import { ItemProps } from '../../components/molecules/DropdownButton/DropdownButton';
import { Pathway } from '../../components/services/pathways';

export const handleSortByOnSelectionChange = (
  data: Pathway[],
  sortValue: ItemProps['name'],
): Pathway[] => {
  let sortedResults: Pathway[];

  if (sortValue === 'title') {
    sortedResults = [...data].sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortValue === 'duration') {
    sortedResults = [...data].sort((a, b) => {
      const durationA = parseInt(a.duration, 10);
      const durationB = parseInt(b.duration, 10);

      return durationA - durationB;
    });
  } else {
    sortedResults = [...data];
  }

  return sortedResults;
};

export const handleFilterByOnSelectionChange = (
  data: Pathway[],
  filterValue: ItemProps['name'],
): Pathway[] => {
  let filteredResults: Pathway[];

  if (filterValue === 'has_summative_assessment') {
    filteredResults = data.filter((item) => item[filterValue as keyof Pathway]);
  } else if (filterValue === 'type') {
    filteredResults = data.filter((item) => item[filterValue as keyof Pathway] === 'pathway');
  } else {
    filteredResults = data;
  }

  return filteredResults;
};
