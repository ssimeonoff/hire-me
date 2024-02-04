import styled from "styled-components";

const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const PageLabel = styled.div`
  min-width: 70px;
`

const Button = styled.button`
  margin: 5px;
  padding: 5px;
`

const Pagination = ({size, page, setPage, count}) => {
  const pageLabel = `${size * page + 1}-${size * (page + 1) > count ? count : size * (page + 1)}/${count}`;
  const isPreviousDisabled = page === 0;
  const isNextDisabled = size * (page + 1) > count;

  return (
    <ContainerPagination>
      <Button type="button" disabled={isPreviousDisabled} onClick={() => !isPreviousDisabled && setPage(page - 1)}>PREV</Button>
      <PageLabel>{pageLabel}</PageLabel>
      <Button type="button" disabled={isNextDisabled} onClick={() => !isNextDisabled && setPage(page + 1)}>NEXT</Button>
    </ContainerPagination>
    )
}

export default Pagination;