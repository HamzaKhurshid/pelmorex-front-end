import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const ContentContainer = styled.div`
  padding: 40px;
  width: 100%;
  overflow-y: scroll;
`;

export const ResumeRow = styled.div`
  display: flex;
  column-gap: 70px
`;

export const ResumeColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListingFilters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px
`;