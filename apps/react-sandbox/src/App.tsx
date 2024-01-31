import {
  Box,
  Button,
  FileContextProvider,
  FileUploader,
  Footer,
  Grid,
  GridItem,
  Navbar,
  Panel,
  Search,
  Table,
  TableContainer,
  TableContextProvider,
  Text,
  Tooltip,
} from '@stretto/cds-ui';
import { Icon } from '@stretto/cds-ui/node_modules/@iconify/react';
import React from 'react';

import './styles/index.css';

function App() {
  const data = [
    {
      id: 0,
      caseNumber: '10BBB9',
      debtor: 'Bill Watts',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '08/28/2023',
    },
    {
      id: 1,
      caseNumber: '10CCC9',
      debtor: 'John Snow',
      jointDebtor: 'Ariana Grande',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '08/29/2023',
    },
    {
      id: 2,
      caseNumber: '10AAA7',
      debtor: 'Jody Gutillo',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/03/2023',
    },
    {
      id: 3,
      caseNumber: '10AAA9',
      debtor: 'Saul Goodman',
      jointDebtor: '-',
      chapter: 'Chapter 7, Individual (Single)',
      caseFiledDate: '09/05/2023',
    },
    {
      id: 4,
      caseNumber: '10AAZ6',
      debtor: 'Hank Williams',
      jointDebtor: 'Margaret Williams',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/05/2023',
    },
    {
      id: 5,
      caseNumber: '10DFC78',
      debtor: 'Bert Reynolds',
      jointDebtor: 'Julie Reynolds',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/07/2023',
    },
    {
      id: 6,
      caseNumber: '10DFC78',
      debtor: 'Alice Jenkins',
      jointDebtor: 'Matt Jenkins',
      chapter: 'Chapter 7, Joint',
      caseFiledDate: '09/09/2023',
    },
  ];

  const columns = [
    {
      id: 0,
      key: 'caseNumber',
      header: 'Case No.',
      isSortable: true,
      render: (data: any) => data.caseNumber,
    },
    {
      id: 1,
      key: 'debtor',
      header: 'Debtor',
      isSortable: true,
      render: (data: any) => data.debtor,
    },
    {
      id: 2,
      key: 'jointDebtor',
      header: 'Joint Debtor',
      isSortable: true,
      render: (data: any) => data.jointDebtor,
    },
    {
      id: 3,
      key: 'chapter',
      header: 'Chapter',
      isSortable: true,
      render: (data: any) => data.chapter,
    },
    {
      id: 4,
      key: 'caseFiledDate',
      header: 'Case Filed Date',
      isSortable: true,
      render: (data: any) => data.caseFiledDate,
    },
    {
      id: 5,
      key: 'action',
      header: 'Action',
      isSortable: false,
      render: (data: any, isSelected: any) => (
        <Button variant="primary" fill="transparent" size="small" onClick={() => handleRowSelection(data.id)}>
          {isSelected ? 'Selected' : 'Select'}
        </Button>
      ),
    },
  ];

  const [, setSelectedRow] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [debouncedTerm, setDebouncedTerm] = React.useState(searchTerm);

  const handleRowSelection = (rowId: string) => {
    setSelectedRow(rowId);
  };

  // Debounce search term changes
  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  // Memoized search results
  const searchResults = React.useMemo(() => {
    if (!debouncedTerm) return data;

    return data.filter((item) =>
      Object.entries(item).some(([key, value]) => {
        if (key === 'action') return false;
        return value.toString().toLowerCase().includes(debouncedTerm.toLowerCase());
      }),
    );
  }, [data, debouncedTerm]);

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Grid columns={12}>
        <GridItem as="div" colSpan={12}>
          <Navbar
            links={[
              {
                label: 'Home',
                url: '#',
              },
              {
                label: 'Clients',
                url: '#',
              },
              {
                label: 'Calendar',
                url: '#',
              },
              {
                label: 'Court Notices',
                url: '#',
              },
              {
                label: 'Credit Reports & Courses',
                url: '#',
              },
              {
                label: 'Documents',
                url: '#',
              },
              {
                label: 'Legal Noticing',
                url: '#',
              },
            ]}
            logo="/src/public/strettoSymbol.svg"
            logoUrl={'#'}
          />
        </GridItem>
      </Grid>
      <Box marginBottom="48px" marginTop="48px">
        <Grid columns={12} rows={2} gridAutoRows="minmax(100px, auto)">
          <GridItem as="div" startColumn={3} colSpan={8}>
            <Box display="flex" alignItems="center">
              <Text as="h1" color="default" size="h2" href="https://vitejs.dev/" target="_blank">
                H1 Heading
              </Text>
              <Tooltip description="This is some basic Tooltip content.">
                <Box marginInline="8px">
                  <Icon icon="mdi:help-circle-outline" fontSize="24px" />
                </Box>
              </Tooltip>
            </Box>
            <Panel
              header="This is a header"
              panelContent={
                <Grid columns={4}>
                  <GridItem as="div" colSpan={4}>
                    <TableContextProvider>
                      <TableContainer title="Basic Data Table" description="With Searchbar & Single Row Selection">
                        <Box marginBottom="16px">
                          <Search
                            labelText="Search Table"
                            placeholder="Search Debtors"
                            type="text"
                            value={searchTerm}
                            onChange={handleChange}
                          />
                        </Box>
                        <Table id="data-table" data={searchResults} columns={columns} />
                      </TableContainer>
                    </TableContextProvider>
                  </GridItem>

                  <GridItem as="div" colSpan={4}>
                    <FileContextProvider>
                      <FileUploader
                        accept={['.jpg', '.png']}
                        buttonLabel="Select file"
                        labelDescription="Max file size is 500mb. Only .jpg files are supported."
                        helperText="or drag files here."
                        multiple
                      />
                    </FileContextProvider>
                  </GridItem>
                </Grid>
              }
              footerDivider={true}
              footer={
                <>
                  <Box display="flex" gap="24px">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="tertiary">Tertiary Button</Button>
                  </Box>
                </>
              }
            />
          </GridItem>
        </Grid>
      </Box>
      <Grid columns={12}>
        <GridItem as="footer" colSpan={12}>
          <Footer
            links={[
              {
                label: 'Terms and Conditions',
                url: 'https://www.bestcase.com/pdf/TermsandConditions.pdf',
                target: '_blank',
              },
              {
                label: 'Privacy Policy',
                url: 'https://www.bestcase.com/pdf/Privacy.pdf',
                target: '_blank',
              },
            ]}
            supportPhone="800 777 8989"
          ></Footer>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
