import styled from "styled-components";

const SectionElement = styled.section`
  min-height: 400px;
  margin-top: 50px;
`;

const TitleSection = styled.h2`
  color: #333;
  font-size: 27px;
`;

const ListCategories = styled.li`
  color: #888;
  font-size: 15px;
  list-style: none;
  padding-bottom: 3px;
  cursor: pointer;
  flex: 1;
`;

const ContentCategories = styled.div`
  padding: 5px 20px;
  background: #fff;
`;

const TitleCategory = styled.h4`
  font-weight: 500;
  display: flex;
  align-item: center;
  gap: 7px;
  padding: 7px 0;
`;

const UlList = styled.ul`
  justify-content: between;
  align-items: center;
  gap: 80px;
  width: 100%;
`;
const IconCategory = styled.span`
  display: grid;
  place-content: center;
  font-size: 17px;
`;

export {
  ContentCategories,
  IconCategory,
  ListCategories,
  SectionElement,
  TitleCategory,
  TitleSection,
  UlList,
};
